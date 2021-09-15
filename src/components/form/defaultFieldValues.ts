import { CustomerErrorsKey } from "./customerErrors"


interface InputFieldValues {
  label: string;
  name: CustomerErrorsKey;
  placeholder: string;
  type?: string;
  autoComplete: string;
}

export const inputFieldValues: InputFieldValues[] = [
  {
    label: "För- & efternamn",
    name: "name",
    placeholder: "Ex. Anna Andersson",
    autoComplete: "name",
  },
  {
    label: "Adress",
    name: "shipAddress",
    placeholder: "Ex. Strandgatan 1",
    autoComplete: "shipping street-address",
  },
  {
    label: "Postnummer",
    name: "shipZip",
    placeholder: "Ex. 53210",
    autoComplete: "shipping postal-code",
  },
  {
    label: "Stad",
    name: "shipCity",
    placeholder: "Ex. Stockholm",
    autoComplete: "shipping locality",
  },
  {
    type: "email",
    label: "Email",
    name: "email",
    placeholder: "Ex. namn@exempel.com",
    autoComplete: "email",
  },
  {
    label: "Mobilnummer",
    type: "tel",
    name: "mobile",
    placeholder: "Ex. 0708999888",
    autoComplete: "tel",
  },
];
