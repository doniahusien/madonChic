"use client"
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CartSidebar from "../cart/CartSidebar";
import { useSelector } from "react-redux";
export default function Nav() {
    const { token } = useSelector(state => state.auth);
    const {total_items} = useSelector(state => state.cart);
    const [cartOpen, setCart] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
    }, []);

    const router = useRouter();
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/mens", label: "Men's" },
        { href: "/womens", label: "Women's" },
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
                <h1 className="text-3xl text-red-500 cursor-pointer" onClick={() => router.push("/")} >Medon</h1>

                <div className=" flex flex-row gap-5 sm:gap-5 md:gap-10">
                    <ul
                        className={`lg:flex bg-white transition-transform duration-700 ease-in-out 
                                ${isOpen ? "translate-x-0" : "translate-x-full"} 
                                lg:static w-full lg:w-auto gap-5 absolute top-16 left-0 p-2 
                                lg:translate-x-0 lg:flex-row lg:items-center`}
                    >
                        {navLinks.map((link, index) => (
                            <li key={index} className="py-3 md:py-0 hover:text-red-400">
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
                    <div className="flex flex-row gap-2 md:gap-5">

                        <div
                            onClick={() => setCart(true)}
                            className="cursor-pointer relative flex justify-center items-center text-center bg-gray-200 p-2 rounded-full">
                            <ShoppingBag />

                            <span className="absolute bottom-7 left-6 text-sm bg-red-300 w-5 h-5 flex items-center justify-center rounded-full">
                                {total_items}
                            </span>
                        </div>
                        <div className=" flex justify-center items-center">
                            {isMounted && (
                                <Link href={token ? "/profile" : "/login"}>
                                    <User />
                                </Link>
                            )}
                        </div>

                        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                </div>
                {cartOpen && (
                    <>
                        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setCart(false)}></div>
                        <CartSidebar cartOpen={cartOpen} setCart={setCart} />
                    </>
                )}
            </div>
        </nav>
    );
}
