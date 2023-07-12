import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Esta es la pagina de contacto',
    keywords: ['SEO Keyword', 'SEO Keyword2', 'SEO Keyword3']
};

export default function About() {
    return (
        <>
            <span className="text-5xl">About Page</span>
        </>
    )
}