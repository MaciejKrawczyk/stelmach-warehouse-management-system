import {db} from "@/prisma/db";

export function getCompanies() {
  return db.company.findMany();
}


export function addCompany(company: { name: string; notes: string; }) {
  return db.company.create({
    data: {
      name: company.name,
      notes: company.notes,
    }
  });
}