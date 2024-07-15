export async function POST(request) {
    const { title, description, tags } = await request.json();

    try {
        await connectToDb; // Connect to database

        // const res = await ........ 
        const data = await resizeBy.json();

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response("Failed to post data", { status: 500 });

    }
}