import { useState } from "react";

const defaultFormValues = {
  name: "",
  shipAddress: "",
  shipZip: "",
  shipCity: "",
  email: "",
  mobile: "",
  formSubmitted: false,
  success: false,
};

export const CustomerFormValidator = () => {
  const [values, setValues] = useState(defaultFormValues);
  const [errors, setErrors] = useState({} as any);

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("name" in fieldValues) {
      temp.name = fieldValues.name ? "" : "Obligatorisk.";
      if (fieldValues.name) {
        temp.name = /^[A-ZßÅÄÖÜ*][a-zåäöü*]+\s[A-ZßÅÄÖÜ*][a-zåäöü*]+$/.test(
          fieldValues.name
        )
          ? ""
          : "Ange för- och efternamn.";
      }
    }

    if ("shipAddress" in fieldValues) {
      temp.shipAddress = fieldValues.shipAddress ? "" : "Obligatorisk.";
      if (fieldValues.shipAddress) {
        temp.shipAddress = /^[A-ZßÅÄÖÜ][a-zåäöü]+\s[0-9]/.test(
          fieldValues.shipAddress
        )
          ? ""
          : "Ogiltig adress. Ange gatunamn och nummer.";
      }
    }

    if ("shipZip" in fieldValues) {
      temp.shipZip = fieldValues.shipZip ? 0 : "Obligatorisk.";
      if (fieldValues.shipZip) {
        temp.shipZip = /^[0-9]{5}$/g.test(fieldValues.shipZip)
          ? ""
          : "Ogiltigt postnummer. Ange 5 siffror";
      }
    }

    if ("shipCity" in fieldValues) {
      temp.shipCity = fieldValues.shipCity ? "" : "Obligatorisk.";
      if (fieldValues.shipCity) {
        temp.shipCity = /^[A-ZßÅÄÖÜ*][a-zåäöü*]+$/.test(fieldValues.shipCity)
          ? ""
          : "Ogiltig namn.";
      }
    }

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "Obligatorisk.";
      if (fieldValues.email) {
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Ogiltig adress.";
      }
    }

    if ("mobile" in fieldValues) {
      temp.mobile = fieldValues.mobile ? 0 : "Obligatorisk.";
      if (fieldValues.mobile)
        temp.mobile = /^[0-9]{10}$/g.test(fieldValues.mobile)
          ? ""
          : "Ogiltigt nummer. Ange 10 siffror.";
    }

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.name &&
      fieldValues.shipAddress &&
      fieldValues.shipZip &&
      fieldValues.shipCity &&
      fieldValues.email &&
      fieldValues.mobile &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  };
};
