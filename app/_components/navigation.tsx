"use client";

import Link from "next/link";
import { pageLists } from "../lib/pageList";

const Navigation = () => {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {pageLists.map((page) => {
          return (
            <Link
              key={page.id}
              className="group/nav w-11/12 max-w-80 h-auto mx-auto block"
              href={page.href}
            >
              <li className="w-full h-full p-4 mx-auto bg-dark text-light dark:bg-light dark:text-dark transition-all rounded-md group-hover/nav:tracking-wider group-hover/nav:text-indigo-500 group-hover/nav:underline text-center text-xl">
                {page.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
