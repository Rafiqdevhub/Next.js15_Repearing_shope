import { database } from "@/database";
import { tickets } from "@/database/schema";
import { eq } from "drizzle-orm";

const getTicket = async (id: number) => {
  const ticket = await database
    .select()
    .from(tickets)
    .where(eq(tickets.id, id));

  return ticket[0];
};

export default getTicket;
