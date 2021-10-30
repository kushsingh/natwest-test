import { API_URLS_PAYMENTLIST } from "./constant/constants";

export const getPaymentList = (queryParam) => {
  return fetch(`${API_URLS_PAYMENTLIST}${queryParam}`);
};
