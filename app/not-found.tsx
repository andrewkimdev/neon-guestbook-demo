import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black p-4 font-mono text-green-400 sm:p-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl text-[#39ff14]">404</h1>
        <p className="mb-4">페이지를 찾을 수 없습니다</p>
        <Link
          href="/"
          className="border border-[#39ff14] px-4 py-2 hover:bg-[#39ff14] hover:text-black"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
