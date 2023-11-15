import {router} from "@/src/backend/routers/trpc";
import {todosRouter} from "@/src/backend/controller/itemMagazine/todos";

export const itemMagazineRouter = router({
  
  todo: todosRouter,
  
})


export type ItemMagazineRouter = typeof itemMagazineRouter