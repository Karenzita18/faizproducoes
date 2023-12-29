
import HeroCommon from "@/components/common/contato/HeroCommon";
import { BsSend } from "react-icons/bs";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp,} from "react-icons/fa";
import FormContato from "../../components/common/contato/FeedForm";
import FeedQuadrado from "@/components/common/FeedFaiz/FeedQuadrado";
const Page = () => {
  return (
    <main>
      <HeroCommon/>
      <FeedQuadrado/>
      <section className="bg-zinc-100">
        <div className="row">
          <div className="container">
            <div className="grid sm:grid-cols-8 bg-white rounded-md shadow-lg max-w-4xl mx-auto overflow-hidden relative gap-y-5">
              <div className="sm:col-span-3 flex flex-col justify-start bg-faiz-100 p-5 md:p-8">
                <h1 className="text-2xl text-white font-black">Contato</h1>
                <p className="text-white ">Fale conosco</p>
                <div className="flex flex-col justify-center gap-y-4 mt-5">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=5519997844793&text&type=phone_number&app_absent=0"
                    rel="noopener noreferrer"
                    className="flex flex-nowrap"
                  >
                    <div className="text-white text-[1.45rem]">
                      <FaWhatsapp />
                    </div>
                    <div className="flex items-center ml-2">
                      <p className="font-semibold tracking-tight h-fit text-white">
                        (19) 99784-4793
                      </p>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="mailto:contato@faizproducoes.com"
                    rel="noopener noreferrer"
                    className="flex flex-nowrap"
                  >
                    <div className="text-white text-xl">
                      <FaEnvelope />
                    </div>
                    <div className="flex items-center ml-2">
                      <p className="font-semibold tracking-tight h-fit text-white">
                        contato@faizproducoes.com
                      </p>
                    </div>
                  </a>
                  <p className="flex flex-nowrap">
                    <div className="text-white text-xl">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="flex items-center ml-2">
                      <p className="font-semibold tracking-tight h-fit text-white">
                      R. Prof. Carlos Liepin, 561 - Bela Vista, Nova Odessa - SP
                      </p>
                    </div>
                  </p>
                  <p className="flex flex-nowrap">
                    <div className="text-white text-xl">
                      <FaClock />
                    </div>
                    <div className="flex items-center ml-2">
                      <p className="font-semibold tracking-tight h-fit text-white">
                        | Atendimento Online: 24 horas
                      </p>
                    </div>
                  </p>
                  <p className="flex flex-nowrap">
                    <div className="text-white text-xl">
                      <FaClock />
                    </div>
                    <div className="flex items-center ml-2">
                      <p className="font-semibold tracking-tight h-fit text-white">
                        | Atendimento Presencial: Segunda à Sexta das 9h às 17h (faça seu agendamento).
                      </p>
                    </div>
                  </p>
                  <p className="flex flex-nowrap">
                    <div className="flex items-center ml-2">
                      <p className="font-semibold tracking-tight h-fit text-white">
                        | Eventos e outros serviços podem ser atendidos fora do horário comercial, desde que seja pré-agendado. Consulte disponibilidade.
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <div className="sm:col-span-5 flex flex-col justify-start p-5 md:p-8">
                <h1 className="text-xl sm:text-2xl text-faiz-100 font-black">
                  Tem alguma dúvida?
                </h1>
                <p className="text-faiz-100 mb-5">Preencha o formulário</p>
                <FormContato />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.4719335484833!2d-47.300942124915615!3d-22.784970479341006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876264913ee307df%3A0xac27a85ef0df903!2zRmFpeiBQcm9kdcOnw7Vlcw!5e0!3m2!1spt-BR!2sbr!4v1703589473302!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <FeedQuadrado/>
    </main>
  );
};

export default Page;


export const metadata = {
  title:
    "Contato | Faiz Produções",
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
