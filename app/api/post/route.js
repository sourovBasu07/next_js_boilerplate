export async function POST(request) {
    // const { title, description, tags } = await request.json();

    try {
        // await connectToDb; // Connect to database

        // // const res = await ........ 
        // const data = await res.json();

        return new Response(JSON.stringify({ message: "Api created successfully " }), { status: 200 });
    } catch (error) {
        return new Response("Failed to post data", { status: 500 });

    }
}

export async function GET(request) {
    try {
        // await connectToDb; // Connect to database

        // // const res = await ........ 
        // const data = await res.json();

        return new Response(JSON.stringify({ message: "Api created successfully " }), { status: 200 });
    } catch (error) {
        return new Response("Failed to post data", { status: 500 });

    }
}