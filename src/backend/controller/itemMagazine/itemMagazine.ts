import {router} from "@/backend/routers/trpc";
import {todosRouter} from "@/backend/controller/itemMagazine/todos";

export const itemMagazineRouter = router({
  
  todo: todosRouter,
  
})


export type ItemMagazineRouter = typeof itemMagazineRouter