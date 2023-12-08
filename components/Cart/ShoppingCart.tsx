"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import useStore, { CartItem } from "../store/store";

const ShoppingCart = () => {
  const cart = useStore((state) => state.cart);
  return (
    <Link
      href={"/cart"}
      className="p-2 rounded-md hover:bg-cyan-600 text-slate-700 hover:text-white relative transition duration-200 ease-in-out"
    >
      <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
      <Label items={cart} />
    </Link>
  );
};

type LabelProps = {
    items: CartItem[];
}

const Label: React.FC<LabelProps> = ({ items }) => {
  if (items.length === 0) return <></>;

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <span className="absolute top-0 right-0 w-4 h-4 bg-red-400 text-white font-semibold text-xs rounded-full grid place-content-center">
      {totalQuantity}
    </span>
  );
};

export default ShoppingCart;
