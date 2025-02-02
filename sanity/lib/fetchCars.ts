import { client } from "./client";

export async function fetchCars() {
  try {
    const query = `*[_type == "car"] {
      name,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      "imageUrl": image.asset->url,
      _id
    }`;

    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw new Error("Failed to fetch data. Please check your internet connection.");
  }
}


  