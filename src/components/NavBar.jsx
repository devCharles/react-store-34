import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/products",
    text: "Products",
  },
];

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  function handleLoginLogout() {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/login");
    }

    if (!isLoggedIn) {
      navigate("/login");
    }
  }

  return (
    <nav className="w-full flex flex-row gap-4 bg-neutral-600">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            to={link.href}
            className="w-full text-center p-4"
          >
            {link.text}
          </Link>
        );
      })}

      <div className="w-full text-center p-4" onClick={handleLoginLogout}>
        {isLoggedIn ? "Logout" : "Login"}
      </div>
    </nav>
  );
}
