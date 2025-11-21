import { Shimmer } from "./Shimmer";
export const MemeCard = ({ data, showShimmer }) => {
  return (
    <div className="container">
      {/* even if the data is empty, it doesnlt throw error because data = [] and not null or undefined*/}
      {data.map((_, i) => {
        return (
          <div className="card" key={i}>
            <h4>{data[i].title}</h4>
            <img src={data[i].url} />
          </div>
        );
      })}
      {showShimmer && <Shimmer />}
    </div>
  );
};
