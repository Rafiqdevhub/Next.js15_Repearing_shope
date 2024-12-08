import getCustomerSearchResults from "@/lib/queries/getCustomerSearchResults";
import CustomerSearch from "./CustomerSearch";

export const metadata = {
  title: "Customers",
};

const Customers = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { searchText } = await searchParams;

  if (!searchText) return <CustomerSearch />;

  const results = await getCustomerSearchResults(searchText);
  return (
    <>
      <CustomerSearch />
      <p>{JSON.stringify(results)}</p>
    </>
  );
};

export default Customers;
