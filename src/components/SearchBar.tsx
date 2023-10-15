"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { SearchManufacturer, SearchModel } from ".";
import { useRouter } from "next/navigation";
import { CarProps } from "../../types";
import Image from "next/image";
import { fetchCars, updateSearchParams } from "../../utils";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`z-10 -ml-3 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      width={40}
      height={40}
      alt="magnifying glass"
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ allCars }: { allCars: CarProps[] }) => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState("");
  const [fetchedCars, setFetchedCars] = useState<CarProps[] | []>([]);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      setError("Please fill in the search bar");
    }
    updateSearch(manufacturer.toLowerCase(), model.toLowerCase());
  };
  const updateSearch = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__manufacturer">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__model">
        <SearchModel
          model={model}
          setModel={setModel}
          manufacturer={manufacturer}
					allCars={allCars}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden " />
    </form>
  );
};

export default SearchBar;
