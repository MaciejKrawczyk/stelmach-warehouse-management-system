import {publicProcedure, router} from "@/src/backend/routers/trpc";

export const parcelsRouter = router({
  
  getTodos: publicProcedure.query(async () => { return getParcels() }),
  
})


export type ParcelsRouter = typeof parcelsRouter