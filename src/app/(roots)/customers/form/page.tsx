import BackButton from "@/components/BackButton";
import getCustomer from "@/lib/queries/getCustomer";
import * as Sentry from "@sentry/nextjs";

const CustomerFormPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  try {
    const { customerId } = await searchParams;

    // Edit customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} not found
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      console.log(customer);
    } else {
    }
  } catch (e) {
    if (e instanceof Error) {
      Sentry.captureException(e);
      throw e;
    }
  }
};

export default CustomerFormPage;