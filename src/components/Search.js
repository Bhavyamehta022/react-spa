import { useState, useEffect } from "react";
export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [cache, setCache] = useState({});
  useEffect(() => {
    const s = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(s);
  }, [searchText]);
  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResult(cache[searchText]);
      return;
    }
    const data = await fetch(
      "https://www.google.com/complete/search?client=firefox&q=" + searchText
    );
    const json = await data.json();
    setCache((prev) => ({ ...prev, [searchText]: json[1] }));
    cache[searchText] = json[1];
    setSearchResult(json[1]);
  };
  const handleClick = (res) => {
    console.log(res);
    setIsVisible(false);
    setSearchText(res);
  };
  return (
    <div className="searchContainer">
      <div className="search">
        <h1>GOOGLE</h1>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsVisible(true)}
          onBlur={() => setTimeout(()=>{setIsVisible(false)},200)}
        ></input>
        {searchResult.length > 1 && isVisible && (
          <ul>
            {searchResult.map((res) => (
              <li
                key={res}
                onClick={() => {
                  handleClick(res);
                }}
              >
                {res}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
