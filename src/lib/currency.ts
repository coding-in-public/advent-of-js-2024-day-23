export const formatCurrency = (amt: number) =>
  (amt / 100).toLocaleString("en-us", {
    currency: "USD",
    style: "currency",
  });
