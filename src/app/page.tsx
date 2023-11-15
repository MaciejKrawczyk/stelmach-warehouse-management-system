import {server} from "@/backend/trpc/server";

export default async function Home() {
  
  const data = await server.itemMagazine.todo.getTodos()
  console.log(data)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    </main>
  )
}
