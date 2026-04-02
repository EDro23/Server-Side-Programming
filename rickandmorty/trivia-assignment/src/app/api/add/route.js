import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const { id, name, species, image } = body;

    if (!id || !name || !species || !image) {
      return Response.json(
        { error: "id, name, species, and image are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("rickmorty");

    const result = await db.collection("characters").insertOne({
      id: Number(id),
      name,
      species,
      image,
    });

    return Response.json({
      message: "Character added",
      insertedId: result.insertedId,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to add character" },
      { status: 500 }
    );
  }
}