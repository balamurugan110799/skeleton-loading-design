import React from "react";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonUser() {
  return (
    <div>
      <div className=" grid grid-cols-3 pt-6 w-[100%]">
        <div>
        <SkeletonElement type={"image"} />
        </div>
        <div className=" col-span-2 pt-4 w-full px-2">
          <SkeletonElement type={"title"} />
          <SkeletonElement type={"text"} />
        </div>
      </div>
    </div>
  );
}
