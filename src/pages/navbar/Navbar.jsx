import React from 'react'; const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="bg-yellow-500 text-black font-bold px-2 py-1 mr-2">DKTE</div>
                <span className="text-white">Ascendere</span>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-zinc-400">Home</a>
                <a href="#" className="hover:text-zinc-400">Login</a>
                <a href="#" className="hover:text-zinc-400">Register</a>
                <a href="#" className="hover:text-zinc-400">Contact</a>
            </div>
        </nav>
    );
}; export default Navbar;
