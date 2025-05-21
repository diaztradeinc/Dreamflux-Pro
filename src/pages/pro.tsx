import Link from "next/link";

export default function ProPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Go Pro with Dreamflux</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Unlock unlimited generations, priority rendering, exclusive models, and more.
      </p>
      <Link href="/api/subscribe">
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-lg hover:bg-blue-700 transition">
          Upgrade to Pro
        </button>
      </Link>
    </div>
  );
}
