import { NextRequest, NextResponse } from "next/server";
import books from "@/app/api/db";

type RouteParams = {
  params: Promise<{ id: string }>;
};

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id: idStr } = await params;
  const id = +idStr;
  const book = await request.json();

  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }
  books[index] = book;

  return Response.json(book);
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  const { id: idStr } = await params;
  const id = +idStr;

  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return NextResponse.json(
      { error: "Book not found" },
      { status: 404 }
    );
  }
  books.splice(index, 1);

  return NextResponse.json({ message: `Book with id ${id} deleted.` });
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  const { id: idStr } = await params;
  const id = Number(idStr);

  if (isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid id" },
      { status: 400 }
    );
  }

  const book = books.find(b => b.id === id);
  if (!book) {
    return NextResponse.json(
      { error: "Book not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(book);
}