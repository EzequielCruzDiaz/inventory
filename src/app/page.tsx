import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <header className="bg-gradient-to-r from-gray-500 to-indigo-100 text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Eshop</h1>
          <p className="text-xl mb-8">
            The best platform to manage your online business
          </p>
          <Link href="/products">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
              Go to Product Manager
            </button>
          </Link>
        </div>
      </header>

      <main className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14 ">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Product Management</h3>
              <p className="text-gray-600">
                Easily manage your inventory and product catalog.
              </p>
            </div>
            <div className="card p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Online Sales</h3>
              <p className="text-gray-600">
                Process orders and manage your sales efficiently.
              </p>
            </div>
            <div className="card p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Customer Management
              </h3>
              <p className="text-gray-600">
                Keep a detailed record of your customers and their preferences.
              </p>
            </div>
            <div className="card p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Analytics and Reports
              </h3>
              <p className="text-gray-600">
                Gain valuable insights with our analytics tools.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
