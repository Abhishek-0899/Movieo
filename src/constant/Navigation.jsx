import { BiMovie } from "react-icons/bi";
import { BiTv } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <BiTv />,
  },
  {
    label: "Movie",
    href: "movie",
    icon: <BiMovie />,
  },
];
export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <CgHome />,
  },
  ...navigation,
  {
    label: "search",
    href: "/search",
    icon: <AiOutlineSearch />,
  },
];
