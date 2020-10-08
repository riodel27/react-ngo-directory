import AuthService from '_services/auth.service';
import { useMutation } from 'react-query';

export default function useSignUpMutation() {
   return useMutation(AuthService.SignUp, {
      onSuccess: () => {
         console.log('success sign up mutation');
      }
   });
}
