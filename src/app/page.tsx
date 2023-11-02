import FeedServices from "@/components/common/FeedFaiz/FeedServices";
import FeedAbout from "@/components/common/FeedFaiz/FeedAbout";
//import FeedClientes from "@/components/common/FeedFaiz/FeedClientes";
//import FeedPortifolio from "@/components/common/FeedFaiz/FeedPortifolio";

export default function Home() {
  return (
    <main>
      <FeedAbout/>
      
      <FeedServices/>
    </main>
  );
}
