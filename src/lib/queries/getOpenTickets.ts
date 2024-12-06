import { database } from "@/database";
import { customers, tickets } from "@/database/schema";
import { eq } from "drizzle-orm";

const getOpenTickets = async () => {
  const results = await database
    .select({
      ticketDate: tickets.createdAt,
      title: tickets.title,
      firstName: customers.firstName,
      lastName: customers.lastName,
      email: customers.email,
      tech: tickets.tech,
    })
    .from(tickets)
    .leftJoin(customers, eq(tickets.customerId, customers.id))
    .where(eq(tickets.completed, false));

  return results;
};

export default getOpenTickets;
