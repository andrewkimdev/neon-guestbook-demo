"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-black p-4 font-mono text-green-400 sm:p-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-2xl text-red-500">오류가 발생했습니다</h1>
        <button
          onClick={reset}
          className="border border-[#39ff14] px-4 py-2 hover:bg-[#39ff14] hover:text-black"
        >
          다시 시도
        </button>
      </div>
    </main>
  );
}
