import {
  AboutUs,
  Await,
  CarCard,
  CarsContainer,
  CustomFilter,
  Hero,
  SearchBar,
  ShowMore,
  Skeleton,
} from "@/components";
import Image from "next/image";
import { HomeProps } from "../../types";
import { fetchCars } from "../../utils";
import { fuels, yearsOfProduction } from "../../constants";
import ScrollTopBottom from "@/components/ScrollTopBottom";
import { Suspense } from "react";
import { v4 as uuid } from "uuid";
export default async function Home({ searchParams }: HomeProps) {
  const promise = fetchCars({
    model: searchParams.model || "",
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    limit: searchParams.limit || 10,
    fuel: searchParams.fuel || "",
  });

  return (
    <main className="home-container" key={uuid()}>
      <ScrollTopBottom />
      <Hero />
      <div className="searchbar-container--outer ">
        <div className="searchbar-container--inner" id="search">
          <Await promise={promise}>
            {(data) => <SearchBar allCars={data} />}
          </Await>
          <div className="searchbar__filters-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Await promise={promise}>
          {(data) => (
            <CarsContainer allCars={data} searchParams={searchParams} />
          )}
        </Await>
      </Suspense>

      <AboutUs />
    </main>
  );
}
