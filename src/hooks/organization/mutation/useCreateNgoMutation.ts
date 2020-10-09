import { axiosInstance } from '_services/base';
import { useMutation, useQueryCache } from 'react-query';

import { useAuthState } from 'context/auth';
import { OrganizationInput } from '@/global/types';
import useUpdateUserMutation from 'hooks/user/mutation/useUpdateUserMutation';

export default function useCreateNgoMutation() {
   const cache = useQueryCache();
   const { user } = useAuthState();

   const [updateUser] = useUpdateUserMutation();

   return useMutation(
      async (data: OrganizationInput | null) => {
         const response = await axiosInstance.post('/organization', data);
         return response.data;
      },
      {
         onSuccess: (ngo, variables) => {
            // link newly created ngo to user
            updateUser({
               id: user._id,
               data: { organizations: [...user.organizations, ngo.data._id] }
            });
         },
         onMutate: (newNgo) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            cache.cancelQueries('organizations');

            // Snapshot the previous value
            const previousOrganizations = cache.getQueryData('organizations');

            // Optimistically update to the new value
            cache.setQueryData('organizations', (old: any) => [...old, newNgo]);

            // Return the snapshotted value
            return () => cache.setQueryData('organizations', previousOrganizations);
         },
         // If the mutation fails, use the value returned from onMutate to roll back
         onError: (err, newNgo, rollback: any) => rollback(),
         // Always refetch after error or success:
         onSettled: () => {
            cache.invalidateQueries('organizations');
         }
      }
   );
}
