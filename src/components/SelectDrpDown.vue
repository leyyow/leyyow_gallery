<script>
import arrowDown from "@/assets/arrowDown.svg";
import arrowUp from "@/assets/arrowUp.svg";

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Select an option",
    },
  },
  data() {
    return {
      selectedOption: this.value,
      isOpen: false,
      arrowUp,
      arrowDown,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option.value;
      this.isOpen = false;
      this.$emit("input", this.selectedOption); 
    },
  },
  watch: {
    value(newValue) {
      this.selectedOption = newValue;
    },
  },
};
</script>
<template>
  <div class="custom-select w-100 text-14">
    <div class="select-box rounded-lg py-5 px-4 d-flex justify-space-between my-4 mr-3 " @click="toggleDropdown">
      <span class="selected">{{
        selectedOption ? selectedOption : placeholder
      }}</span>
     <img :src="isOpen ? arrowUp : arrowDown" class="arrow" alt="Arrow Icon" />
    </div>
  <v-fade-transition>
      <ul v-if="isOpen" class="options position-absolute w-50 rounded bg-white pa-0 ma-0 overflow-scroll  ">
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        :class="{ selected: option.value === selectedOption }"
      >
        {{ option.text }}
      </li>
    </ul>
  </v-fade-transition>
  </div>
</template>

<style scoped>
.custom-select {
  width: 200px;
}

.select-box {
  border: 1px solid lightgray;
  color: #9CA3AF;
  cursor: pointer;
}

.arrow {
  font-size: 10px;
}

.options {
  list-style-type: none;
  /* border: 1px solid #EAEAEA; */
  /* max-height: 200px; */
  height: 20%;

}
ul{
  z-index: 20;
  border: 1px solid lightgray;
}

.options li {
  padding: 10px;
  cursor: pointer;
}

.options li:hover {
  background-color: #f0f0f0;
}

.options .selected {
  background-color: #e0e0e0;
}
</style>
