import {server} from "@/src/backend/trpc/server";
import Link from "next/link";

export default async function Home() {
  
  const data = await server.itemMagazine.todo.getTodos()
  console.log(data)
  
  return (
    <main className="flex justify-center items-center">
      
      <Link
        href={'/item-magazine'}
        className="m-5 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
      >
        Go to Item Magazine
      </Link>
      
      <Link
        href={'/file-opener'}
        className="m-5 px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50"
      >
        Open File Opener
      </Link>
      
    </main>
  )
}
