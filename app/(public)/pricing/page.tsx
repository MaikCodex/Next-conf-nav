import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la pagina de precios',
    keywords: ['SEO Keyword', 'SEO Keyword2', 'SEO Keyword3'],
};

export default function Pricing() {
    return (
        <>
            <span className="text-5xl">Pricing Page</span>
        </>
    )
}