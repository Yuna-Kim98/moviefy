export default function Footer() {
    return (
        <footer className="border-t border-t-[#DDDDDD] py-3">
            <div className="mx-auto w-full max-w-screen-xl px-2 md:px-6 lg:px-8">
                <p className="text-center text-xs font-bold">© {new Date().getFullYear()} YUNA & 2EO All rights reserved.</p>
            </div>
        </footer>
    );
};
