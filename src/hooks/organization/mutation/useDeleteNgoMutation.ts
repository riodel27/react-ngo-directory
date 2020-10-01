import { useMutation, useQueryCache } from "react-query";

import { axiosInstance } from "_services/base";

//TODO: optimistic update
export default function useDeleteNgoMutation() {
  return useMutation(
    async (id) => {
      await axiosInstance.delete(`/organization/${id}`);
      return;
    },
    {
      onSuccess: () => console.log("success delete organization"),
    }
  );
}
