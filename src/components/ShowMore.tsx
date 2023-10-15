"use client";
import React from "react";
import { CustomButton } from ".";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "../../utils";
type ShowMoreProps = {
  pageNumber: number;
  isNext: boolean;
};
const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", newLimit.toString());
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="showmore">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-[#0e1d21] transition ease-out hover:opacity-90 active:opacity-80 shadow-lg rounded-full py-4 px-[26px]"
          textStyles="text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
