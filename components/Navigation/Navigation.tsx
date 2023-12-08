import { getNavBar } from "@/helpers/helpers";
import Link from "next/link";
import ShoppingCart from "../Cart/ShoppingCart";

const Navigation = async () => {
  const navBar = await getNavBar();
  const navItems: NavElement[] = navBar.fields.navElements;

  return (
    <nav className="w-full h-20">
      <ul className="flex h-full items-center justify-end p-4 px-20 bg-cyan-300 text-white font-bold">
        {navItems.map((item) => (
          <li key={item.sys.id} className="hover:text-cyan-700">
            <Link className="pl-4 mr-4" href={`/${item.fields.slug}`}>
              {item.fields.title}
            </Link>
          </li>
        ))}
        <ShoppingCart />
      </ul>
    </nav>
  );
};

export default Navigation;
