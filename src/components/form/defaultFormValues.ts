export interface Customer {
  name: string;
  shipAddress: string;
  shipZip: string;
  shipCity: string;
  email: string;
  mobile: string;
  formSubmitted: boolean;
  success: boolean;
}

export const defaultFormValues: Customer = {
  name: "",
  shipAddress: "",
  shipZip: "",
  shipCity: "",
  email: "",
  mobile: "",
  formSubmitted: false,
  success: false,
};
