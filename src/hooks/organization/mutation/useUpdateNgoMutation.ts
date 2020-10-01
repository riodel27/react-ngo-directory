import { useMutation, useQueryCache } from "react-query";

import { axiosInstance } from "_services/base";
import { OrganizationInput } from "@/global/types";

//TODO: optimistic update
export default function useUpdateNgoMutation() {
  return useMutation(
    async (data: OrganizationInput | null) => {
      await axiosInstance.put(`/organization/${data?.id}`, data);
      return;
    },
    {
      onSuccess: () => console.log("success update organization"),
    }
  );
}
