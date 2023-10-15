"use client";
import { CustomFilterProps } from "../../types";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { updateSearchParams } from "../../utils";
import { useRouter } from "next/navigation";
const CustomFilter = ({ title, options }: CustomFilterProps) => {
	const router = useRouter()
  const [selected, setSelected] = useState(options[0]);

	const handleUpdateParams = (e: {title: string, value: string}) => {
			const newPathName = updateSearchParams(title, e.value.toLowerCase())
			router.push(newPathName, {scroll: false})
	}
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
					handleUpdateParams(e)
        }}>
        <div className="relative z-10 w-fit">
          <Listbox.Button className="searchbar__filters-button">
            <span className="capitalize">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="chevron-up-down"
              className="object-contain ml-4"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="searchbar__filters-options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative px-4 py-2 cursor-default ${
                      active ? "bg-[#f3efec] text-[#aa836f]" : "text-gray-900"
                    }`
                  }>
                  {({ selected }) => (
                    <span
                      className={`${selected} ? 'font-medium' : font-normal'`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
