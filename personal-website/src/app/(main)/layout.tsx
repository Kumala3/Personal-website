import NavBar from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

export default function MainLayout ({
    children,
}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <NavBar/>
            <div className="mainContent">{children}</div>
            <Footer/>
        </>
    )
}
