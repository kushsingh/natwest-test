import { API_URLS_PAYMENTLIST } from "./utils/constants";

export const getPaymentList = (queryParam) => {
  return fetch(`${API_URLS_PAYMENTLIST}${queryParam}`);
};
