import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <ol className="navList">
        <li className="navListItem">
          <Link to="/all" className="link">
            All
          </Link>
        </li>
        <li className="navListItem">
          <Link to="/pending" className="link">
            Pending
          </Link>
        </li>
        <li className="navListItem">
          <Link to="/important" className="link">
            Important
          </Link>
        </li>
        <li className="navListItem">
          <Link to="/completed" className="link">
            Completed
          </Link>
        </li>
      </ol>
    </>
  );
};
export default SideNav;
