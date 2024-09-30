"use client";

export default function Home() {
  return (
    <>
      <div className="flex items-center gap-x-16">
        <div className="w-20 h-20 bg-[#121212]">dark gray</div>
        <div className="w-20 h-20 bg-[#1E1E1E]">light gray</div>
      </div>
      <div className="flex items-center gap-x-16">
        <div className="w-20 h-20 bg-[#151515]">dark gray</div>
        <div className="w-20 h-20 bg-[#202020]">light gray</div>
      </div>
    </>
  );
}
