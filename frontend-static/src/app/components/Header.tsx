import classNames from "classnames";

import style from "./Header.module.scss";

interface LinkTypes {
  title: string;
  path: string;
}

const links: LinkTypes[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];

export default function Header() {
  return (
    <div className="container m-auto">
      <nav
        className={classNames(
          "pt-10 pb-10 flex justify-center",
          style.headerStyle
        )}
      >
        {links.map((link, i: number) => {
          return (
            <a key={i} href={link.path} className="font-extralight">
              {link.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
