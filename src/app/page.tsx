import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Repairify&apos;s
            <br />
            Repair Shop
          </h1>
          <address>
            Repairify shope
            <br />
            Peshawer City
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href="tel:92333333" className="hover:underline">
            92-333-333-3333
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
