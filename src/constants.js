export const NAME = "Natwest";

//TABLE HEADING
export const PAYMENT_AMOUNT = "Payment Amount";
export const PAYMENT_CURRENCY = "Payment Currency";
export const PAYMENT_TYPE = "Payment Type";
export const PAYMENT_STATUS = "Payment Status";
export const PAYMENT_DATE = "Payment Date";

// PAGE HEADING
export const PAYMENT_PAGE_HEADING = "Payment List";

// BUTTON NAME
export const PAYMENT_LOAD_MORE = "Load More";

//FILTER OPTIONS
const STATUS_APPROVED = "Approved";
const STATUS_CANCELLED = "Cancelled";
const STATUS_PENDING_APPROVAL = "Pending approval";

// TABLE FILTER OPTIONS
export const FILTER_OPTIONS = [
  { value: "A", label: STATUS_APPROVED },
  { value: "C", label: STATUS_CANCELLED },
  { value: "P", label: STATUS_PENDING_APPROVAL },
];
