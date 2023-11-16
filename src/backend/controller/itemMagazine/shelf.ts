import {publicProcedure, router} from "@/src/backend/routers/trpc";

export const shelvesRouter = router({
  
  getTodos: publicProcedure.query(async () => { return getShelves() }),
  
})


export type ShelvesRouter = typeof shelvesRouter