import {publicProcedure, router} from "@/src/backend/routers/trpc";


export const itemsRouter = router({
  
  getItems: publicProcedure.query(async () => { return getItems() }),
  
})


export type ItemsRouter = typeof itemsRouter