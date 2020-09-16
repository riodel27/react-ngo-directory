import React, { useState } from "react";

import { User } from "../types";

export function useFormFields(initialState: User): [User, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function (event: React.ChangeEvent<HTMLInputElement>) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
        ...(event.target.id === "ngoAdmin" && event.target.checked
          ? {
              userType: "ngo_admin",
            }
          : {
              userType: "user",
            }),
      });
    },
  ];
}
