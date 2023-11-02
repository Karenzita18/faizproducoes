import {
    FaClock,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaWhatsapp,
  } from "react-icons/fa";
import FormContato from "../contato/FeedForm";
  
    const FeedContato = () => {
    return (
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
                        Segunda à Sexta das 8h às 18h
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
    );
  };
  
export default FeedContato;
  