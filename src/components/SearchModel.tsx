"use client";
import { useState, Fragment, useEffect } from "react";
import { CarProps, SearchProps } from "../../types";
import { manufacturers } from "../../constants";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { fetchCarsByManufacturer } from "../../utils";
const SearchModel = ({ model, setModel, manufacturer }: SearchProps) => {
  const [fetchedCars, setFetchedCars] = useState<CarProps[] | []>([]);
  const [query, setQuery] = useState("");

  const isDataEmpty =
    !Array.isArray(fetchedCars) || !fetchedCars || fetchedCars.length < 1;

  function compareByModel(a: CarProps, b: CarProps) {
    return a.model.localeCompare(b.model);
  }
  const sortedModels = !isDataEmpty ? fetchedCars.sort(compareByModel) : [];

  const uniqueModels: string[] = [];
  const unique = sortedModels?.filter((item) => {
    const isDuplicate = uniqueModels.includes(item.model);
    if (!isDuplicate) {
      uniqueModels.push(item.model);
      return true;
    }
    return false;
  });

  const models =
    query === ""
      ? unique
      : unique?.filter((item) =>
          item.model
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  useEffect(() => {
    if (manufacturer) {
      const fetchingCars = async () => {
        let result: CarProps[] = await fetchCarsByManufacturer(
          manufacturer.toLowerCase(),
        );
        setFetchedCars(result);
      };
      fetchingCars();
    }
    return () => {};
  }, [manufacturer]);

  return (
    <div className="searchbar__model--wrapper">
      <Combobox value={model} onChange={setModel}>
        <div className="relative w-full sm:ml-4">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/model-icon.png"
              width={20}
              height={20}
              alt="Car Logo"
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            as="input"
            placeholder="Tiguan"
            className="searchbar__model--input"
            displayValue={(model: string) => model}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Combobox.Options className="searchbar__model--options">
              {models?.map((item) => (
                <Combobox.Option
                  value={item.model}
                  key={item.model}
                  className={({ active }) =>
                    `relative pl-10 pr-4 py-2 cursor-default ${
                      active ? "bg-[#f3efec] text-[#846758]" : "text-gray-900"
                    }`
                  }>
                  {({ active, selected }) => (
                    <>
                      <span
                        className={`block-truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {item.model}
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

export default SearchModel;
