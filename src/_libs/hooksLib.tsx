import React, { useState } from 'react';

import { OrganizationInput, UserForm } from '@/global/types';

export function useFormFields(
   initialState: UserForm
): [UserForm, (event: React.ChangeEvent<HTMLInputElement>) => void] {
   const [fields, setValues] = useState(initialState);

   return [
      fields,
      function (event: React.ChangeEvent<HTMLInputElement>) {
         setValues({
            ...fields,
            [event.target.id]: event.target.value,
            ...(event.target.id === 'ngoAdmin' && event.target.checked
               ? {
                    userType: 'ngo_admin'
                 }
               : {
                    userType: 'user'
                 })
         });
      }
   ];
}

export function useFormNgoFields(
   initialState: OrganizationInput | null
): [
   OrganizationInput | null,
   React.Dispatch<React.SetStateAction<OrganizationInput | null>>,
   (event: React.ChangeEvent<HTMLInputElement>) => void,
   () => void
] {
   const [fields, setValues] = useState(initialState);

   return [
      fields,
      setValues,
      function (event: React.ChangeEvent<HTMLInputElement>) {
         setValues({
            ...fields,
            [event.target.id]: event.target.value
         });
      },
      function () {
         setValues(initialState);
      }
   ];
}

export function useLocalStorage<T>(key: string, initialValue: T) {
   // State to store our value
   // Pass initial state function to useState so logic is only executed once
   const [storedValue, setStoredValue] = useState<T>(() => {
      try {
         // Get from local storage by key
         const item = window.localStorage.getItem(key);
         // Parse stored json or if none return initialValue
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         // If error also return initialValue
         console.log(error);
         return initialValue;
      }
   });

   // Return a wrapped version of useState's setter function that ...

   // ... persists the new value to localStorage.
   const setValue = (value: T | ((val: T) => T)) => {
      try {
         // Allow value to be a function so we have same API as useState
         const valueToStore = value instanceof Function ? value(storedValue) : value;
         // Save state
         setStoredValue(valueToStore);
         // Save to local storage
         window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
         // A more advanced implementation would handle the error case
         console.log(error);
      }
   };

   return [storedValue, setValue] as const;
}
