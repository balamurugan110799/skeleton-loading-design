import React from "react";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonArticles() {
  return (
    <div>
      <div className="pt-2 pb-1">
        <SkeletonElement type={"title"} />
      </div>
      <div className="pb-4">
        <SkeletonElement type={"text"} />
        <SkeletonElement type={"text"} />
      </div>
    </div>
  );
}
