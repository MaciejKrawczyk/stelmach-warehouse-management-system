import {router} from "@/src/backend/routers/trpc";
import {companiesRouter} from "@/src/backend/controller/itemMagazine/company";
import {itemsRouter} from "@/src/backend/controller/itemMagazine/item";
import {itemTypesRouter} from "@/src/backend/controller/itemMagazine/itemType";
import {orderCategoriesRouter} from "@/src/backend/controller/itemMagazine/orderCategory";
import {parcelsRouter} from "@/src/backend/controller/itemMagazine/parcel";
import {shelvesRouter} from "@/src/backend/controller/itemMagazine/shelf";
import {shelfCategoriesRouter} from "@/src/backend/controller/itemMagazine/shelfCategory";

export const itemMagazineRouter = router({
  
  company: companiesRouter,
  item: itemsRouter,
  itemType: itemTypesRouter,
  orderCategory: orderCategoriesRouter,
  parcel: parcelsRouter,
  shelf: shelvesRouter,
  shelfCategory: shelfCategoriesRouter,
  
})


export type ItemMagazineRouter = typeof itemMagazineRouter