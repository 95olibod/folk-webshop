import { useEffect, useState } from "react";
import { CustomerErrors, emptyCustomerErrors } from "./customerErrors";
import { defaultFormValues, Customer } from "./defaultFormValues";

//Customer Form component
export const CustomerFormValidator = () => {

  //Define states
  const [customer, setCustomer] = useState(defaultFormValues);
  const [errors, setErrors] = useState(emptyCustomerErrors);
  const [userData, setUserData] = useState<string[]>(
    JSON.parse(localStorage.getItem("userData") || "[]")
  );

  //Fill local storage with user data
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  //Set user data
  const toggleUserData = (userEmail: string) => {
    setUserData([userEmail]);
  };

  //Validate cutsomer/inputs
  const validate = (fieldValues: Partial<Customer>) => {
    let nextError: CustomerErrors = { ...errors };

    if (fieldValues.name !== undefined) {
      nextError.name = fieldValues.name ? "" : "Obligatorisk.";
      if (fieldValues.name) {
        nextError.name =
          /^[A-ZßÅÄÖÜ*][a-záéåäöü*]+\s[A-ZßÅÄÖÜ*][a-zåäöüáé*]+$/.test(
            fieldValues.name
          )
            ? ""
            : "Ange för- & efternamn. Börja med versaler";
      }
    }

    if (fieldValues.shipAddress !== undefined) {
      nextError.shipAddress = fieldValues.shipAddress ? "" : "Obligatorisk.";
      if (fieldValues.shipAddress) {
        nextError.shipAddress = /^[A-ZßÅÄÖÜ][a-zåäöüéá]+\s[0-9]/.test(
          fieldValues.shipAddress
        )
          ? ""
          : "Ange gatunamn & nummer. Börja med versal";
      }
    }

    if (fieldValues.shipZip !== undefined) {
      nextError.shipZip = fieldValues.shipZip ? "" : "Obligatorisk.";
      if (fieldValues.shipZip) {
        nextError.shipZip = /^[0-9]{5}$/g.test(fieldValues.shipZip)
          ? ""
          : "Ange 5 siffror.";
      }
    }

    if (fieldValues.shipCity !== undefined) {
      nextError.shipCity = fieldValues.shipCity ? "" : "Obligatorisk.";
      if (fieldValues.shipCity) {
        nextError.shipCity = /^[A-ZßÅÄÖÜ*][a-zåäöüáé*]+$/.test(
          fieldValues.shipCity
        )
          ? ""
          : "Börja med versal.";
      }
    }

    if (fieldValues.email !== undefined) {
      nextError.email = fieldValues.email ? "" : "Obligatorisk.";
      if (fieldValues.email) {
        nextError.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Ogiltig adress.";
      }
      toggleUserData(fieldValues.email);
    }

    if (fieldValues.mobile !== undefined) {
      nextError.mobile = fieldValues.mobile ? "" : "Obligatorisk.";
      if (fieldValues.mobile)
        nextError.mobile = /^[0-9]{10}$/g.test(fieldValues.mobile)
          ? ""
          : "Ange 10 siffror.";
    }

    setErrors({
      ...nextError,
    });
  };

  //Handle input from form
  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });
    validate({ [name]: value } as Partial<Customer>);
  };

  //Check if form is valid
  const formIsValid = () => {
    const isValid =
        customer.name &&
        customer.shipAddress &&
        customer.shipZip &&
        customer.shipCity &&
        customer.email &&
        customer.mobile &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  return {
    handleInputValue,
    formIsValid,
    errors,
  };
};
