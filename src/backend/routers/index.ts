import {router} from "@/backend/routers/trpc";
import {itemMagazineRouter} from "@/backend/controller/itemMagazine/itemMagazine";

export const appRouter = router({

  itemMagazine: itemMagazineRouter,
  // fileOpener: fileOpenerRouter,
  
})


export type AppRouter = typeof appRouter