import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

import Link from "next/link";
export default function Nav() {
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
        <nav className="bg-white shadow-md fixed w-full p-5 ">
            <div className="flex gap-5 justify-around items-center p-4 " >
                <h1 className="text-3xl text-red-500">Medon</h1>

                <div className=" flex flex-row justify-between gap-14">
                    <ul className={`lg:flex lg:static w-full lg:w-auto gap-5  absolute top-16 left-0 p-2 ${isOpen ? "block" : "hidden"} lg:flex-row lg:items-center`}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/mens">Mens</Link></li>
                        <li><Link href="/womens">Womens</Link></li>
                        <li><Link href="/top-selling">Top sellling</Link></li>
                        <li><Link href="/newest">Newest</Link></li>
                    </ul>
                    <div className="flex flex-row border border-gray-400 rounded-full opacity-2 px-2 ">
                        <input type="text" value={query} onChange={handleChange} name="srch" id="" placeholder="serach" className="bg-transparent outline-none w-full p-2" />
                        <button>
                            <Search className="text-gray-700" />
                        </button>
                        {filteredSuggestions.length > 0 &&
                            <ul className="absolute z-10 top-16 p-5 rounded-md bg-slate-400 ">
                                {filteredSuggestions.map((item, index) => (
                                    <li key={index} onClick={() => {
                                        setQuery(item);
                                        setFiltered([]);
                                    }} >
                                        {item}
                                    </li>
                                ))}
                            </ul>}
                    </div>

                </div>
                <div className="flex flex-row gap-5">
                    <div className=" relative flex justify-center items-center bg-gray-200 p-2 rounded-full">
                        <ShoppingBag />
                        <span className="absolute bottom-8 text-sm bg-red-400 w-5 h-5 flex justify-center rounded-full left-8">2</span>
                    </div>
                    <div className=" flex justify-center items-center">
                        <User />
                    </div>
                </div>
                <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
}
