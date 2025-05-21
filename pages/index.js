import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>DreamFlux Create</title>
      </Head>
      <main className="min-h-screen bg-black text-white p-6 font-sans">
        <h1 className="text-3xl font-bold mb-4">Generate Your Dream Image</h1>

        <div className="flex gap-2 mb-4">
          {['SD 1.5', 'SDXL', 'Flux', 'HiDream', 'SD3.5'].map((tab, idx) => (
            <button key={idx} className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-black">{tab}</button>
          ))}
        </div>

        <label className="block mt-4 text-cyan-400">Prompt</label>
        <textarea className="w-full bg-gray-900 p-2 rounded-lg border border-gray-700" rows="2" placeholder="What do you dream of?" />

        <label className="block mt-4 text-cyan-400">Negative Prompt</label>
        <textarea className="w-full bg-gray-900 p-2 rounded-lg border border-gray-700" rows="2" placeholder="What do you want to exclude?" />

        <label className="block mt-4 text-cyan-400">Upload Image (optional)</label>
        <input type="file" className="block w-full text-white mt-1" />

        <button className="mt-6 px-6 py-3 bg-cyan-400 text-black font-bold rounded-full hover:bg-cyan-600">
          Start Drawing
        </button>
      </main>
    </>
  )
}