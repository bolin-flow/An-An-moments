import { prisma } from "@/lib/prisma";

export default async function PostsPage() {
  // Fetch all notes from database
  const notes = await prisma.notes.findMany({
    //prisma.notes.findMany() fetches all records from the "notes" table in the database
    orderBy: {
      createdAt: "asc", // Most recent first
    },
  });

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts ({notes.length})</h1>
      {/* Responsive grid: 1 col mobile -> 5 cols desktop */}
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 list-none">
        {notes.map((note) => (
          <li
            key={note.id}
            className="flex flex-col py-6 px-6 bg-gray-200/70 backdrop-blur-sm rounded-lg border border-gray-100"
          >
            <h3 className="text-orange-700/90 font-bold">{note.title}</h3>
            {/* flex-1 means "grow to fill remaining space -> pushes the footer div to the bottom */}
            <p className="flex-1 mb-4 text-gray-600 text-md line-clamp-6">
              {note.content}
            </p>
            <div className="border-t border-gray-500/50 pt-2 mt-auto">
              {/* block makes it behave like a <div> - takes full width of its container */}
              <span className="text-sm text-gray-600 block text-right">
                {new Date(note.createdAt).toLocaleDateString()}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
