import { useQuery } from "react-query";

import OrganizationService from "_services/organization.service";

const getOrganizations = async () => {
  const response = await OrganizationService.getOrganizations();
  return response.data.data;
};

export default function useOrganizations() {
  return useQuery("organizations", getOrganizations);
}
