export interface CustomerErrors {
  name: string;
  shipAddress: string;
  shipCity: string;
  shipZip: string;
  email: string;
  mobile: string;
}

// type simplifiedCustumerErrors = Pick<CustomerErrors, "name" | "email">;

export type CustomerErrorsKey = keyof CustomerErrors;

export const emptyCustomerErrors: CustomerErrors = {
  name: "",
  shipAddress: "",
  shipCity: "",
  shipZip: "",
  email: "",
  mobile: "",
}