const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-white shadow-sm flex items-center justify-between px-10">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-indigo-600">
        eLMS
      </h1>

      {/* Links */}
      <div className="flex items-center gap-8 text-gray-700 font-medium">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-5 py-2 rounded-lg border border-indigo-600 text-indigo-600">
          Login
        </button>

        <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white">
          Sign Up
        </button>
      </div>

    </nav>
  )
}

export default Navbar