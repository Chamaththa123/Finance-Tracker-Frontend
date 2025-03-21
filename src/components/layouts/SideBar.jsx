import React from "react";
import { Card, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Link,useLocation  } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import { newNavigationItems } from "../../utils/dataArrays";
import { useState } from "react";
import { useEffect } from "react";
import { ArrowDown, ArrowRight, UserProfileIcon } from "../../utils/icons";
import { useStateContext } from "../../contexts/NavigationContext";

export const SideBar = ({ handleSidebar, sidebar }) => {
  const { user } = useStateContext();
  console.log(user);
  const location = useLocation();
  const [linkchange, setLinkChange] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("/dashboard");
  useEffect(() => {
    setCurrentUrl(location.pathname); // Update current URL on route change
  }, [location.pathname]);
  return (
    <Card
      className={`fade-right-enter-active scrollbar-y-style fixed z-50 flex h-full w-[60%] transform flex-col items-start overflow-y-auto rounded-none bg-[#000000] p-2 font-inter transition duration-500 ease-in-out md:w-[16%] md:opacity-100 ${
        sidebar ? "fade-right-enter-to" : "fade-right-enter-from"
      } `}
    >
      <div className="relative mb-2 flex items-center gap-4 p-4">
        <img src={logo} alt="brand" className="w-[80%] md:w-[150px]" />
        <span
          onClick={handleSidebar}
          className="absolute right-0 top-0 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
      </div>
      <li className="w-full list-none">
        {newNavigationItems.map((item, itemIndex) => {
          return (
            <NavItem
              icon={item.icon}
              currentUrl={currentUrl}
              // setLinkChange={setLinkChange}
              // changeUrl={changeUrl}
              key={itemIndex}
              title={item.title}
              link={item.link}
              priv_name={item.priv_name}
              children={item.children}
              handleSidebar={handleSidebar}
            />
          );
        })}
      </li>
      <div className="item-center absolute bottom-0 -ml-2 flex h-[60px] w-full justify-center gap-3 border-t-[1px] border-[#5a5a5a] p-3">
        <UserProfileIcon className="h-6 w-6 text-white" />
        <div className="flex items-center justify-center text-[14px] text-white">
          {user.name}
        </div>
      </div>
    </Card>
  );
};

const NavItem = ({
  icon,
  title,
  link,
  priv_name,
  children,
  currentUrl,
  setLinkChange,
  handleSidebar,
}) => {
  const { user } = useStateContext();
  const [openChildren, setOpenChildren] = useState(false);

  const toggleChildren = () => {
    setOpenChildren(!openChildren);
    if (children === 0) handleSidebar();
  };

  const NavIcon = icon;

  return (
    <div className="w-full">
      <Link to={`${link !== "#" ? link : "#"}`}>
        <ListItem
          onClick={toggleChildren}
          className={` ${user[priv_name] === 0 ? "hidden" : ""}
  ${currentUrl === link ? "bg-[#25C935] text-white" : "text-white"} 
  w-full rounded-sm text-[14px] font-bold hover:bg-[#25C935] hover:text-white 
  focus:bg-[#25C935] focus:text-white active:bg-[#25C935]"
`}
        >
          <ListItemPrefix>
            <NavIcon className="h-5 w-5" />
          </ListItemPrefix>
          <span className="mr-2 flex-1 text-[14px] font-normal">{title}</span>
          {children && children.length > 0 && (
            <span>
              {openChildren ? (
                <ArrowDown className="h-[10px] w-[10px]" />
              ) : (
                <ArrowRight className="h-[10px] w-[10px]" />
              )}
            </span>
          )}
        </ListItem>
      </Link>

      {openChildren && Array.isArray(children) && children.length > 0 && (
        <ul className="ml-4 border-l-2 border-[#10806f]">
          {children.map((child, index) => (
            <NavItem
              key={index}
              icon={child.icon}
              title={child.title}
              link={child.link}
              priv_name={child.priv_name}
              children={child.children}
              currentUrl={currentUrl}
              setLinkChange={setLinkChange}
              handleSidebar={handleSidebar}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
