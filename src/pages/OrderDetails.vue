<script>
import blueShoe from "@/assets/blueShoe.svg";
import brownShoe from "@/assets/brownShoe.svg";
import darkerPhoneIcon from "@/assets/darkerPhoneIcon.svg";
import darkerProfileIcon from "@/assets/darkerProfileIcon.svg";
import darkerEnvelopeIcon from "@/assets/darkerEnvelopeIcon.svg";
import darkerLocationIcon from "@/assets/darkerLocationIcon.svg";
import PurpleModal from "@/components/PurpleModal.vue";

export default {
  components: {
    PurpleModal,
  },
  data() {
    return {
      blueShoe,
      brownShoe,
      darkerPhoneIcon,
      darkerEnvelopeIcon,
      darkerLocationIcon,
      darkerProfileIcon,
    };
  },
};
</script>
<template>
  <div class="pa-6">
    <h1 class="my-4 text-22">Confirmation order</h1>

    <div class="card rounded-xl pa-4">
      <h3 class="text-18">Product (3) items</h3>
      <div class="card_header">
        <img src="" alt="" class="edit" />
      </div>
      <div class="card_info d-flex justify-lg-space-between my-4">
        <div class="dets d-flex">
          <div class="shoe_img d-flex align-center justify-center rounded-lg">
            <img :src="blueShoe" alt="shoe" class="img" />
          </div>
          <div class="d-flex flex-column w-65">
            <p class="w-90 mr-2 text-16">Unisex (For the men, for the women)</p>
            <p class="my-2 text-grey text-14">Blue, 40</p>
          </div>
        </div>
        <h3 class="price font-weight-bold text-16">N5,000</h3>
      </div>
      <div class="card_info d-flex justify-lg-space-between my-4">
        <div class="dets d-flex">
          <div class="shoe_img d-flex align-center justify-center rounded-lg">
            <img :src="brownShoe" alt="shoe" class="img" />
          </div>
          <div class="d-flex flex-column w-65">
            <p class="w-90 mr-2 text-16">Unisex (For the men, for the women)</p>
            <p class="my-2 text-grey text-14">Brown, 42</p>
          </div>
        </div>
        <h3 class="price font-weight-bold text-16">N5,000</h3>
      </div>
    </div>
    <div class="ship-card my-4 pa-4 rounded-xl">
      <h1 class="font-weight-bold text-18">Shipping information</h1>
      <div class="d-flex my-4">
        <img class="icon" :src="darkerProfileIcon" alt="profile" />
        <p class="text-16 user-dets">Abdulraheem Abdulsobur</p>
      </div>
      <div class="d-flex my-4">
        <img class="icon" :src="darkerEnvelopeIcon" alt="envelope" />
        <p class="text-16 user-dets">abdul002temitope@gmail.com</p>
      </div>
      <div class="d-flex my-4">
        <img class="icon" :src="darkerPhoneIcon" alt="teledarkerPhoneIcon" />
        <p class="text-16 user-dets">+234 8082286122</p>
      </div>
      <div class="d-flex my-4">
        <img class="icon" :src="darkerLocationIcon" alt="location" />
        <p class="text-16 user-dets">Araromi street noforija epe, Lagos</p>
      </div>
    </div>
  </div>
  <div class="second">
    <PurpleModal
      :cart="true"
      :shipping="true"
      :total="true"
      :checkout="false"
      :shopping="false"
      :confirmation="false"
    >
      <template #custom-button>
        <div class="d-flex flex-column my-4">
          <button
            class="pa-3 rounded-lg my-4 mt-1 text-16 button-color"
            @click="handleSubmit"
          >
            Proceed to Checkout
          </button>
        </div>
      </template>
    </PurpleModal>
  </div>
</template>
<style>
.second{
  position: relative;
}
.w-65 {
  width: 65%;
}
.shoe_img {
  background-color: #f9eeeb;
}
.img {
  width: 75px;
  height: 76px;
  object-fit: contain;
}
.card {
  background: #f9fafb;
}

p {
  margin-left: 14px;
}
.ship-card {
  background: #f9fafb;
}
.icon {
  width: 14px;
  height: 16px;
}
.user-dets {
  color: #4b5563;
}
</style>
