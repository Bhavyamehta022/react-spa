import { Link } from "react-router-dom";
export const Header = ({ lang, setLang }) => {
  return (
    <div className="hello">
      <h2>Hello</h2>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/acc">
          <li>Accordian</li>
        </Link>
        <Link to="/comment">
          <li>Comments</li>
        </Link>
        <Link to="/slider">
          <li>Slider</li>
        </Link>
        <Link to="/pagination">
          <li>Pagination</li>
        </Link>
        <Link to="/livestream">
          <li>Live Stream</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <li>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ge">Germany</option>
          </select>
        </li>
      </ul>
    </div>
  );
};
