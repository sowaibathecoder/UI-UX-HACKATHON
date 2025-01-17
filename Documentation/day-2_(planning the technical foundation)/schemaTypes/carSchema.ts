export default {
  name: "car",
  type: "document",
  title: "Car",
  fields: [
    { name: "name", type: "string", title: "Car Name" },
    { name: "model", type: "string", title: "Model" },
    { name: "pricePerDay", type: "number", title: "Price Per Day" },
    { name: "availability", type: "boolean", title: "Available for Rent" },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      type: "image",
      title: "Car Image",
      options: { hotspot: true },
    },
    { name: "category", type: "string", title: "Category (e.g., SUV, Sedan)" },
    {
      name: "fuelType",
      type: "string",
      title: "Fuel Type (e.g., Petrol, Diesel, Electric)",
    },
    { name: "seatingCapacity", type: "number", title: "Seating Capacity" },
    {
      name: "rentalDuration",
      type: "string",
      title: "Rental Duration (e.g., Hourly, Daily)",
    },
  ],
};
