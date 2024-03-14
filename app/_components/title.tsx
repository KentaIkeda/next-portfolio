"use client";

import { TitleProps, TitleInNormalProps } from "../_types/types";
import { usePathname } from "next/navigation";

// For SideBar
export const Normal = () => {
  return <h1 className="text-3xl font-bold cursor-default">Portfolio</h1>;
};

// For Contetnts section
export const InNormal = ({ where }: TitleInNormalProps) => {
  let isWhere;

  if (where === "/") {
    isWhere = "Top";
  } else {
    const splitedWhere = where.split("/");
    isWhere =
      splitedWhere[1].charAt(0).toUpperCase() + splitedWhere[1].slice(1);
  }

  return (
    <p className="text-3xl font-bold cursor-default">
      {where && <>{isWhere}</>}
    </p>
  );
};

const Title = ({ isInSide }: TitleProps) => {
  const currentPage = usePathname();

  // For avoid hydration Error
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return (
  //     <></>
  //   );
  // }

  const normal = <Normal />;
  const inNormal = <InNormal where={currentPage} />;

  if (!isInSide) {
    return normal;
  }

  return inNormal;
};

export default Title;
