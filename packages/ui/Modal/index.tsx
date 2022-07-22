import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { SvgIcon } from "../SvgIcon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: JSX.Element;
  footer?: JSX.Element;
  title?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  footer,
  title,
}: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-black fixed inset-0 bg-gray-10 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="h-screen text-center md:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="mt-[100%] scale-95"
              enterTo="mt-[0%] scale-100"
              leave="ease-in duration-200"
              leaveFrom="mt-[0%] scale-100"
              leaveTo="mt-[100%] scale-95"
            >
              <Dialog.Panel className="mx-auto flex h-screen max-h-screen w-full transform text-left align-middle transition-all md:max-w-md md:p-4">
                <div className="flex w-full flex-col overflow-hidden bg-white shadow-xl md:rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-gray-900 flex items-center border-b border-gray-3 p-4 text-center font-medium leading-6"
                  >
                    <p className="flex-1 text-center text-body4 font-bold">
                      {title}
                    </p>
                    <div onClick={onClose} className="cursor-pointer">
                      <SvgIcon icon="xClose" />
                    </div>
                  </Dialog.Title>
                  <div className="flex-1 overflow-y-auto overflow-x-hidden p-4">
                    {children}
                  </div>
                  <div className="bg-white">{footer}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
