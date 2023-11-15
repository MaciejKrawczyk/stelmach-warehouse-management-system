import {publicProcedure, router} from "@/src/backend/routers/trpc";
import {getTodos} from "@/src/backend/services/itemMagazine/todos";

export const todosRouter = router({
  
  getTodos: publicProcedure.query(async () => { return getTodos() }),
  
})


export type TodosRouter = typeof todosRouter