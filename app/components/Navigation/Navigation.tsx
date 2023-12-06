import { getLandingPage, getNavBar } from "@/app/helpers/helpers";
import Link from "next/link";

const Navigation = async () => {
  const navBar = await getNavBar();
  const navItems: NavElement[] = navBar.fields.navElements;
  console.log(navItems)

  return (
    <nav className="w-full h-20">
      <ul className="flex h-full items-center justify-end p-4">
        {navItems.map((item) => (
          <li key={item.sys.id}>
            <Link className="pl-4" href={item.fields.slug}>
              {item.fields.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
