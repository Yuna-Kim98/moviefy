import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>
                <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6 lg:px-8">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}
