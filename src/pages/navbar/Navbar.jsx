import React from 'react'; const Navbar = ({links}) => {

    
    

    return (
        <nav className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="bg-yellow-500 text-black font-bold px-2 py-1 mr-2">DKTE</div>
                <span className="text-white">Ambar</span>
            </div>
            <div className="flex space-x-4">
                {links&&links.map((link, index) => (
                    <a key={index} href={link.url} className="hover:text-zinc-400">
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}; export default Navbar;