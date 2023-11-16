import {publicProcedure, router} from "@/src/backend/routers/trpc";

export const orderCategoriesRouter = router({
  
  getTodos: publicProcedure.query(async () => { return getOrderCategories() }),
  
})


export type OrderCategoriesRouter = typeof orderCategoriesRouter