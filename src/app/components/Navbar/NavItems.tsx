import { navMenuItems } from "@/app/data/navMenu";
import Link from "next/link";

const NavItems = () => {
  return (
    <div className="hidden lg:flex text-sm gap-4 lg:mx-10">
      {navMenuItems?.map((item) => (
        <Link
          key={item?.url}
          href={item?.url}
          className="transition-all duration-300 hover:text-primary"
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
