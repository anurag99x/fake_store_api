import { Link } from "react-router-dom";
const Links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/products",
    title: "Products",
  },
];

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
        background: "black",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Links.map(({ to, title }) => {
        return (
          <Link
            // className="link"
            style={{
              color: "white",
              textDecoration: "none",
              border: "1px solid white",
              padding: "5px",
            }}
            to={to}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export { Navbar };
