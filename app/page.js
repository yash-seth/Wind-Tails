import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen p-5 pt-16">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8">
        <h1>Wind Tails</h1>
        <div className="grid grid-cols-2 gap-4 text-center">
          <Link
            className="p-5 border hover:bg-gradient-to-l rounded-xl bg-gradient-to-r from-teal-500 to-fuchsia-500"
            href="/playground"
          >
            Playground
          </Link>
          <Link
            className="p-5 border hover:bg-gradient-to-l rounded-xl bg-gradient-to-r from-teal-500 to-fuchsia-500"
            href="/elements"
          >
            Elements
          </Link>
        </div>
      </div>
    </main>
  );
}
