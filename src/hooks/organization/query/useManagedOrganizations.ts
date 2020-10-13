import OrganizationService from '_services/organization.service';
import { useQuery } from 'react-query';

export default function useManagedOrganizations(id: string | undefined) {
   return useQuery('managed-organizations', async () => {
      const response = await OrganizationService.getManagedOrganizations(id);
      return response.data.data;
   });
}
