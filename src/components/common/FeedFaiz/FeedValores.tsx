
import Image from "next/image";
import Link from "next/link";
import { HandShake, MissionIcon, QualityIcon } from "@/components/common/icon";

const FeedValores = () => {

  return (
    <section className="pt-5 pb-10 relative overflow-hidden bg-faiz-300/10 ">
        <div className="absolute h-full -skew-x-[25deg] top-0 -right-10 w-1/2 aspect-square bg-brand-100/10"></div>
        <div className="row relative">
          <div className="container relative">
            <div className="grid md:grid-cols-3 gap-8 md:max-w-7xl max-w-xs ">
              <div className="bg-gradient-to-br from-zinc-50/40 to-zinc-200/40 backdrop-blur-md p-8 border-x group border-brand-100/10 relative shadow-lg">
                <div className="absolute top-1 right-3 opacity-5 group-hover:opacity-10 transition duration-500">
                  <div className="text-brand-100 w-[4rem] mt-2">
                    <MissionIcon/>
                  </div>
                </div>
                <div className="flex flex-col justify-between relative h-full">
                  <div>
                    <h2 className="font-bold text-brand-100 text-2xl">
                      Missão
                    </h2>
                    <p className="font-medium text-zinc-600">
                      Transmitir com segurança e eficiência a marca, a imagem e a mensagem de nossos clientes, parceiros e beneficiados voluntariamente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-50/40 to-zinc-200/40 backdrop-blur-md p-8 border-x group border-brand-100/10 relative shadow-lg">
                <div className="absolute top-1 right-3 opacity-5 group-hover:opacity-10 transition duration-500">
                  <div className="text-brand-100 w-[4rem] mt-2">
                    <QualityIcon/>
                  </div>
                </div>
                <div className="flex flex-col justify-between relative h-full">
                  <div>
                    <h2 className="font-bold text-brand-100 text-2xl">Visão</h2>
                    <p className="font-medium text-zinc-600">
                      Aprimorar, evoluir e buscar a vanguarda para comunicar pessoas, negócios e propósitos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-50/40 to-zinc-200/40 backdrop-blur-md p-8 border-x group border-brand-100/10 relative shadow-lg ">
                <div className="absolute top-1 right-3 opacity-5 group-hover:opacity-10 transition duration-500">
                  <div className="text-brand-100 w-[4rem] mt-2">
                    <HandShake/>
                  </div>
                </div>
                <div className="flex flex-col justify-between relative h-full">
                  <div>
                    <h2 className="font-bold text-brand-100 text-2xl">
                      Valores
                    </h2>
                    <p className="font-medium text-zinc-600">
                    Oferecer sempre a verdade, fortalecendo laços entre quem comunica e quem é comunicado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default FeedValores;