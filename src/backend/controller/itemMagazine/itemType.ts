import {publicProcedure, router} from "@/src/backend/routers/trpc";

export const itemTypesRouter = router({
  
  getTodos: publicProcedure.query(async () => { return getItemTypes() }),
  
})


export type ItemTypesRouter = typeof itemTypesRouter