import { database } from "@/database";
import { customers, tickets } from "@/database/schema";
import { asc, eq } from "drizzle-orm";

const getOpenTickets = async () => {
  const results = await database
    .select({
      id: tickets.id,
      ticketDate: tickets.createdAt,
      title: tickets.title,
      firstName: customers.firstName,
      lastName: customers.lastName,
      email: customers.email,
      tech: tickets.tech,
      completed: tickets.completed,
    })
    .from(tickets)
    .leftJoin(customers, eq(tickets.customerId, customers.id))
    .where(eq(tickets.completed, false))
    .orderBy(asc(tickets.createdAt));

  return results;
};

export default getOpenTickets;
