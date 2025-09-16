export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stok: number;
}

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function saveCart(cart: CartItem[]): void {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product: CartItem): void {
  let cart = getCart();

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  saveCart(cart);
  updateCartCount();
}

export function updateCartCount(): void {
  const cart = getCart();
  const count = cart.length;
  const cartCountEls = document.querySelectorAll<HTMLElement>(".cart-count");
  cartCountEls.forEach(el => {
    el.textContent = count.toString();
  });
}

export function clearCart(): void {
  saveCart([]);
  updateCartCount();
}

export function removeFromCart(id:string) {
  let cart = getCart();
  try {
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    updateCartCount();
  } catch (err) {
    alert("❌ Gagal menghapus data!");
  }
}
