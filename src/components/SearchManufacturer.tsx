"use client";
import { useState, Fragment } from "react";
import { SearchProps } from "../../types";
import { manufacturers } from "../../constants";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <div className="searchbar__manufacturer--wrapper ">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car Logo"
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            placeholder="Volkswagen"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="searchbar__manufacturer--input"
            displayValue={(manufacturer: string) => manufacturer}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Combobox.Options className="searchbar__manufacturer--options">
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  value={item}
                  key={item}
                  className={({ active }) =>
                    `relative pl-10 pr-4 py-2 cursor-default ${
                      active ? "bg-[#f3efec] text-[#aa836f]" : "text-gray-900 "
                    }`
                  }>
                  {({ active, selected }) => (
                    <>
                      <span
                        className={`block-truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {item}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
