import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


  export default function ServicesLayout({ children }) {
    return <>
    <Navbar />
    {children}
    <Footer />
    </>;
  }