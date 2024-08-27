<script>
import profileImg from "@/assets/profileIcon.svg";
import emailImg from "@/assets/envelopeIcon.svg";
import phoneImg from "@/assets/phoneIcon.svg";
import location from "@/assets/locationIcon.svg";
import SelectOption from "@/components/SelectDrpDown.vue";

export default {
  components: {
    SelectOption,
  },
  data() {
    return {
      profileImg,
      emailImg,
      phoneImg,
      name: "",
      email: "",
      countryCode: "",
      phone: "",
      location,
      errorMessage: false,
      isExpanded: false,
      state: null,
      states: [
        { text: "Abia", value: "abia" },
        { text: "Adamawa", value: "adamawa" },
        { text: "Akwa Ibom", value: "akwa-ibom" },
        { text: "Anambra", value: "anambra" },
        { text: "Bauchi", value: "bauchi" },
        { text: "Bayelsa", value: "bayelsa" },
        { text: "Benue", value: "benue" },
        { text: "Borno", value: "borno" },
        { text: "Cross River", value: "cross-river" },
        { text: "Delta", value: "delta" },
        { text: "Ebonyi", value: "ebonyi" },
        { text: "Edo", value: "edo" },
        { text: "Ekiti", value: "ekiti" },
        { text: "Enugu", value: "enugu" },
        { text: "Gombe", value: "gombe" },
        { text: "Imo", value: "imo" },
        { text: "Jigawa", value: "jigawa" },
        { text: "Kaduna", value: "kaduna" },
        { text: "Kano", value: "kano" },
        { text: "Katsina", value: "katsina" },
        { text: "Kebbi", value: "kebbi" },
        { text: "Kogi", value: "kogi" },
        { text: "Kwara", value: "kwara" },
        { text: "Lagos", value: "lagos" },
        { text: "Nasarawa", value: "nasarawa" },
        { text: "Niger", value: "niger" },
        { text: "Ogun", value: "ogun" },
        { text: "Ondo", value: "ondo" },
        { text: "Osun", value: "osun" },
        { text: "Oyo", value: "oyo" },
        { text: "Plateau", value: "plateau" },
        { text: "Rivers", value: "rivers" },
        { text: "Sokoto", value: "sokoto" },
        { text: "Taraba", value: "taraba" },
        { text: "Yobe", value: "yobe" },
        { text: "Zamfara", value: "zamfara" },
      ],
    };
  },
  computed: {
    heightClass() {
      return this.isExpanded ? "h-40vh" : "h-20vh";
    },
    buttonText() {
      return this.isExpanded ? "Show Less" : "Show More";
    },
    nameError() {
      if (this.name.length === "") {
        return "This field is required";
      }
      return null;
    },
    isPhoneValid() {
      const phonePattern = /^\d{11}$/;
      return phonePattern.test(this.phone);
    },

    isEmailValid() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },

    isFilled() {
      return (
        this.name !== "" &&
        this.email !== "" &&
        this.phone !== "" &&
        this.location !== ""
      );
    },
    isFormValid() {
      return this.isFilled && this.isEmailValid;
    },
  },
  methods: {
    toggleHeight() {
      this.isExpanded = !this.isExpanded;
    },
    handleSubmit(e) {
      if (!this.isFormValid) {
        e.preventDefault();
        this.errorMessage = true;
        return;
      }
      this.errorMessage = false;
      this.$router.push("/OrderDetails");
    },
  },
};
</script>

<template>
  <div class="d-flex home pa-4 flex-column overflow-x-hidden">
    <div class="first ma-0 position-relative d-flex flex-column">
      <h1 class="text-32">Kindly input your information</h1>
      <form
        class="d-flex flex-column position-relative mb-10"
        @submit.prevent="submitForm"
      >
        <label class="text-grey-darken-2 mt-4 text-16" for="">Full name</label>
        <div
          class="d-flex align-center mt-4 mb-2 rounded-lg py-5 px-4 input_div"
        >
          <img :src="profileImg" alt="profile gray Icon" />
          <input
            type="text"
            class="px-2"
            v-model="name"
            :class="{ error: errorMessage && !name }"
          />
        </div>
        <div v-if="errorMessage">
          <span v-if="!name" class="text-red text-16"
            >This field is required</span
          >
        </div>

        <label class="text-grey-darken-2 mt-4 text-16" for="">Email</label>
        <div
          class="d-flex align-center mt-4 mb-2 rounded-lg py-5 px-4 input_div"
        >
          <img :src="emailImg" alt="email gray Icon" />
          <input
            type="email"
            class="px-2"
            v-model="email"
            :class="{ error: errorMessage && !isEmailValid }"
          />
        </div>
        <div v-if="errorMessage">
          <span v-if="!isEmailValid" class="text-red text-16"
            >Invalid Email Format</span
          >
        </div>

        <label class="text-grey-darken-2 text-16 mt-4" for=""
          >Phone number</label
        >
        <div
          class="d-flex align-center mt-4 mb-2 rounded-lg py-5 px-4 input_div"
        >
          <img :src="phoneImg" alt="phone gray Icon" />
          <input
            type="tel"
            class="px-2"
            v-model="phone"
            :class="{ error: errorMessage && !isPhoneValid }"
          />
        </div>
        <div v-if="errorMessage">
          <span v-if="!isPhoneValid" class="text-red text-16"
            >Invalid Phone number Format</span
          >
        </div>

        <label class="text-black my-4 text-18 font-weight-bold" for=""
          >Delivery Address</label
        >
        <div
          class="d-flex align-center mt-4 mb-2 rounded-lg py-5 px-4 input_div"
        >
          <img :src="location" alt="location gray Icon" />
          <input
            type="text"
            class="px-2"
            v-model="address"
            :class="{ error: errorMessage && !address }"
            placeholder="Address"
          />
        </div>
        <div v-if="errorMessage">
          <span v-if="!address" class="text-red text-16"
            >This field is required</span
          >
        </div>

        <div
          class="d-flex align-center mt-4 mb-2 rounded-lg py-5 px-4 input_div"
        >
          <img :src="location" alt="location gray Icon" />
          <input
            type="text"
            class="px-2"
            v-model="city"
            :class="{ error: errorMessage && !city }"
            placeholder="City"
          />
        </div>
        <div v-if="errorMessage">
          <span v-if="!city" class="text-red text-16"
            >This field is required</span
          >
        </div>
        <div class="w-100 d-flex justify-space-between mb-2 mb-10">
          <div class="w-50">
            <label for="" class="text-164">State</label>
            <SelectOption
              v-model="state"
              placeholder="E.g Abia"
              :options="states"
            />
            <div v-if="errorMessage">
          <span v-if="!state" class="text-red text-16"
            >This field is required</span
          >
        </div>
          </div>
          
          <div class="w-50">
            <label for="" class="text-16">Area</label>
            <div
              class="d-flex align-center py-5 px-4 width my-4 rounded-lg input_div"
            >
              <input type="text" class="mx-2" v-model="area" placeholder="Etiosa, Ikeja"/>
           
            </div>
               <div v-if="errorMessage">
          <span v-if="!area" class="text-red text-16"
            >This field is required</span
          >
        </div>
          </div>
          
        </div>
      </form>
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

<style scoped>
.second{
  position: relative;
}
.first {
  z-index: 10;
  position: relative;
}
.home {
  overflow-y: auto;
  width: 100%;
}
.width {
  width: 95%;
}
::placeholder{
  color: #9CA3AF;
}
.input_div {
  border: 1px solid lightgray;
  transition: border-color 0.3s ease;
}
.input_div img {
  width: 35px;
  height: 25px;
}
.input_div input:focus {
  outline: none;
}
.input_div:has(input:focus) {
  border-color: #7440ee;
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
