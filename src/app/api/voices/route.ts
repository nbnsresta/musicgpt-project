import { NextResponse } from "next/server";
import type { Voice } from "../../../api-client/types";

const MOCK_VOICES: Voice[] = [
  {
    id: "oprah",
    name: "Oprah Winfrey",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "ellen",
    name: "Ellen DeGeneres",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "jimmy",
    name: "Jimmy Fallon",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "ryan",
    name: "Ryan Seacrest",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "simon",
    name: "Simon Cowell",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "kelly",
    name: "Kelly Clarkson",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "steve",
    name: "Steve Harvey",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "trevor",
    name: "Trevor Noah",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "james",
    name: "James Corden",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "drew",
    name: "Drew Barrymore",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "taylor",
    name: "Taylor Swift",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "beyonce",
    name: "Beyoncé Knowles",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "ariana",
    name: "Ariana Grande",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "ed",
    name: "Ed Sheeran",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "bruno",
    name: "Bruno Mars",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "ladygaga",
    name: "Lady Gaga",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "selena",
    name: "Selena Gomez",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "justin",
    name: "Justin Bieber",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "katy",
    name: "Katy Perry",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "harry",
    name: "Harry Styles",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "jlo",
    name: "Jennifer Lopez",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "rock",
    name: "Dwayne Johnson",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "tom",
    name: "Tom Hanks",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "leo",
    name: "Leonardo DiCaprio",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "brad",
    name: "Brad Pitt",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "angelina",
    name: "Angelina Jolie",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "scarlett",
    name: "Scarlett Johansson",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "zendaya",
    name: "Zendaya Coleman",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "chris",
    name: "Chris Hemsworth",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "robert",
    name: "Robert Downey Jr",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "will",
    name: "Will Smith",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "margot",
    name: "Margot Robbie",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "emma",
    name: "Emma Stone",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "hugh",
    name: "Hugh Jackman",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "priyanka",
    name: "Priyanka Chopra",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "shahrukh",
    name: "Shah Rukh Khan",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "jungkook",
    name: "BTS Jungkook",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "lisa",
    name: "BLACKPINK Lisa",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "billie",
    name: "Billie Eilish",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "dua",
    name: "Dua Lipa",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "shakira",
    name: "Shakira Mebarak",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "ricky",
    name: "Ricky Martin",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "celine",
    name: "Celine Dion",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "adele",
    name: "Adele Laurie Blue",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "john",
    name: "John Legend",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "alicia",
    name: "Alicia Keys",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "blake",
    name: "Blake Shelton",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "gwen",
    name: "Gwen Stefani",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "nick",
    name: "Nick Jonas",
    imageUrl: "",
    audioUrl: "",
  },
  {
    id: "miley",
    name: "Miley Cyrus",
    imageUrl: "",
    audioUrl: "",
  },
];

export async function GET() {
  return NextResponse.json({ data: MOCK_VOICES }, { status: 200 });
}

// async submitRequest(
//   request: SubmitRequest
// ): Promise<ApiResponse<SubmitResponse>> {
//   return this.post<SubmitResponse>("/api/submit", request);
// }
