import {db} from "@/src/backend/model/db";
import {ICompany} from "@/src/lib/types/zod/Company";

export async function createCompany(company: ICompany) {
  const object = await db.company.create({
    data: company
  })
  return object
}

export async function updateCompany(company: ICompany) {
  const object = await db.company.update({
    where: {id: company.id},
    data: company
  })
  return object
}