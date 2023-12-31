"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaAngleDoubleRight,
  FaMapPin,
  FaClock,
  FaLinkedinIn,
  FaEnvelope,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  const data = new Date(Date.now());
  return (
    <footer className={`bg-faiz-100`}>
      <div className="row py-8 px-5">
        <div className="container">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4 md:col-span-1">
              <div className="max-w-[15rem] ">
                <Link
                  href="/"
                >
                  <Image
                    src="/img/LOGO_Faiz_branco.webp"
                    width={150}
                    height={150}
                    alt="Logo Footer" 
                    
                  />
                </Link>
                <p className="text-white leading-5 mt-3 text-justify">
                “Faça o teu melhor, na condição que você tem, enquanto você não tem condições melhores para fazer melhor ainda” <b>Mário Sergio Cortella</b>
                </p>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 grid md:grid-cols-3 gap-5">
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Links Importantes</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/quem-somos">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Quem Somos
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/servicos">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Serviços
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/portfolio">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Portfólio
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/contato">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Contato</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="mailto:contato@faizproducoes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaRegEnvelope/>
                      </span>
                      E-mail
                    </a>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="https://api.whatsapp.com/send/?phone=5519997844793&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaWhatsapp/>
                      </span>
                      Whatsapp
                    </a>
                  </li>
                </ul>
                <h2 className="font-bold mb-3 mt-4 text-xl">
                  Redes Sociais
                </h2>
                <div className="flex gap-x-3 mt-5 ">
                  <a
                    href="https://www.facebook.com/faizproducoes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-faiz-200 rounded-full text-black hover:-translate-y-1 transition duration-500"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/faizproducoes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-faiz-200 rounded-full text-black hover:-translate-y-1 transition duration-500"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/faizproducoes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-faiz-200 rounded-full text-black hover:-translate-y-1 transition duration-500"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/@faizproducoes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-faiz-200 rounded-full text-black hover:-translate-y-1 transition duration-500"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Endereço</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <p className="text-white">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaMapPin />
                      </span>
                      R. Prof. Carlos Liepin, 561 - Bela Vista, Nova Odessa - SP
                    </p>
                  </li>
                </ul>
                <h2 className="font-bold mb-3 mt-4 text-xl">
                  Horário de Funcionamento
                </h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <p className="text-white">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaClock />
                      </span>
                      Online | 24 horas
                    </p>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <p className="text-white">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaClock />
                      </span>
                      Presencial | Faça seu Agendamento
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-faiz-200">
        <div className="container flex flex-wrap place-content-center gap-1 py-3">
          <div>
            <p className="text-black text-sm">
              © {data.getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          <div className="text-black flex gap-1 text-sm">
            Desenvolvido por 
            <a
              href="https://www.instagram.com/la_karenzinha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-50 underline hover:text-faiz-300 transition duration-500"
            >
             Karen Souza
            </a>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
