import { navMenuItems } from "@/app/data/navMenu";
import Link from "next/link";

const NavItems = () => {
  return (
    <div className="hidden lg:flex text-sm gap-6 mx-10 text-foreground-muted">
      {navMenuItems?.map((item) => (
        <Link
          key={item?.url}
          href={item?.url}
          className="transition-colors duration-200 hover:text-primary"
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
