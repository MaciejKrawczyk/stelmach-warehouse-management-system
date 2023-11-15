import {IItem} from "@/src/lib/types/zod/Item";
import {db} from "@/src/backend/db/db";


export async function createItem(item: IItem) {
  
  const object = db.item.create({
    data: item
  })
  return object
  
}

export async function updateItem(item: IItem) {
  const object = db.item.update({
    where: {
      id: item.id
    },
    data: item
  })
}