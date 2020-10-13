import { axiosInstance } from '_services/base';
import { useMutation, useQueryCache } from 'react-query';

import { OrganizationInput } from '@/global/types';

export default function useUpdateNgoMutation() {
   const cache = useQueryCache();
   return useMutation(
      async (data: OrganizationInput | null) => {
         await axiosInstance.put(`/organization/${data?.id}`, data);
         return;
      },
      {
         onSuccess: () => console.log('success update organization'),
         onMutate: (updated_ngo) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            cache.cancelQueries('organizations');

            // Snapshot the previous value
            const previous_organizations = cache.getQueryData('organizations');

            //TODO: might need to refactor and is now based on managed-organizations query...
            // Optimistically update to the new list of organizations
            cache.setQueryData('organizations', (old_ngos: any) => {
               const elementsIndex = old_ngos.findIndex((ngo: any) => ngo._id === updated_ngo?.id);

               const new_ngos = [...old_ngos];

               new_ngos[elementsIndex] = { ...new_ngos[elementsIndex], ...updated_ngo };

               return new_ngos;
            });

            // Return the snapshotted value
            return () => cache.setQueryData('organizations', previous_organizations);
         },
         // If the mutation fails, use the value returned from onMutate to roll back
         onError: (err, updated_ngo, rollback: any) => rollback(),
         // Always refetch after error or success:
         onSettled: () => {
            cache.invalidateQueries('organizations');
         }
      }
   );
}
