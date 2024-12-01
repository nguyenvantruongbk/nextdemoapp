import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <nav className="mt-4">
          <ul>
            <li className="my-2">
              <Link href="/">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li className="my-2">
              <Link href="/add">
                <a className="hover:underline">Add Product</a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 shadow-md">
          <h1 className="text-xl font-bold">Product Management</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <a className="text-blue-500 hover:underline">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/add">
                  <a className="text-blue-500 hover:underline">Add Product</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
}
