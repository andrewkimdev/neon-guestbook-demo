import { prisma } from "@/lib/prisma";
import { addEntry } from "./actions";

export default async function Home() {
  const entries = await prisma.entry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-black p-4 font-mono text-green-400 sm:p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-wider text-[#39ff14] sm:text-4xl">
          NEON GUESTBOOK
        </h1>

        <form
          action={addEntry}
          className="mb-8 border border-[#39ff14] bg-black p-4 shadow-[0_0_10px_#39ff14] sm:p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm uppercase tracking-wide">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-[#39ff14] bg-black p-2 text-[#39ff14] placeholder-green-800 outline-none focus:shadow-[0_0_5px_#39ff14]"
              placeholder="Enter your name..."
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-sm uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              className="w-full resize-none border border-[#39ff14] bg-black p-2 text-[#39ff14] placeholder-green-800 outline-none focus:shadow-[0_0_5px_#39ff14]"
              placeholder="Leave your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full border border-[#39ff14] bg-[#39ff14] px-4 py-2 font-bold uppercase tracking-wider text-black transition-all hover:bg-black hover:text-[#39ff14] hover:shadow-[0_0_10px_#39ff14]"
          >
            Sign Guestbook
          </button>
        </form>

        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-center text-green-600">No entries yet. Be the first to sign!</p>
          ) : (
            entries.map((entry) => (
              <div
                key={entry.id}
                className="border border-[#39ff14]/50 bg-black p-4 transition-all hover:border-[#39ff14] hover:shadow-[0_0_5px_#39ff14]"
              >
                <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <span className="font-bold text-[#39ff14]">{entry.name}</span>
                  <span className="text-xs text-green-600">
                    {entry.createdAt.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <p className="text-green-300">{entry.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
