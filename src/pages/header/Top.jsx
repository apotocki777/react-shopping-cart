import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TopHeader({ cart }) {
  const [isEnglishDropdownOpen, setEnglishDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [chosenLanguage, setChosenLanguage] = useState("English");
  const [chosenCurrency, setChosenCurrency] = useState("USD");

  const toggleEnglishDropdown = () => {
    setEnglishDropdownOpen(!isEnglishDropdownOpen);
  };

  const toggleCurrencyDropdown = () => {
    setCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const handleLanguageChange = (e) => {
    setChosenLanguage(e.target.innerText);
    toggleEnglishDropdown();
  };

  const handleCurrencyChange = (e) => {
    setChosenCurrency(e.target.innerText);
    toggleCurrencyDropdown();
  };

  return (
    <div className="flex items-center justify-between bg-tertiary px-32 py-4 font-josefin text-lg text-white">
      <div className="flex items-center gap-3">
        <MailOutlineIcon fontSize="small" />
        <p className="mr-5">something@something.com</p>
        <PhoneInTalkIcon fontSize="small" />
        <p>0049-333-333-333</p>
      </div>

      <div>
        <ul className="flex flex-row items-center gap-4">
          <li className="relative flex items-center gap-1">
            <p>{chosenLanguage}</p>
            <button onClick={() => toggleEnglishDropdown()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isEnglishDropdownOpen && (
              <ul className="absolute left-0 top-full z-50 mt-2 w-full min-w-max rounded-md bg-grey-1 p-2 text-primary shadow-lg ring-1 ring-black ring-opacity-5">
                <li>
                  <button onClick={(e) => handleLanguageChange(e)}>
                    English
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleLanguageChange(e)}>
                    Spanish
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleLanguageChange(e)}>
                    French
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li className="relative flex w-14 items-center gap-1">
            <p>{chosenCurrency}</p>
            <button
              onClick={() => {
                toggleCurrencyDropdown();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isCurrencyDropdownOpen && (
              <ul className="absolute left-0 top-full z-50 mt-2 w-full min-w-max rounded-md bg-grey-1 p-2 text-primary shadow-lg ring-1 ring-black ring-opacity-5">
                <li>
                  <button onClick={(e) => handleCurrencyChange(e)}>USD</button>
                </li>
                <li>
                  <button onClick={(e) => handleCurrencyChange(e)}>EUR</button>
                </li>
                <li>
                  <button onClick={(e) => handleCurrencyChange(e)}>GBP</button>
                </li>
              </ul>
            )}
          </li>
          <li className="mr-2 flex items-center gap-2">
            <p className="">Login</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </li>
          <li className="mr-2 flex items-center gap-2">
            <p className="">Wishlist</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </li>
          <li>
            <Link to="cart">
              <button className="group relative m-0 flex items-center p-0">
                <div
                  className={
                    "absolute bottom-2 left-2 h-6 w-6 rounded-full bg-primary-dark transition-all group-hover:left-7 " +
                    (cart.length === 0 ? "hidden" : "")
                  }
                >
                  {cart.length !== 0
                    ? cart.reduce((curr, acc) => curr + acc.quantity, 0)
                    : null}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 transition-all group-hover:z-50 group-hover:scale-150 group-hover:stroke-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
