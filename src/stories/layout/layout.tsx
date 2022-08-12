import Header from "./header";
import Footer from "./footer";
import { FCC } from "src/types/react";

const Layout: FCC = ({ children }) => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <Header></Header>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
