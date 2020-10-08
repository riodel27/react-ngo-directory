import { getAuthSession } from '_libs/auth.helper';
import { axiosInstance } from '_services/base';
import { useInfiniteQuery } from 'react-query';

export default function useUsersInfiniteQuery() {
   return useInfiniteQuery(
      'infinite-users',
      async (_, nextOffset = 0) => {
         const headers = { Authorization: `Bearer ${getAuthSession()}` };
         const response = await axiosInstance.get('/users?offset=' + nextOffset, {
            headers
         });

         return response.data;
      },
      {
         getFetchMore: (lastGroup) => lastGroup.nextOffset
      }
   );
}
