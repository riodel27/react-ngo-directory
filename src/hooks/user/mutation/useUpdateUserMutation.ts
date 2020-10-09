import { axiosInstance } from '_services/base';
import { useMutation } from 'react-query';

export default function useUpdateUserMutation() {
   return useMutation(
      async (data: any) => {
         await axiosInstance.put(`/user/${data?.id}`, data.data);
         return;
      },
      {
         onSuccess: () => console.log('success updating user')
      }
   );
}
