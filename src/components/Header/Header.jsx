import {Link, useLocation} from "react-router-dom";
import "../Header/Header.scss";
import arrowIcon from "../../assets/Icons/Arrow.svg";


const Header = ({ toggleFilterDrawer, isFilterOpen}) => {

  const location = useLocation();
  const isPhotoPage=location.pathname.startsWith("/photos/");
  return (
    <header className="header">
      <div className="header__content">
      <h1 className="header__title">Snaps</h1>
      {isPhotoPage ? (
        <Link to ="/" className="header__back"><img src={arrowIcon} alt="arrow-icon"/>  Home</Link>
      ): (
      <button
        className={`header__filter-button ${isFilterOpen ? "active" : ""}`}
        onClick={toggleFilterDrawer}
      >
        Filters
        <svg
          className="header__filter-icon"
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="#1E6655"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66667 10.5H8.33333C8.79167 10.5 9.16667 10.125 9.16667 9.66667C9.16667 9.20833 8.79167 8.83333 8.33333 8.83333H6.66667C6.20833 8.83333 5.83333 9.20833 5.83333 9.66667C5.83333 10.125 6.20833 10.5 6.66667 10.5ZM0 1.33333C0 1.79167 0.375 2.16667 0.833333 2.16667H14.1667C14.625 2.16667 15 1.79167 15 1.33333C15 0.875 14.625 0.5 14.1667 0.5H0.833333C0.375 0.5 0 0.875 0 1.33333ZM3.33333 6.33333H11.6667C12.125 6.33333 12.5 5.95833 12.5 5.5C12.5 5.04167 12.125 4.66667 11.6667 4.66667H3.33333C2.875 4.66667 2.5 5.04167 2.5 5.5C2.5 5.95833 2.875 6.33333 3.33333 6.33333Z"
            stroke={isFilterOpen ? "#ffffff" : "#1E6655"}
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      )}
      </div>
    </header>
  );
};

export default Header;


// import "../Header/Header.scss";

// const Header = ({ toggleFilterDrawer, isFilterOpen }) => {
//   return (
//     <header className="header">
//       <h1 className="header__title">Snaps</h1>
//       <button
//         className={`header__filter-button ${isFilterOpen ? "active" : ""}`}
//         onClick={toggleFilterDrawer}
//       >
//         Filters
//         <svg
//           className="header__filter-icon"
//           width="15"
//           height="11"
//           viewBox="0 0 15 11"
//           fill="#1E6655"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M6.66667 10.5H8.33333C8.79167 10.5 9.16667 10.125 9.16667 9.66667C9.16667 9.20833 8.79167 8.83333 8.33333 8.83333H6.66667C6.20833 8.83333 5.83333 9.20833 5.83333 9.66667C5.83333 10.125 6.20833 10.5 6.66667 10.5ZM0 1.33333C0 1.79167 0.375 2.16667 0.833333 2.16667H14.1667C14.625 2.16667 15 1.79167 15 1.33333C15 0.875 14.625 0.5 14.1667 0.5H0.833333C0.375 0.5 0 0.875 0 1.33333ZM3.33333 6.33333H11.6667C12.125 6.33333 12.5 5.95833 12.5 5.5C12.5 5.04167 12.125 4.66667 11.6667 4.66667H3.33333C2.875 4.66667 2.5 5.04167 2.5 5.5C2.5 5.95833 2.875 6.33333 3.33333 6.33333Z"
//             stroke={isFilterOpen ? "#ffffff" : "#1E6655"}
//             strokeWidth="0.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>
//     </header>
//   );
// };

// export default Header;
