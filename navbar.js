const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="text-2xl font-bold text-blue-600">NewsSite</a>
            <div className="hidden sm:ml-6 sm:flex">
              <a href="/world" className="ml-4 text-gray-800 dark:text-gray-100">World</a>
              <a href="/tech" className="ml-4 text-gray-800 dark:text-gray-100">Tech</a>
              <a href="/sports" className="ml-4 text-gray-800 dark:text-gray-100">Sports</a>
              <a href="/entertainment" className="ml-4 text-gray-800 dark:text-gray-100">Entertainment</a>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-gray-800 dark:text-gray-100">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
