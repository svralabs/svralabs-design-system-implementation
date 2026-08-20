import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">SVRALABS</Link>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Products', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-gray-900">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link to="/account" className="text-gray-600 hover:text-gray-900">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
