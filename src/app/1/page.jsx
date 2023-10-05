import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Subnavbar } from "@/components/Subnavbar";
import { Carouseldos } from "@/components/Carouseldos";
import { Ciudad } from "@/components/Ciudad";
import { Productos } from "@/components/Productos";
const page = () => {

    return (
        <div>
        <Header />
        <Subnavbar />
        <Carouseldos></Carouseldos>
        <Ciudad></Ciudad>
        <Productos></Productos>
        <Footer />
        </div>
    );
    }

export default page;