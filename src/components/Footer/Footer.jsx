import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
    const footerLinks = [
        {
            title: "Quick Links",
            links: [
                { name: "Home", path: "/" },
                { name: "Men", path: "/men" },
                { name: "Women", path: "/women" },
                { name: "Top Selling", path: "/top-selling" },
                { name: "Newest", path: "/newest" },
                { name: "About us", path: "/about" },
                { name: "Help", path: "/help" },
            ],
        },
        {
            title: "Contact us",
            contacts: [
                { icon: "🏢", text: "New Delhi 91" },
                { icon: "📞", text: "+82288025" },
                { icon: "✉️", text: "doniahusien@gmail.com" },
            ],
        },
        {
            title: "ShopNow Policy",
            links: [
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Return Policy", path: "/return-policy" },
                { name: "Shipping Policy", path: "/shipping-policy" },
                { name: "Terms of Services", path: "/terms" },
            ],
        },
    ];

    const socialLinks = [
        { icon: <Facebook size={20} />, link: "/" },
        { icon: <Twitter size={20} />, link: "/" },
        { icon: <Instagram size={20} />, link: "/" },
    ];

    return (
        <footer className="bg-gray-300 mt-5 p-6 text-black flex flex-col">
            <div className="container mx-auto flex flex-wrap justify-between items-start gap-6">
                {footerLinks.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-xl mb-2">{section.title}</h3>
                        <ul className="space-y-1">
                            {section.links?.map((link, idx) => (
                                <li key={idx} className='text-sm font-normal'>
                                    <Link href={link.path} className="hover:text-red-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            {section.contacts?.map((contact, idx) => (
                                <li key={idx} className="text-sm font-normal flex items-center gap-2">
                                    <span>{contact.icon}</span>
                                    {contact.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Compact Sign-up Section */}
                <div className="w-[250px] rounded-lg">
                    <h3 className="font-semibold text-xl mb-2">Hey, Sign Up!</h3>
                    <p className="text-sm mb-2">
                        Sign up now and be the first to know about exclusive offers, fashion news & style tips!
                    </p>
                    <Link href="/" className="text-red-400 font-semibold hover:underline">
                        Let's Shop
                    </Link>
                </div>
            </div>
            
            <div className="flex flex-col items-center py-4">
                <div className='flex justify-center gap-4 mt-2'>
                    {socialLinks.map((item, index) => (
                        <Link key={index} href={item.link} className="text-gray-600 hover:text-red-400">
                            {item.icon}
                        </Link>
                    ))}
                </div>
                <h3 className="text-sm text-gray-700 mt-4">© 2025 ShopNow. All rights reserved.</h3>
            </div>
        </footer>
    );
}

export default Footer;
