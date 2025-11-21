import { useEffect } from "react";
export const useApi = (setListOfMemes, setShowShimmer) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        fetchData();
      }
    };

    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const fetchData = async () => {
    try {
      setShowShimmer(true);
      const data = await fetch("https://meme-api.com/gimme/20");
      const json = await data.json();
      setShowShimmer(false);
      setListOfMemes((memes) => [...memes, ...json.memes]);
    } catch (error) {
      console.warn("Error fetching memes:", error);
    }
  };
};
