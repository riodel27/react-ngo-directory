import { useMutation } from "react-query";

import AuthService from "_services/auth.service";

export default function useSignUpMutation() {
  return useMutation(AuthService.SignUp, {
    onSuccess: () => {
      console.log("success sign up mutation");
    },
  });
}
