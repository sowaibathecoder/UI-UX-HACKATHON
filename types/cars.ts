export interface Car {
  _id: string;
  name: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice?: string;
  tags?: string[];
  image?: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
}
