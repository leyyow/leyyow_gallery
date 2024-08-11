<script>
import blueShoe from "@/assets/blueShoe.svg";
import brownShoe from "@/assets/brownShoe.svg";
import phone from "@/assets/phoneIcon.svg";
import darkerProfileIcon from "@/assets/profileIcon.svg";
import envelopeIcon from "@/assets/envelopeIcon.svg";
import locationIcon from "@/assets/locationIcon.svg";
import PurpleModal from "@/components/PurpleModal.vue";


export default {
  components: {
   PurpleModal 
  },
  data() {
    return {
      blueShoe,
      brownShoe,
      phone,
      envelopeIcon,
      locationIcon,
      darkerProfileIcon
    };
  },
};
</script>
<template>
  <div class="pa-6">
    <h1 class="my-4 text-16">Confirmation order</h1>

    <div class="card rounded-xl pa-4">
      <h3 class="text-12">Product (3) items</h3>
      <div class="card_header">
        <img src="" alt="" class="edit" />
      </div>
      <div class="card_info d-flex justify-lg-space-between my-4">
        <div class="dets d-flex">
          <div class="shoe_img d-flex align-center justify-center rounded-lg">
            <img :src="blueShoe" alt="shoe" class="img" />
          </div>
          <div class="d-flex flex-column w-65">
            <p class="w-55 mr-2 text-12">Unisex (For the men, for the women)</p>
            <p class="my-2 text-grey text-10">Blue, 40</p>
          </div>
        </div>
        <h3 class="price font-weight-bold text-12 ">N5,000</h3>
      </div>
      <div class="card_info d-flex justify-lg-space-between my-4">
        <div class="dets d-flex">
          <div class="shoe_img d-flex align-center justify-center rounded-lg">
            <img :src="brownShoe" alt="shoe" class="img" />
          </div>
          <div class="d-flex flex-column w-65">
            <p class="w-55 mr-2 text-12">Unisex (For the men, for the women)</p>
            <p class="my-2 text-grey  text-10">Brown, 42</p>
          </div>
        </div>
        <h3 class="price font-weight-bold text-12">N5,000</h3>
      </div>
    </div>
    <div class="ship-card my-4 pa-4 rounded-xl">
      <h1 class="font-weight-bold text-12  " >Shipping information</h1>
      <div  class="d-flex my-4">
        <img :src="darkerProfileIcon" alt="profile">  <p class="text-12">Abdulraheem Abdulsobur</p>
      </div>
       <div class="d-flex my-4">
        <img :src="envelopeIcon" alt="envelope">  <p class="text-12">abdul002temitope@gmail.com</p>
      </div>
       <div class="d-flex my-4">
        <img :src="phone" alt="telephone">  <p class="text-12">+234 8082286122</p>
      </div>
       <div class="d-flex my-4">
        <img :src="locationIcon" alt="location">  <p class="text-12">Araromi street noforija epe, Lagos </p>
      </div>
    </div>
  </div>
   <div class="position-fixed bottom-0 w-100 ">
       <PurpleModal :cart="true" :checkout="false"/>
 </div>
</template>
<style>
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
.ship-card{
    background: #f9fafb;
   
}
</style>
