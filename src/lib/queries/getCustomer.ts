import { database } from "@/database";
import { customers } from "@/database/schema";
import { eq } from "drizzle-orm";

const getCustomer = async (id: number) => {
  const customer = await database
    .select()
    .from(customers)
    .where(eq(customers.id, id));

  return customer[0];
};

export default getCustomer;
