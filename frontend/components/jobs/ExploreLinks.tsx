import Link from "next/link";
import React from "react";
import { ExploreLinks as LINKS } from "@/constants/details";
import { IExploreLinks } from "@/types";
const ExploreLinks = () => {
  return (
    <div className="pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {LINKS.map(({ title, links }, i) => (
        <LinkBlock key={i} title={title} links={links} index={i} />
      ))}
    </div>
  );
};

export default ExploreLinks;

const LinkBlock = ({ title, links, index }: IExploreLinks) => {
  const isLast = index === 4;
  return (
    <div className={isLast ? "lg:col-start-3" : ""}>
      <h2 className="text-primary-300 text-2xl font-semibold mb-4">{title}</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link, i) => (
          <li key={i} className="text-grey-100">
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
