import { useQuery } from 'react-query';
import { not } from 'ramda';

import { useAuthState } from 'context/auth';
import { Organization } from '@/global/types';
import OrganizationService from '_services/organization.service';

export default function useOrganizations(other_organization?: boolean) {
   const { user } = useAuthState();

   return useQuery('organizations', async () => {
      const response = await OrganizationService.getOrganizations();

      if (other_organization)
         return response.data.data.filter((org: Organization) =>
            not(org?.admins?.includes(user._id))
         );

      return response.data.dat;
   });
}
