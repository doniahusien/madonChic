import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Nav() {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/mens", label: "Mens" },
        { href: "/womens", label: "Womens" },
        { href: "/top-selling", label: "Top Selling" },
        { href: "/newest", label: "Newest" }
    ];
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const suggestions = [
        "Men Top Wear",
        "Men Hoodie",
        "Men Bottom Wear",
        "Women Dresses",
        "Women Suit",
        "Men Jackets",
        "Women Jacket",
    ];
    const [query, setQuery] = useState("");
    const [filteredSuggestions, setFiltered] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 0) {
            const filtered = suggestions.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            )
            setFiltered(filtered);
        }
        else {
            setFiltered([]);
        }
    }
    return (
        <nav className="bg-white shadow-md fixed w-full p-2 z-50 ">
            <div className="flex gap-10 sm:gap-10 justify-between md:justify-around items-center p-4 " >
                <h1 className="text-3xl text-red-500">Medon</h1>

                <div className=" flex flex-row gap-5 sm:gap-5 md:gap-10">
                    <ul className={`lg:flex lg:static w-full lg:w-auto gap-5 absolute top-16 left-0 p-2 ${isOpen ? "block" : "hidden"} lg:flex-row lg:items-center`}>
                        {navLinks.map((link, index) => (
                            <li key={index} className="hover:text-red-400">
                                <Link href={link.href} className={`${pathname === link.href ? "border-b-2 border-red-400 " : ""}`}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-row md:border md:border-gray-400 md:rounded-full opacity-2 px-0 md:px-10 ">
                        <input
                            type="text"
                            value={query}
                            onChange={handleChange}
                            name="srch"
                            placeholder="serach"
                            className="bg-transparent hidden sm:hidden md:block outline-none w-full p-2" />
                        <button>
                            <Search className="text-gray-700" />
                        </button>
                        {filteredSuggestions.length > 0 &&
                            <ul className="absolute z-10 top-16 mt-1 rounded-md bg-slate-100 ">
                                {filteredSuggestions.map((item, index) => (
                                    <li key={index} className=" px-5 py-2 cursor-pointer hover:bg-slate-200" onClick={() => {
                                        setQuery(item);
                                        setFiltered([]);
                                    }} >
                                        {item}
                                    </li>
                                ))}
                            </ul>}
                    </div>
                    <div className="flex flex-row sm:gap-2 md:gap-5">
                        <Link href="/cart">
                            <div className=" relative flex justify-center items-center text-center bg-gray-200 p-2 rounded-full">
                                <ShoppingBag />

                                <span className="absolute bottom-7 left-6 text-sm bg-red-300 w-5 h-5 flex items-center justify-center rounded-full">
                                    2
                                </span>
                            </div>
                        </Link>


                        <div className=" flex justify-center items-center">
                            <Link href="/profile">
                                <User />
                            </Link>
                        </div>
                        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
                    </div>

                </div>


            
            </div>
        </nav>
    );
}
