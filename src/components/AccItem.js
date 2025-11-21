export const AccItem = ({ item, openIndex, index, setOpenIndex }) => {
  return (
    <div className="accParent">
      <div className="accHead" onClick={(()=>setOpenIndex(index===openIndex ? null : index))}>
        <h2>{item.title}</h2>
        <span>⬇</span>
      </div>
      {index === openIndex && <span className="accDesc">{item.desc}</span>}
    </div>
  );
};
