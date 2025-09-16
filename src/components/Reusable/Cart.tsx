import { useEffect, useState } from "react";
import { CartItem, AnimateContent } from "./CartItem";
import { getCart, removeFromCart, clearCart } from "src/utils/cartUtils";
import moment from "moment";
import "moment/locale/id";

type CartItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    stok: number;
};

function orderProducts(cart: CartItemType[], total: number) {
    const waNumber = "62895607951930";
    moment.locale("id");
    const uniqueId = Date.now();
    const now = moment().format("DDMMYYYY");
    const orderId = "ORD-" + now + `-${uniqueId}`;

    let message = "Halo! Saya ingin memesan!\n\n";
    message += "Tolong isi data berikut (jika kosong, maka kami tidak bisa proses):\n\n";
    message += "Nama: \n";
    message += "No. Telp: \n";
    message += "Alamat: \n\n";
    message += `Order ID: ${orderId}\n\n`;

    cart.forEach((item: CartItemType) => {
        message += `• ${item.name}: Rp ${item.price.toLocaleString("id-ID")} (x${item.quantity}) = Rp ${(item.price * item.quantity).toLocaleString("id-ID")}\n`;
    });

    message += `\nTotal: Rp ${total.toLocaleString("id-ID")},00`;

    let url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

export default function Cart() {
    const [cart, setCart] = useState<CartItemType[]>([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const handleRemove = (id: string) => {
        removeFromCart(id);   
        setCart(getCart());   
    };

    const handleClearAll = (): void => {
        clearCart();
        setCart(getCart());   
    };

    const handleQuantityChange = (id: string, newQty: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: newQty } : item
            )
        );
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    AnimateContent();

    return (
        <div id="cartItems" className="flex flex-col gap-5">   
            <button className="self-end py-1 px-1 justify-end items-end xl:w-[10%] w-[50%] rounded-2xl font-bold lg:text-lg text-sm border border-white hover:bg-[#e0aa20] hover:text-black cursor-pointer disabled:bg-[#161616] disabled:border-none disabled:text-[#161616] disabled:cursor-default transition-colors animate-fade duration-300 mt-10" onClick={() => handleClearAll()} disabled={cart.length === 0}>
                Clear All
            </button> 
            {cart.length > 0 ? cart.map((item) => (
                <CartItem key={item.id} item={item} onRemove={handleRemove} onQuantityChange={handleQuantityChange}/>
            )): <p className="text-gray-200 lg:text-xl text-lg flex justify-center items-center text-center">No Cart Items Found. <a href="/products" className="text-[#e0aa20] underline ml-3"><span>Browse Here!</span></a></p>}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e0aa20] to-transparent"></div>
            <div id="cartTotalPrice" className="text-right text-[#e0aa20] lg:text-2xl text-xl font-bold fade-section opacity-0">
                <span className="font-normal mr-4">Grand Total:</span>Rp {total.toLocaleString("id-ID")}
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e0aa20] to-transparent"></div>
            <button className="self-center py-2 px-2 justify-center items-center xl:w-[15%] w-[50%] rounded-2xl font-bold lg:text-lg text-sm bg-[#e0aa20] text-black cursor-pointer hover:bg-white disabled:bg-[#161616] disabled:text-[#161616] disabled:cursor-default transition-colors animate-fade duration-300 mt-10" onClick={() => orderProducts(cart, total)} disabled={cart.length === 0}>
                Order Products
            </button>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e0aa20] to-transparent mt-30 mb-10"></div>
        </div>
    );
}
