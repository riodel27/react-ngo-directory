export function getAuthSession() {
   const token = localStorage.getItem('token');

   if (token) {
      return token;
   }

   return null;
}
