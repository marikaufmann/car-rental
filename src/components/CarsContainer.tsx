import React from "react";
import { CarCard, ShowMore } from ".";
import { CarProps, FilterProps,  } from "../../types";

type CarsProps = {
  allCars: CarProps[];
  searchParams: FilterProps;
};
const CarsContainer = ({ searchParams, allCars }: CarsProps) => {
  const isDataEmpty = !Array.isArray(allCars) || !allCars || allCars.length < 1;
	console.log(allCars);
	
  return (
    <>
      {!isDataEmpty ? (
        <section>
          <div
            className="home__cars-wrapper max-sm:pt-[120px]"
            id="cars-wrapper">
            {allCars.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className="home__noresults">
          <h2 className="font-semibold">Oops, no results 🙁</h2>
        </div>
      )}
    </>
  );
};

export default CarsContainer;



// background-color: #f4f4f5;