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
} from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  const data = new Date(Date.now());
  return (
    <footer className={`bg-faiz-100`}>
      <div className="-translate-y-1/2 flex place-content-end overflow-x-hidden relative z-10">
        <div className=""></div>
      </div>
      <div className="row py-20 px-5">
        <div className="container">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4 md:col-span-1">
              <div className="max-w-[15rem] ">
                <Image
                  src="/img/logo-header.png"
                  width={600}
                  height={204}
                  alt="Logo Footer"
                />
                <p className="text-white leading-5 mt-3 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <div className="flex gap-x-3 mt-5 md:place-content-center">
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
                </div>
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
                      Atendimento via email
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
                      Atendimento via Whatsapp
                    </a>
                  </li>
                </ul>
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
                      Segunda à Sexta das 8h às 16h
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
          <div className="text-black flex gap-2 text-sm">
            Desenvolvido por
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-50 underline hover:text-brand-100 transition duration-500"
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
