export default {
  name: "customer",
  type: "document",
  title: "Customer",
  fields: [
    { name: "name", type: "string", title: "Customer Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "phone", type: "string", title: "Phone Number" },
    { name: "address", type: "string", title: "Address" },
    {
      name: "rentalHistory",
      type: "array",
      title: "Rental History",
      of: [{ type: "reference", to: [{ type: "booking" }] }],
    },
  ],
};
