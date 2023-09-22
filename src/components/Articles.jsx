import React, { useEffect, useState } from "react";
import SkeletonArticles from "../skeletons/SkeletonArticles";

export default function Articles() {
  const [articles, setarticles] = useState();
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setarticles(data);
      console.log(articles);
    }, 5000);
  }, []);
  return (
    <div>
      <h1 className=" text-very-dark-blue text-[20px] font-semibold">
        Articles
      </h1>
      {articles &&
        articles.map((articles) => (
          <div>
            <h3 className=" font-semibold py-2">{articles.title}</h3>
            <p className=" pb-4">{articles.body}</p>
          </div>
        ))}

      {!articles && [1, 5, 3, 4, 5].map((n) => <SkeletonArticles key={n} />)}
    </div>
  );
}
