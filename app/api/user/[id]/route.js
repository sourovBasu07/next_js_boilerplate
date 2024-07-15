export async function GET(request) {
    try {
        await connectToDb(); // Connect to database
        // const data = await ...... 

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch data", { status: 500 });
    }
};