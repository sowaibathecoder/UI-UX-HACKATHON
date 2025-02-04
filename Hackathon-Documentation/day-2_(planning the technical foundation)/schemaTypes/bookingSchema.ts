export default {
  name: "booking",
  type: "document",
  title: "Booking",
  fields: [
    {
      name: "customer",
      type: "reference",
      to: [{ type: "customer" }],
      title: "Customer",
    },
    { name: "car", type: "reference", to: [{ type: "car" }], title: "Car" },
    { name: "rentalStartDate", type: "datetime", title: "Rental Start Date" },
    { name: "rentalEndDate", type: "datetime", title: "Rental End Date" },
    { name: "totalAmount", type: "number", title: "Total Amount" },
    {
      name: "status",
      type: "string",
      title: "Booking Status",
      options: { list: ["Pending", "Confirmed", "Completed", "Cancelled"] },
    },
  ],
};
