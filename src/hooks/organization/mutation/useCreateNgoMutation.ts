import { useMutation } from "react-query";

import { axiosInstance } from "_services/base";
import { OrganizationInput } from "@/global/types";

export default function useCreateNgoMutation() {
  return useMutation(
    async (data: OrganizationInput | null) => {
      await axiosInstance.post("/organization", data);
      return;
    },
    {
      onSuccess: () => {
        console.log("success create organiztion ");
      },
    }
  );
}
