import { axiosInstance } from '_services/base';
import { useMutation, useQueryCache } from 'react-query';

export default function useDeleteNgoMutation() {
   const cache = useQueryCache();
   return useMutation(
      async (id) => {
         await axiosInstance.delete(`/organization/${id}`);
         return;
      },
      {
         onSuccess: () => console.log('success delete organization'),
         onMutate: (deleted_ngo) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            cache.cancelQueries('organizations');

            // Snapshot the previous value
            const previous_organizations = cache.getQueryData('organizations');

            // Optimistically update to the new list of organizations
            cache.setQueryData('organizations', (old_ngos: any) =>
               old_ngos.filter((ngo: any) => ngo._id !== deleted_ngo)
            );

            // Return the snapshotted value
            return () => cache.setQueryData('organizations', previous_organizations);
         },
         // If the mutation fails, use the value returned from onMutate to roll back
         onError: (_, __, rollback: any) => rollback(),
         // Always refetch after error or success:
         onSettled: () => {
            cache.invalidateQueries('organizations');
         }
      }
   );
}
