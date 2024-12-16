import { getTicketSearchResults } from "@/lib/queries/getTicketSearchResults";
import TicketSearch from "./TicketSearch";
import getOpenTickets from "@/lib/queries/getOpenTickets";
import TicketTable from "./TicketsTable";

export const metadata = {
  title: "Ticket Search",
};

const Tickets = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { searchText } = await searchParams;

  if (!searchText) {
    const results = await getOpenTickets();
    return (
      <>
        <TicketSearch />
        {results.length ? (
          <TicketTable data={results} />
        ) : (
          <p className="mt-4">No open tickets found</p>
        )}{" "}
      </>
    );
  }

  const results = await getTicketSearchResults(searchText);

  return (
    <>
      <TicketSearch />
      {results.length ? (
        <TicketTable data={results} />
      ) : (
        <p className="mt-4">No results found</p>
      )}{" "}
    </>
  );
};

export default Tickets;
