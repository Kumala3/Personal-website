import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "../globals.css";

export default function MainLayout ({
    children,
}: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <NavBar/>
            <div className="mainContent">{children}</div>
            <Footer/>
        </div>
    )
}
