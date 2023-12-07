"use client";
import Image from "next/image";
import useStore from "../store/store";

const ShoppingList = () => {
  const cart = useStore((state) => state.cart);
  console.log("CART PAGE", cart);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const price = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <div className="p-12 h-5/6">
      <h1 className="font-bold text-2xl overflow-scroll mb-4">
        Your desired purchases:
      </h1>
      <div>
        {cart.length === 0 ? (
          <h2>Go and buy something then...</h2>
        ) : (
          <>
            {cart.map((product) => (
              <div className="flex mb-8">
                <Image
                  src={`https:${product.image}`}
                  width={300}
                  height={300}
                  alt={product.title}
                  className="rounded-md mr-4"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold">{product.title}</h3>
                  <h4>
                    {product.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "GBP",
                    })}
                  </h4>
                </div>
              </div>
            ))}
            <div className="mt-8 w-full border-t-2 border-red-400 mb-2">
              <h1 className="font-bold mt-8 mb-8">
                Total: <span className="font-normal">{price}</span>
              </h1>
              <button className="p-2 bg-cyan-300 rounded-lg w-1/4 hover:bg-cyan-400 text-white">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
