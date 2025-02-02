// import { sanityClient } from "@/sanity/sanityClient";
// import { logError } from "./errorLogger";
// import { Car } from "@/types/Car";

// export async function getCars(): Promise<Car[]> {
//   try {
//     const query = `*[_type == "car"]{
//       _id,
//       name,
//       brand,
//       type,
//       fuelCapacity,
//       transmission,
//       seatingCapacity,
//       pricePerDay,
//       originalPrice,
//       tags,
//       "imageUrl": image.asset->url
//     }`;

//     return await sanityClient.fetch(query);
//   } catch (error) {
//     logError(error, "getCars");
//     return []; // Agar error aaye toh empty array return karega
//   }
// }
