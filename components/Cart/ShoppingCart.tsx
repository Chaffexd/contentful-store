"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import useStore from "../store/store";

const ShoppingCart = () => {
  return (
    <Link
      href={"/cart"}
      className="p-2 rounded-md hover:bg-cyan-600 text-slate-700 hover:text-white relative transition duration-200 ease-in-out"
    >
      <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
      <Label items={0} />
    </Link>
  );
};

type LabelProps = {
    items: number;
}

const Label: React.FC<LabelProps> = () => {
  const cart = useStore((state) => state.cart);
  if (cart.length === 0) return <></>;

  return (
    <span className="absolute top-0 right-0 w-4 h-4 bg-red-400 text-white font-semibold text-xs rounded-full grid place-content-center">
      {cart.length}
    </span>
  );
};

export default ShoppingCart;
