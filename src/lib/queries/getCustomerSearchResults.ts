import { database } from "@/database";
import { customers } from "@/database/schema";
import { ilike, or, sql } from "drizzle-orm";

const getCustomerSearchResults = async (searchText: string) => {
  const results = await database
    .select()
    .from(customers)
    .where(
      or(
        ilike(customers.email, `%${searchText}%`),
        ilike(customers.phone, `%${searchText}%`),
        ilike(customers.city, `%${searchText}%`),
        ilike(customers.zip, `%${searchText}%`),
        sql`lower(concat(${customers.firstName}, ' ', ${
          customers.lastName
        })) LIKE ${`%${searchText.toLowerCase().replace(" ", "%")}%`}`
      )
    );
  return results;
};

export default getCustomerSearchResults;
