import standardSingleRoom from "../assets/rooms/standardSingleRoom.png";
import deluxeSingleRoom from "../assets/rooms/deluxeSingleRoom.png";
import standardDoubleRoom from "../assets/rooms/standardDoubleRoom.png";
import familyRoom from "../assets/rooms/familyRoom.png";
type Room = {
  name: string;
  bathrooms: number;
  beds: number;
  people: number;
  price: number;
  image: string;
};

const roomData: Room[] = [
  {
    name: "Standard Single Room",
    bathrooms: 1,
    beds: 1,
    people: 1,
    price: 190,
    image: standardSingleRoom,
  },
  {
    name: "Deluxe Single Room",
    bathrooms: 1,
    beds: 1,
    people: 1,
    price: 250,
    image: deluxeSingleRoom,
  },
  {
    name: "Standard Double Room",
    bathrooms: 1,
    beds: 1,
    people: 2,
    price: 400,
    image: standardDoubleRoom,
  },
  {
    name: "Family Room",
    bathrooms: 2,
    beds: 3,
    people: 5,
    price: 700,
    image: familyRoom,
  },
];
export { roomData };
export type { Room };
