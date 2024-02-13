import classNames from "classnames";

import style from "./Header.module.scss";
import Link from "next/link";

interface LinkType {
  title: string;
  path: string;
}

const links: LinkType[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Skills",
    path: "/#skills",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
];

export default function Header() {
  function renderLink(link: LinkType) {
    const cn = classNames("font-extralight");
    return (
      <Link className={cn} key={link.path} href={link.path}>
        {link.title}
      </Link>
    );
  }

  return (
    <div className="container m-auto">
      <nav
        className={classNames(
          "pt-10 pb-10 flex justify-center",
          style.headerStyle
        )}
      >
        {links.map((link, i: number) => {
          return renderLink(link);
        })}
      </nav>
    </div>
  );
}
