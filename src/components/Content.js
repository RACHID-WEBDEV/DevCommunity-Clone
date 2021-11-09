import React, { useEffect, useState } from "react";
import ArticleComponent from "./ArticleComponent";
import ArticleSkeleton from "./ArticleSkeleton";

const Content = () => {
     const [articles, setArticles] = useState(null);

     useEffect(() => {
          const fetchAgain = () => {
               if (articles != null) {
                    fetch("https://dev.to/api/articles")
                         .then((res) => res.json())
                         .then((result) =>
                              setArticles([...articles, ...result])
                         );
               }
          };

          const handleScroll = () => {
               const html = document.documentElement;
               const body = document.body;
               const windowheight =
                    "innerHeight" in window
                         ? window.innerHeight
                         : html.offsetHeight;

               const docHeight = Math.max(
                    body.scrollHeight,
                    body.offsetHeight,
                    html.clientHeight,
                    html.scrollHeight,
                    html.offsetHeight
               );

               const windowBottom = windowheight + window.pageYOffset;
               if (windowBottom >= docHeight) {
                    console.log("we reached the bottom");
                    fetchAgain();
               }
          };

          window.addEventListener("scroll", handleScroll);

          return () => window.removeEventListener("scroll", handleScroll);
     }, [articles]);

     useEffect(() => {
          setTimeout(async () => {
               const res = await fetch("https://dev.to/api/articles");
               const data = await res.json();

               setArticles(data);
               console.log(data);
          }, 2000);
     }, []);

     return (
          <main className="main-content">
               <header>
                    <a href="/#" style={{ color: "black" }}>
                         <b>Feed</b>
                    </a>
                    <a href="/#">Latest</a>
                    <a href="/#">Top</a>
               </header>
               <div className="articles">
                    {articles &&
                         articles.map((article, id) => {
                              return (
                                   <ArticleComponent key={id} data={article} />
                              );
                         })}

                    {!articles &&
                         [1, 2, 3, 4, 5].map((a) => (
                              <ArticleSkeleton key={a} />
                         ))}
               </div>
          </main>
     );
};

export default Content;
