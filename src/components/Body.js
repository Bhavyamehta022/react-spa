import { MemeCard } from "./MemeCard.js";
import { useApi } from "../utils/useApi";
import { useState } from "react";
export const Body = () => {
  const [listOfMemes, setListOfMemes] = useState([]);
  const [showShimmer,setShowShimmer] = useState(false);
  useApi(setListOfMemes,setShowShimmer);
  return <MemeCard data={listOfMemes} showShimmer={showShimmer}/>;
};
