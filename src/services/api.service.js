import { API_URLS_PAYMENTLIST } from "./constant/constants";

export const getPaymentList = async (queryParam) => {
  return await fetch(`${API_URLS_PAYMENTLIST}${queryParam}`);
};
