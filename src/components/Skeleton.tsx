import React from "react";

const Skeleton = () => {
  return (
    <ul className="skeleton">
      {[...Array(12)].map((car, index) => (
        <li key={index} className="relative animate-pulse">
          <div className="aspect-square h-[300] w-full overflow-hidden rounded-3xl bg-gray-400"></div>
        </li>
      ))}
    </ul>
  );
};

export default Skeleton;
