import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { ProductItem } from "./ProductItem";
export const Pagination = () => {
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  let total = 0;
  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        currentPage * 10
      }&select=title,price,description,images`
    );
    const json = await data.json();
    setProducts(json.products);
    total = json.total;
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);
  const handlePrev = () => {
    setCurrentPage((pn) => (pn == 0 ? pn : pn - 1));
  };
  const handleNext = () => {
    setCurrentPage((pn) => (pn == 20 ? pn : pn + 1));
  };
  if (!products) return (<div className="container"><Shimmer /></div>);
  return (
    <div>
      <div className="productContainer">
        {products.map((item, index) => (
          <ProductItem data={item} key={index} />
        ))}
      </div>
      <div className="pagination">
        {currentPage > 0 && (
          <span
            onClick={() => {
              handlePrev();
            }}
          >
            Prev
          </span>
        )}
        {[...Array(20).keys()].map((pn) => (
          <span
            className={currentPage == pn ? "active" : ""}
            key={pn}
            onClick={() => setCurrentPage(pn)}
          >
            {pn + 1}
          </span>
        ))}
        {currentPage < 20 && <span onClick={() => handleNext()}>Next</span>}
      </div>
    </div>
  );
};
