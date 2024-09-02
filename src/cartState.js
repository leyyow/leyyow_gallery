// Assuming you have `cartState.js`
import { reactive, computed } from "vue";

export const cartState = reactive({
  cart: [],
  products: {
    whiteShoe: "@/assets/newShoe.png",
    brownShoe: "@/assets/brownShoe.svg",
    blueShoe: "@/assets/blueShoe.svg",
    blackShoe: "@/assets/blackShoe.svg",
  },
  sizes: [
    { text: "Small", value: "Small" },
    { text: "Medium", value: "Medium" },
    { text: "Large", value: "Large" },
    { text: "XLarge", value: "XLarge" },
  ],
  colors: [
    { text: "Red", value: "Red" },
    { text: "Blue", value: "Blue" },
    { text: "Yellow", value: "Yellow" },
    { text: "Black", value: "Black" },
  ],
  selectedItem: null,
  selectedColor: null,
  selectedSize: null,
});

export const addToCart = (product, selectedColor, selectedSize) => {
  const item = cartState.cart.find(
    (item) =>
      item.id === product.id &&
      item.color === selectedColor &&
      item.size === selectedSize
  );

  if (item) {
    item.quantity++;
  } else {
    cartState.cart.push({
      ...product,
      quantity: 1,
      color: selectedColor,
      size: selectedSize,
    });
  }
};

export const cartItemCount = computed(() => {
  return cartState.cart.reduce((total, item) => total + item.quantity, 0);
});
