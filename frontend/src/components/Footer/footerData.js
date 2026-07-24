import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa6";

export const footerData = {
    brand: {
        name: "BLACK OAK SOCIETY",
        tagline: "Crafted for the Extraordinary",
        description:
            "A destination for rare spirits, timeless craftsmanship, and an elevated whisky experience designed for modern collectors.",
    },

    navigation: {
        title: "Navigation",
        links: [
            { label: "Home", href: "#" },
            { label: "Brands", href: "#" },
            { label: "Collections", href: "#" },
            { label: "Journal", href: "#" },
        ],
    },

    collections: {
        title: "Collections",
        links: [
            { label: "Single Malt", href: "#" },
            { label: "Blended Whisky", href: "#" },
            { label: "Limited Editions", href: "#" },
            { label: "Rare Collection", href: "#" },
        ],
    },

    support: {
        title: "Support",
        links: [
            { label: "Contact", href: "#" },
            { label: "FAQs", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Conditions", href: "#" },
        ],
    },

    socials: [
        {
            name: "Instagram",
            href: "#",
            icon: FaInstagram,
        },
        {
            name: "Facebook",
            href: "#",
            icon: FaFacebookF,
        },
        {
            name: "YouTube",
            href: "#",
            icon: FaYoutube,
        },
    ],

    copyright:
        "© 2026 Black Oak Society. All rights reserved.",

    disclaimer:
        "Enjoy Responsibly • For Legal Drinking Age Only",
};