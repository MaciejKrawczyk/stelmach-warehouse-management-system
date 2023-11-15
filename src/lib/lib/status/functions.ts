import {db} from "@/src/backend/model/db";
import {IStatus} from "@/src/lib/types/zod/Status";


export async function createStatus(status: IStatus) {
  const object = await db.status.create({
    data: status
  })
  return object
}

