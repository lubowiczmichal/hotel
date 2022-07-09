import standardSingleRoom from "../assets/rooms/standardSingleRoom.jpg";

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
    price: 50,
    image: standardSingleRoom,
  },
];
export { roomData };
export type { Room };
