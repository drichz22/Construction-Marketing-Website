import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    stok: number;
  };
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, newQty: number) => void;
}

export function AnimateContent() {
  useEffect(() => {
      const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-right");
              entry.target.classList.remove("opacity-0");
          }
          });
      },
      { threshold: 0.2 }
      );

      const elements = document.querySelectorAll(".fade-section");
      elements.forEach((el) => observer.observe(el));

      return () => {
          elements.forEach((el) => observer.unobserve(el));
      };
  }, []);
}

export function CartItem({ item, onRemove, onQuantityChange }: CartItemProps) {
  AnimateContent();

  // Quantity increase/decrease logic
  const [qty, setQty] = useState(item.quantity);

  useEffect(() => {
    onQuantityChange(item.id, qty);
  }, [qty]);

  const quantityLogic = {
    increase: () => {
      if (!item.stok || qty < item.stok) {
        setQty((prev) => prev + 1);
      } else if (qty >= item.stok) {
        setQty(item.stok);
      }
    },
    decrease: () => {
      if (qty > 1) {
        setQty((prev) => prev - 1);
      }
    },
  };

  // Card Content
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4 p-8 border border-white rounded-lg shadow-md gap-4 relative fade-section opacity-0">
      <div className="flex-1 text-center md:text-left">
        <h4 className="text-[#ffcc00] lg:text-sm text-xs"><span className="mr-2">Stok:</span>{item.stok}</h4>
        <h3 className="text-white font-semibold mb-1 lg:text-xl text-lg">{item.name}</h3>
        <p className="text-gray-300 lg:text-lg text-sm">
          Rp {item.price.toLocaleString("id-ID")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-xl font-bold hover:bg-gray-600 cursor-pointer" onClick={quantityLogic.decrease} disabled={qty <= 1}>
            -
          </button>

          <input type="number" value={qty} min="1" readOnly className="w-12 text-center text-lg font-semibold border border-gray-300 rounded-md select-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>

          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-xl font-bold hover:bg-gray-600 cursor-pointer" onClick={quantityLogic.increase} disabled={item.stok ? qty >= item.stok : false}>
            +
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="totalPrice text-white lg:text-xl text-lg font-bold">
            Rp {(item.price * qty).toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      <button id="delete_btn" className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors duration-300 cursor-pointer" onClick={() => onRemove(item.id)}>
        <FontAwesomeIcon icon={faXmark} className="lg:text-lg text-sm" />
      </button>
    </div>
  );
}
