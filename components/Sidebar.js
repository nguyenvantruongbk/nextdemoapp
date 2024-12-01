
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-1/5 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold">Navigation</h2>
      <nav className="mt-4">
        <ul>
          <li className="my-2">
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li className="my-2">
            <Link href="/add" className="hover:underline">Add Product</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
