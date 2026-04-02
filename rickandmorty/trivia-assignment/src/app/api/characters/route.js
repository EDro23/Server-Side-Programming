import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("rickmorty");

    const characters = await db
      .collection("characters")
      .find({})
      .toArray();

    return Response.json(characters);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch characters" },
      { status: 500 }
    );
  }
}