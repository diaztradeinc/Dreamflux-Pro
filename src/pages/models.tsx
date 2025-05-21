import React from "react";

const mockModels = [
  { id: "dreamshaper", name: "DreamShaper", thumbnail: "/models/dreamshaper.png" },
  { id: "realistic", name: "Realistic Vision", thumbnail: "/models/realistic.png" },
  { id: "anime", name: "Anime Style", thumbnail: "/models/anime.png" },
];

export default function ModelSelectionPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Select a Model</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {mockModels.map((model) => (
          <div
            key={model.id}
            className="rounded-xl border shadow hover:shadow-lg transition cursor-pointer p-4 text-center"
          >
            <img src={model.thumbnail} alt={model.name} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h2 className="text-lg font-semibold">{model.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
