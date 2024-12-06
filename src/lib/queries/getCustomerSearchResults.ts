import { database } from "@/database";
import { customers } from "@/database/schema";
import { ilike, or } from "drizzle-orm";

const getCustomerSearchResults = async (searchText: string) => {
  const results = await database
    .select()
    .from(customers)
    .where(
      or(
        ilike(customers.firstName, `%${searchText}%`),
        ilike(customers.lastName, `%${searchText}%`),
        ilike(customers.email, `%${searchText}%`),
        ilike(customers.phone, `%${searchText}%`),
        ilike(customers.address1, `%${searchText}%`),
        ilike(customers.address2, `%${searchText}%`),
        ilike(customers.city, `%${searchText}%`),
        ilike(customers.state, `%${searchText}%`),
        ilike(customers.zip, `%${searchText}%`),
        ilike(customers.notes, `%${searchText}%`)
      )
    );
  return results;
};

export default getCustomerSearchResults;
