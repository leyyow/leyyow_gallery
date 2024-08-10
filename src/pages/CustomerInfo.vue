<script>
import profile from "@/assets/profileIcon.svg";
import email from "@/assets/envelopeIcon.svg";
import phone from "@/assets/phoneIcon.svg";
import location from "@/assets/locationIcon.svg";
export default {
  data() {
    return {
      profile,
      email,
      phone,
      location,
      isExpanded: false,
    };
  },
  computed: {
    heightClass() {
      return this.isExpanded ? "h-40vh" : "h-20vh";
    },
    buttonText() {
      return this.isExpanded ? "Show Less" : "Show More";
    },
  },
  methods: {
    toggleHeight() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>
<template>
  <div class="d-flex home pa-4 flex-column overflow-x-hidden">
    <div class="first ma-0 position-relative d-flex flex-column">
    <h1>Kindly input your information</h1>
    <form class="d-flex flex-column position-relative mb-10">
      <label class="text-grey-darken-2 mt-4" for="">Full name</label>
      <div class="d-flex align-baseline border my-4 rounded-lg py-4 px-5">
        <img :src="profile" alt="profile gray Icon" />
        <input type="text" class="px-2" />
      </div>
      <label class="text-grey-darken-2 mt-4" for=""> Email</label>
      <div class="d-flex align-baseline border my-4 rounded-lg py-4 px-5">
        <img :src="email" alt="email gray Icon" />
        <input type="email" class="px-2" />
      </div>
      <label class="text-grey-darken-2" for="">Phone number</label>
      <div class="d-flex align-baseline border my-4 rounded-lg py-4 px-5">
        <img :src="phone" alt="phone gray Icon" />
        <input type="tel" class="px-2" />
      </div>

      <label class="text-grey-darken-1 my-4" for="">Delivery Address</label>

      <div class="w-100 d-flex justify-space-between mb-2 mb-10">
        <div class="w-50">
          <label for="">Location</label>

          <div
            class="d-flex align-baseline py-3 px-5 width border my-4 rounded-lg"
          >
            <img :src="location" alt="location_pointer" />
            <input type="text" />
          </div>
        </div>
        <div class="w-50">
          <label for="">Area</label>
          <div
            class="d-flex align-baseline py-3 px-5 width border my-4 rounded-lg"
          >
            <img :src="location" alt="location_pointer" />
            <input type="text" placeholder="" />
          </div>
        </div>
      </div>
    </form>
   
  </div>

  </div>
    <div class="second">
     <PurpleModal
        :cart="true"
        :checkout="false"
        :shipping="true"
        :total="true"
        :shopping="false"
      />
  </div>
</template>
<style scoped>

.first {
  z-index: 10;
  position: relative;
}
.home{
  overflow-y: auto;
  width: 100%;
  
}
.width {
  width: 95%;
}
img {
  width: 25px;
  height: 25px;
}
.h-40vh {
  height: 40vh;
}
.h-20vh {
  height: 20vh;
}
</style>
