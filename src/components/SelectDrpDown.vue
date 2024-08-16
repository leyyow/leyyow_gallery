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
  <div class="custom-select w-100">
    <div class="select-box rounded " @click="toggleDropdown">
      <span class="selected">{{
        selectedOption ? selectedOption : placeholder
      }}</span>
     <img :src="isOpen ? arrowUp : arrowDown" class="arrow" alt="Arrow Icon" />
    </div>
  <v-fade-transition>
      <ul v-if="isOpen" class="options position-absolute w-100 rounded bg-white pa-0 ma-0">
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
  position: relative;
  width: 200px;
}

.select-box {
  border: 1px solid #EAEAEA;
  color: #9CA3AF;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.arrow {
  font-size: 10px;
}

.options {
  list-style-type: none;
  
  border: 1px solid #EAEAEA;
  max-height: 200px;

}
ul{
  z-index: 20;
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
