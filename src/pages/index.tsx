import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Dreamflux</h1>
      <p className="text-lg text-gray-600 mb-6">
        Create stunning AI-generated images using the best models from around the web.
      </p>
      <Link href="/generate">
        <button className="px-6 py-3 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition">
          Start Drawing
        </button>
      </Link>
    </div>
  );
}
