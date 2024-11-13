import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

const NotFound = () => {
  return (
    <div className="px-2 w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4 bg-white p-6 rounded shadow-md">
        <h2 className="text-4xl font-bold text-red-600">404</h2>
        <h3 className="text-2xl">Page Not Found</h3>
        <p className="text-center text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
