import clientPromise from "@/lib/mongodb";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const client = await clientPromise;
    const db = client.db("rickmorty");

    const character = await db.collection("characters").findOne({
      id: Number(id),
    });

    if (!character) {
      return Response.json({ error: "Character not found" }, { status: 404 });
    }

    return Response.json(character);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch character" },
      { status: 500 }
    );
  }
}