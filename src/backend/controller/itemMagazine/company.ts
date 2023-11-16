import {publicProcedure, router} from "@/src/backend/routers/trpc";

export const companiesRouter = router({
  
  getCompanies: publicProcedure.query(async () => { return getCompanies() }),
  
  addCompany: publicProcedure.mutation(async (company: Company) => { return addCompany(company) }),
  
})


export type CompaniesRouter = typeof companiesRouter