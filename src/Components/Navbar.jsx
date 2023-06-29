import React from "react";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-md shadow"
        style={{ backgroundColor: "#ffff" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-danger dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* {items.first_name} {items.last_name} */}

                  <Avatar
                    size={{ xl: 40, xxl: 50 }}
                    // src={items.profile_photo}
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbwPZPK2Epd0KCk9qANZweJlai8Fi1AXhnA&usqp=CAU"
                  />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
