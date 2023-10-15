"use client";

import React, { Suspense } from "react";
import { CarProps } from "../../types";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { generateCarImageUrl } from "../../utils";

type CarDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
};
const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="z-10 relative" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/25"></div>
        </Transition.Child>
        <div className="inset-0 fixed overflow-auto">
          <div className="flex items-center justify-center p-4 min-h-full text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90">
              <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-[#f3efec] p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  onClick={closeModal}
                  type="button"
                  className="absolute bg-white top-2 right-2 z-10 p-2 rounded-full">
                  <Image
                    src="/close.svg"
                    width={20}
                    height={20}
                    className="object-contain "
                    alt="close"
                  />
                </button>
                  <div className="flex flex-col gap-3">
                    <div className="relative w-full h-[160px] bg-pattern bg-cover bg-center rounded-lg flex justify-center items-center">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="Car"
                        fill
                        className="object-contain scale-125"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="relative w-full h-24 flex-1 rounded-full">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          fill
                          alt="Car Model"
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-full h-24 flex-1 rounded-full ">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          width={160}
                          height={160}
                          alt="Car Model"
                          className="-bottom-5 absolute scale-[115%]"
                        />
                      </div>
                      <div className="relative w-full h-24 flex-1 rounded-full">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          fill
                          alt="Car Model"
                          className="object-contain"
                        />
                      </div>
                    </ div>
                    <div className="flex flex-1 flex-col gap-2">
                      <h2 className="font-semibold capitalize text-xl">
                        {car.make} {car.model}
                      </h2>

                      <div className="flex	mt-3 flex-wrap gap-4">
                        {Object.entries(car).map(([key, value]) => (
                          <div
                            className="flex justify-between items-center w-full"
                            key={key}>
                            <h4 className="text-gray capitalize">
                              {key.split("_").join(" ")}
                            </h4>
                            <p className="text-black-100 font-semibold">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
