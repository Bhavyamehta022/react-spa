import { useState,useEffect } from "react";
export const Slider = () => {
  const data = [
    "https://picsum.photos/id/237/400/300",
    "https://picsum.photos/id/1024/400/300",
    "https://picsum.photos/id/1025/400/300",
    "https://picsum.photos/id/235/400/300",
    "https://picsum.photos/id/232/400/300",
  ];
  const [imgSrc, setImgSrc] = useState(0);
  const loadPrevImage = () => {
    setImgSrc((prev) => (prev <= 0 ? prev : prev - 1));
  };
  const loadNextImage = () => {
    console.log(imgSrc);
    setImgSrc((prev) => (prev >= 4 ? prev : prev + 1));
  };
  const leftImage = imgSrc>0 ? imgSrc-1 : null;
  const rightImage = imgSrc<4 ? imgSrc+1 : null;
  return (
    <div>
      <div className="sliderParent">
        <span className="box1"onClick={() => loadPrevImage()}>❮</span>
        <img className="halfImgLeft" src={data[leftImage]}/>
        <img src={data[imgSrc]} />
        <img className="halfImgRight" src={data[rightImage]}/>
        <span className="box2"onClick={() => loadNextImage()}>❯</span>
      </div>
    </div>
  );
};
