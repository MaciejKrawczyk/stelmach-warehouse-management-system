import {publicProcedure, router} from "@/backend/routers/trpc";
import {getTodos} from "@/backend/services/itemMagazine/todos";

export const todosRouter = router({
  
  getTodos: publicProcedure.query(async () => { return getTodos() }),
  
})


export type TodosRouter = typeof todosRouter