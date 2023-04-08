import React, { useContext, useState } from "react";
import { MenuListContext } from "./MenuContext";
import styles from "./Menu.module.css";
import { FaStar } from "react-icons/fa";

function Menu() {
  const value = useContext(MenuListContext);
  const [selectedOption, setSelectedOption] = useState("Tümü");
  const genreOptions = [
    "Tümü",
    ...new Set(value.map((menuItem) => menuItem.genre)),
  ];

  const filteredMenu = value.filter((menuItem) => {
    if (
      selectedOption === "Tümü" ||
      menuItem.genre.toLowerCase() === selectedOption.toLowerCase()
    ) {
      return true;
    }
    return false;
  });

  const handleDropdownChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
  };

  const menuCards = filteredMenu.map((menuItem) => (
    <div key={menuItem.name} className="col-sm-6 col-md-4 mb-4" id="Menu">
      <div className={`card ${styles.card}`} key={menuItem.id}>
        <img src={menuItem.img} className="card-img-top" alt={menuItem.name} />
        <div className="card-body">
          <h5 className={`card-title ${styles.cardTitle}`}>{menuItem.name}</h5>
          <p className={`card-text ${styles.description}`}>{menuItem.dsc}</p>
          <p className={`card-text ${styles.price}`}>
            <small className="text-light">₺{menuItem.price}</small>
          </p>
          <div className="text-center">
            {menuItem.rate &&
              [...Array(menuItem.rate)].map((_, index) => (
                <FaStar key={index} className={`star ${styles.star}`} />
              ))}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="menu">
      <h2 className={`${styles.menuTitle} text-center mt-3 mb-3`}>Menü</h2>
      <div className="dropdown">
        <select
          className={`form-select form-select-lg mb-3  ${styles.dropdown}`}
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          {genreOptions.map((genreOption) => (
            <option
              className={`${styles.menuTitle} text-center`}
              key={genreOption}
              value={genreOption.toLowerCase()}
            >
              {genreOption}
            </option>
          ))}
        </select>
      </div>
      <div className={`row justify-content-center ${styles.menu}`}>
        {menuCards}
      </div>
    </div>
  );
}

export default Menu;
