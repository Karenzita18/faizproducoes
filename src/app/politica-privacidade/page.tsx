import FeedQuadrado from "@/components/common/FeedFaiz/FeedQuadrado";
import HeroCommon from "@/components/common/politica-privacidade/HeroCommon";
import PoliticaPrivacidade from "@/components/common/politica-privacidade/politica-privacidade"

export default function Page() {
  return (
    <main className="mt-20">
        <HeroCommon/>
        <FeedQuadrado/>
        <PoliticaPrivacidade/>
        <FeedQuadrado/>
    </main>
  );
}

export const metadata = {
  title:
    "Política Privacidade | Faiz Produções",
  description: "",
  keywords: [
    "Faiz produções",
    "tecnologia",
    "Publicidade",
    "Produção",
    "Assessoria",
    "Projetos",
    "AudioVisual",
    "Serviços",
  ],
  alternates: {
    canonical: "faizproducoes.com",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  // openGraph: {
  // 	images: [
  // 		{
  // 			url: "",
  // 			width: 2048,
  // 			height: 449,
  // 		},
  // 	],
  // },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/icone.webp",
    shortcut: "/img/icone.webp",
    apple: "/img/icone.webp",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/img/icone.webp",
    },
  },
};
