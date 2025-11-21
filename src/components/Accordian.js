import { data } from "../utils/constants";
import { useState } from "react";
import { AccItem } from "./AccItem";
export const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div>
      {data.map((item, i) => (
        <AccItem key={i} item={item} openIndex={openIndex} index={i} setOpenIndex={setOpenIndex}/>
      ))}
    </div>
  );
};
