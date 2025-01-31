import { groq } from "next-sanity";

export const allCars = groq`*[_type == "cars"]`;
export const four = groq`*[_type == "cars"][0..3]`;