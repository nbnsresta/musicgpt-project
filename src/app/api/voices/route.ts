import { NextRequest, NextResponse } from "next/server";
import type { Voice } from "../../../api-client/types";

const MOCK_VOICES: Voice[] = [
  {
    id: "oprah",
    name: "Oprah Winfrey",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "ellen",
    name: "Ellen DeGeneres",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "jimmy",
    name: "Jimmy Fallon",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "ryan",
    name: "Ryan Seacrest",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "simon",
    name: "Simon Cowell",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "kelly",
    name: "Kelly Clarkson",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "steve",
    name: "Steve Harvey",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "trevor",
    name: "Trevor Noah",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "james",
    name: "James Corden",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "drew",
    name: "Drew Barrymore",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "taylor",
    name: "Taylor Swift",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "beyonce",
    name: "Beyoncé Knowles",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "ariana",
    name: "Ariana Grande",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "ed",
    name: "Ed Sheeran",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "bruno",
    name: "Bruno Mars",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "ladygaga",
    name: "Lady Gaga",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "selena",
    name: "Selena Gomez",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "justin",
    name: "Justin Bieber",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "katy",
    name: "Katy Perry",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "harry",
    name: "Harry Styles",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "jlo",
    name: "Jennifer Lopez",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "rock",
    name: "Dwayne Johnson",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "tom",
    name: "Tom Hanks",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "leo",
    name: "Leonardo DiCaprio",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "brad",
    name: "Brad Pitt",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "angelina",
    name: "Angelina Jolie",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "scarlett",
    name: "Scarlett Johansson",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "zendaya",
    name: "Zendaya Coleman",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "chris",
    name: "Chris Hemsworth",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "robert",
    name: "Robert Downey Jr",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "will",
    name: "Will Smith",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "margot",
    name: "Margot Robbie",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "emma",
    name: "Emma Stone",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "hugh",
    name: "Hugh Jackman",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "priyanka",
    name: "Priyanka Chopra",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "shahrukh",
    name: "Shah Rukh Khan",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "jungkook",
    name: "BTS Jungkook",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "lisa",
    name: "BLACKPINK Lisa",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "billie",
    name: "Billie Eilish",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "dua",
    name: "Dua Lipa",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "shakira",
    name: "Shakira Mebarak",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "ricky",
    name: "Ricky Martin",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "celine",
    name: "Celine Dion",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "adele",
    name: "Adele Laurie Blue",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "john",
    name: "John Legend",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "alicia",
    name: "Alicia Keys",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "blake",
    name: "Blake Shelton",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "gwen",
    name: "Gwen Stefani",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "nick",
    name: "Nick Jonas",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
  },
  {
    id: "miley",
    name: "Miley Cyrus",
    imageUrl: "/api/placeholder/150/150",
    audioUrl: "/api/placeholder/audio",
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
