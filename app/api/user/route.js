export async function GET(request) {
    try {
        // const res = await ....... 
        const data = await res.json();

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch data", { status: 500 });
    }
}

export async function POST(request) {

};

export async function PATCH(request) {

};

export async function DELETE(request) {

}