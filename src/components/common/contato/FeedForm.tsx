"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { BsSend } from "react-icons/bs";

type Inputs = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

const FeedForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  let [isOpen, setIsOpen] = useState(false);
  const [mouse, setMouse] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msgPP, setMsgPP] = useState("hidden");
  const [pp, setPP] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!pp) {
      setMsgPP("");
      return;
    }
    setMsgPP("hidden");
    setMouse("cursor-progress");
    fetch("/api/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://localhost:3000/",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setMouse("");
        setIsOpen(true);
        setTelefone("");
        reset();
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        setTelefone("");
      });
  };

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-1">
        <div className="relative">
          <label htmlFor="nome" className="text-faiz-100 relative font-medium">
            Nome
          </label>
          <input
            {...register("nome", {
              required: "Nome é obrigatório",
            })}
            type="text"
            className="w-full px-3 pb-2 pt-3 bg-zinc-200 rounded-t-sm outline-none transition duration-700 delay-150 relative"
          />
          {errors.nome && (
            <p
              className={
                "absolute translate-y-full bottom-0 text-faiz-400 text-xs"
              }
            >
              {errors.nome.message}
            </p>
          )}
        </div>

        <div className="relative pt-3">
          <label htmlFor="email" className="text-faiz-100 font-medium">
            E-mail
          </label>
          <input
            {...register("email", {
              required: "E-mail é obrigatório",
            })}
            type="text"
            className="w-full px-3 pb-2 pt-3 bg-zinc-200 rounded-t-sm outline-none transition duration-700 delay-150 relative"
          />
          {errors.email && (
            <p
              className={
                "absolute translate-y-full bottom-0 text-faiz-400 text-xs"
              }
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative pt-3">
          <label htmlFor="tefone" className="text-faiz-100 font-medium">
            Telefone
          </label>
          <ReactInputMask
            id="telefone"
            mask="(99) 99999-9999"
            value={telefone}
            {...register("telefone", {
              required: "Telefone é obrigatório",
            })}
            className="w-full px-3 pb-2 pt-3 bg-zinc-200 rounded-t-sm outline-none transition duration-700 delay-150 relative"
            onChange={(e) => setTelefone(e.target.value)}
          />
          {errors.telefone && (
            <p
              className={
                "absolute translate-y-full bottom-0 text-faiz-400 text-xs"
              }
            >
              {errors.telefone.message}
            </p>
          )}
        </div>
        <div className="relative pt-3">
          <label htmlFor="mensagem" className="text-faiz-100 font-medium">
            Mensagem
          </label>
          <textarea
            {...register("mensagem", {
              required: "Especificações é obrigatório",
            })}
            rows={5}
            className="w-full px-3 pb-2 pt-3 bg-zinc-200 rounded-t-sm outline-none transition duration-700 delay-150 relative"
          />
          {errors.mensagem && (
            <p
              className={
                "absolute translate-y-full bottom-0 text-faiz-400 text-xs"
              }
            >
              {errors.mensagem.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-x-1 flex-nowrap mt-5 text-brand-100 text-sm">
        <input
          type="checkbox"
          name="pp"
          onChange={(e) => setPP(e.target.checked)}
        />
        <label htmlFor="pp">
          Eu concordo com as{" "}
          <a
            href="/politica-de-privacidade"
            target="_blank"
            className="underline text-brand-50 hover:text-brand-100 transition duration-500"
          >
            Políticas de Privacidade
          </a>
        </label>
      </div>
      <p className={`${msgPP} text-brand-100 text-sm mt-1`}>
        Para enviar, você precisa concordar as com as políticas de privacidade.
    </p>

      <div className="mt-8 hover:-translate-y-2 transition duration-500 flex place-content-center">
        <button className="font-bold rounded-full outline-none text-white border border-faiz-300 bg-faiz-100 px-5 py-2   transition duration-500">
          Enviar
          <span className="inline-block -mb-1 ml-2">
            <BsSend />
          </span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <div className="mt-2">
                    <h2 className="text-2xl text-center font-bold text-brand-100">
                      Contato Enviado!
                    </h2>
                    <p className="font-semibold text-brand-100 text-center">
                      Entraremos em contato com você em breve.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex max-w-max  bg-brand-100 rounded-md duration-500 hover:shadow-2xl text-white py-2 px-6 md:px-10 font-semibold shadow-xl mt-3 group mx-auto"
                      onClick={closeModal}
                    >
                      OK
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </form>
  );
};

export default FeedForm;