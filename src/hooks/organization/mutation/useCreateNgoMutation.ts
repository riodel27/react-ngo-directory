import { useMutation, useQueryCache } from "react-query";

import { axiosInstance } from "_services/base";
import { OrganizationInput } from "@/global/types";

export default function useCreateNgoMutation() {
  const cache = useQueryCache();

  return useMutation(
    async (data: OrganizationInput | null) => {
      await axiosInstance.post("/organization", data);
      return;
    },
    {
      onSuccess: () => {},
      onMutate: (newNgo) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        cache.cancelQueries("organizations");

        // Snapshot the previous value
        const previousTodos = cache.getQueryData("organizations");

        // Optimistically update to the new value
        cache.setQueryData("organizations", (old: any) => [...old, newNgo]);

        // Return the snapshotted value
        return () => cache.setQueryData("organizations", previousTodos);
      },
      // If the mutation fails, use the value returned from onMutate to roll back
      onError: (err, newNgo, rollback: any) => rollback(),
      // Always refetch after error or success:
      onSettled: () => {
        cache.invalidateQueries("organizations");
      },
    }
  );
}
