import {publicProcedure, router} from "@/src/backend/routers/trpc";

export const shelfCategoriesRouter = router({
  
  getTodos: publicProcedure.query(async () => { return getShelfCategories() }),
  
})


export type ShelfCategoriesRouter = typeof shelfCategoriesRouter