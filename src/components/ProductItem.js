export const ProductItem = ({ data }) => {
  return (
    <div>
      <div className="product">
        <h3>{data.title}</h3>
        <img src={data.images[0]} />
        {data.description}
        <span>Price: Rs {data.price}/- </span>
      </div>
    </div>
  );
};
