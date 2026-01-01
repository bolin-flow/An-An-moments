import books from "@/app/api/db";

export async function PUT(request: Request, context: { params: { id: string } })
{
    const id = +context.params.id;
    const book = await request.json();

    const index = books.findIndex(b => b.id === id);
    books[index] = book;

    return Response.json(book);
}


export async function DELETE(request: Request, context: { params: { id: string } })
{
    const id = +context.params.id;

    const index = books.findIndex(b => b.id === id);
    books.splice(index, 1);

    return Response.json({ message: `Book with id ${id} deleted.` });
}

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
    const { id: idStr } = await context.params;
    const id = Number(idStr);
    if (isNaN(id)) {
        return new Response(JSON.stringify({ error: "Invalid id" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }
    const book = books.find(b => b.id === id);
    if (!book) {
        return new Response(JSON.stringify({ error: "Book not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" }
        });
    }
    return Response.json(book);
}