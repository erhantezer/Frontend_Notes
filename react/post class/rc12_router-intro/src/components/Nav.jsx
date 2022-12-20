import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <ul className="container d-flex justify-content-around mt-4 list-unstyled bg-primary py-3">
        <li>
          <Link className="text-white text-decoration-none" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-white text-decoration-none" to="/instructors">Instructors</Link>
        </li>
        <li>
          <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
