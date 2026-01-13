import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch the single note
  const note = await prisma.notes.findUnique({
    where: {
      id: id,
    },
  });

  // Handle 404 if note not found
  if (!note) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center pt-24 px-4 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">{note.title}</h1>
      <p className="text-white font-bold leading-relaxed text-lg whitespace-pre-wrap text-start w-full border-t border-gray-500 pt-6">
        {note.content}
      </p>

      <div className="mt-10 pt-4 border-t border-gray-500 w-full text-right text-gray-400 text-sm">
        Posted on {new Date(note.createdAt).toLocaleDateString()}
      </div>

      {/* Back Button aligned to the right */}
      <div className="w-full flex justify-end mt-4">
        <Link
          href="/mind-train/karma-habit"
          className="bg-gray-100/70 backdrop-blur-sm rounded-lg hover:bg-gray-100/80 transition-colors cursor-pointer px-4 py-2 text-gray-800 font-medium text-sm"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
