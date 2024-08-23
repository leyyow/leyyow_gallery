<script>
export default {
  name: "PurpleModal",
  props: {
    header_text: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
    cart: {
      type: Boolean,
      required: true,
      default: true,
    },
    confirmation: {
      type: Boolean,
      required: true,
      default: true,
    },
    checkout: {
      type: Boolean,
      required: true,
      default: false,
    },
    shipping: {
      type: Boolean,
      required: false,
      default: false,
    },
    total: {
      type: Boolean,
      required: false,
      default: false,
    },
    shopping: {
      type: Boolean,
      required: false,
      default: false,
    },
    linkPage: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },
};
</script>
<template>
  <div
    class="v-content rounded-t-xl text-white position-relative bottom-0 w-100 ma-0 mt-5 pa-4 overflow-y-scroll"
  >
    <div v-if="checkout">
      <h1 class="text-20 w-66 font-weight-medium mt-8">
        How do you want your order delivered?
      </h1>
      <p class="text-subtitle my-4 text-16">Select a shipping method</p>
      <div class="d-flex align-baseline my-4">
        <input type="radio" name="delivery" id="" class="mx-3" />
        <div class="mb-7">
          <p class="font-weight-bold text-16">Home delivery</p>
          <p class="text-16">
            Delivered between Wednesday 23 Jun and Friday 25 Jun for ₦ 2,400
          </p>
        </div>
      </div>
      <div class="d-flex align-baseline mb-7">
        <input type="radio" name="delivery" id="" class="mx-3" />
        <div>
          <p class="font-weight-bold text-16">Pickup</p>
          <p class="text-16">
            Ready for pickup between Wednesday 23 Jun to Friday 25 Jun with
            cheaper shipping fees
          </p>
        </div>
      </div>
      <div class="d-flex flex-column my-4">
        <button class="checkout pa-3 rounded-lg my-4 mt-1 text-16">
          <a style="text-decoration: none" href="{{ linkPage }}">
            Proceed to checkout
          </a>
        </button>
      </div>
    </div>

    <div v-if="cart">
      <div class="first-div">
        <div class="d-flex pb-4 justify-space-between my-4">
          <p class="font-weight-regular text-16">Subtotal (2 items)</p>
          <p class="text-subtitle font-weight-bold text-16">N11,000</p>
        </div>
        <div v-if="shipping" class="d-flex pb-4 justify-space-between my-4">
          <p class="font-weight-regular">Shipping</p>
          <p class="text-subtitle font-weight-bold">N2,000</p>
        </div>
      </div>
      <div v-if="total" class="d-flex justify-space-between pt-4">
        <p class="font-weight-regular">Total</p>
        <p class="text-subtitle font-weight-bold">N 13,000</p>
      </div>
      <div class="d-flex flex-column my-3" v-if="shopping">
        <button class="pa-3 text-16 rounded-lg mt-5">
          <a style="color: white; text-decoration: none" href="/CartPage">
            Continue Shopping</a
          >
        </button>
      </div>
      <div class="d-flex flex-column my-4">
        <button class="checkout pa-3 rounded-lg my-4 mt-1 text-16">
          <a style="text-decoration: none" href="{{ linkPage }}">
            Proceed to checkout
          </a>
        </button>
      </div>
    </div>
    <div v-if="confirmation">
      <div class="first-div">
        <div class="d-flex pb-4 justify-space-between my-4">
          <p class="font-weight-regular text-16">Subtotal (2 items)</p>
          <p class="text-subtitle font-weight-bold text-16">N11,000</p>
        </div>
        <div v-if="shipping" class="d-flex pb-4 justify-space-between my-4">
          <p class="font-weight-regular">Shipping</p>
          <p class="text-subtitle font-weight-bold">N2,000</p>
        </div>
      </div>
      <div v-if="total" class="d-flex justify-space-between pt-4">
        <p class="font-weight-regular">Total</p>
        <p class="text-subtitle font-weight-bold">N 13,000</p>
      </div>
      <div class="d-flex flex-column my-3" v-if="shopping">
        <button class="pa-3 text-16 rounded-lg mt-5">
          <a style="color: white; text-decoration: none" href="/CustomerInfo">
            Continue Shopping</a
          >
        </button>
      </div>
      <div class="d-flex flex-column my-4">
        <button class="checkout pa-3 rounded-lg my-4 mt-1 text-16">
          <a style="text-decoration: none" href="{{ linkPage }}">
            Proceed to checkout
          </a>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.v-content {
  background: linear-gradient(to right, #6d40ee, #943fed);
  width: 100%;
  z-index: 0;
}
.first-div {
  border-bottom: white dashed 2px;
}
button {
  border: white 1px solid;
}
.checkout {
  background: white;
  color: #814cef;
}
</style>
