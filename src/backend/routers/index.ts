import {router} from "@/src/backend/routers/trpc";
import {itemMagazineRouter} from "@/src/backend/controller/itemMagazine/itemMagazine";

export const appRouter = router({

  itemMagazine: itemMagazineRouter,
  // fileOpener: fileOpenerRouter,
  
})


export type AppRouter = typeof appRouter