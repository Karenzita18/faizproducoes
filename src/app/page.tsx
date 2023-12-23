import FeedServices from "@/components/common/FeedFaiz/FeedServices"
import FeedAbout from "@/components/common/FeedFaiz/FeedAbout";
import FeedClientes from "@/components/common/FeedFaiz/FeedClientes";
//import FeedPortifolio from "@/components/common/FeedFaiz/FeedPortifolio";
import { Exo } from "next/font/google";
import FeedQuadrado from "@/components/common/FeedFaiz/FeedQuadrado";
import FeedClienteTeste from "@/components/common/FeedFaiz/FeedClienteTeste";

const exo = Exo({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});


export default function Home() {
  return (
    <main className={exo.className}>
      <FeedAbout/>
      <FeedQuadrado/>
      <FeedClientes/>
      <FeedQuadrado/>
      <FeedServices/>
      <FeedQuadrado/>
    </main>
  );
}
