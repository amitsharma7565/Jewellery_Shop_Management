import React from "react";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IJTGxqGw5Au
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-[#f97316] p-6">
        <h1 className="text-3xl font-bold text-white">JSMS</h1>
        <nav className="mt-10">
          <a href="#" className="flex items-center gap-2 px-4 py-2 text-white bg-[#f97316] rounded-md">
            Dashboard
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </header>
        <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <button className="h-24 bg-gray-200 text-black">VENDER</button>
          <button className="h-24 bg-gray-200 text-black">KARIGAR</button>
          <button className="h-24 bg-gray-200 text-black">ITEM</button>
          <button className="h-24 bg-gray-200 text-black">STAFF</button>
          <button className="h-24 bg-gray-200 text-black">ACC & SUB ACCOUNT</button>
          <button className="h-24 bg-gray-200 text-black">STOCKS</button>
          <button className="h-24 bg-gray-200 text-black">CLIENTS</button>
          <button className="h-24 bg-gray-200 text-black">FOLLOWUP</button>
          <button className="h-24 bg-gray-200 text-black">REMINDER</button>
          <button className="h-24 bg-gray-200 text-black">STOCK REQUIREMENT</button>
          <button className="h-24 bg-gray-200 text-black">PICS</button>
        </section>
      </main>
    </div>
  )
}


