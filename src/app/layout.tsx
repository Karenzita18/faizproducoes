import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Exo } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/layout/Footer";

const exo = Exo({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Faiz Produções",
  description: "Somos uma agência dedicada a conceber e executar projetos criativos, desde vídeos envolventes até eventos memoráveis. Com uma equipe apaixonada e experiente, combinamos inovação, tecnologia e expertise para oferecer soluções de produção de alta qualidade. Seja para publicidade, entretenimento ou eventos corporativos",
  keywords: [
    "Faiz produções",
    "tecnologia",
    "Publicidade",
    "Produção",
    "Assessoria",
    "Projetos",
    "AudioVisual",
    "Serviços",
    "Inovação",
    "Experiência",
    "Criatividade",
    "Eventos",
    "Marketing",
    "Vídeos",
    "Entretenimento",
    "Qualidade",
    "Estratégia",
    "Comunicação",
    "Digital",
    "Arte",
    "Design",
    "Produção Audiovisual",
    "Criação",
  ],
  alternates: {
    canonical: "faizproducoes.vercel.app",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=PHCDW6S3" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'PHCDW6S3');
        `}
        </Script>
      </head>
      <body className={exo.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHCDW6S3"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
