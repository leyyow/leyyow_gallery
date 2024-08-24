<template>
  <div class="d-flex justify-space-between header pt-3 mb-6 w-100">
    <h1 @click="goToHome">Logo</h1>
    <button @click="toggleMenu" class="menu-button">
      <img :src="menu" alt="menu icon" />
    </button>
    <div v-if="menuOpen" class="menu-overlay" @click="toggleMenu"></div>
    <div :class="['menu', { open: menuOpen }]">
      <button class="close-button" @click="toggleMenu">
        <img :src="cancelWhite" alt="cancelWhite" />
      </button>
      <nav class="menu-items">
        <ul class=" mb-10 mt-13">
          <li
            v-for="item in menuItems"
            :key="item.name"
            class="text-24 font-weight-medium"
          >
            <a :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
        <div class="text-right text-16 text-white">
          <p class="mb-3">Return Policy</p>
          <p class=" ">FAQ</p>
        </div>
      </nav>
      <div class="social-icons mb-10">
        <a v-for="icon in socialIcons" :key="icon.platform" :href="icon.link">
          <i :class="icon.iconClass"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "@/assets/menu.svg";
import cancelWhite from "@/assets/cancelWhite.svg";
export default {
  // props: {
  //   menuItems: {
  //     type: Array,
  //     required: true,
  //   },
  //   socialIcons: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data() {
    return {
      menu,
      cancelWhite,
      menuOpen: false,
      menuItems: [
        { name: "Home", link: "#" },
        { name: "About us", link: "#" },
        { name: "Testimonial", link: "#" },
        { name: "Shop", link: "#" },
      ],
      socialIcons: [
        { platform: "Instagram", link: "#", iconClass: "fab fa-instagram" },
        { platform: "Twitter", link: "#", iconClass: "fab fa-twitter" },
        { platform: "Facebook", link: "#", iconClass: "fab fa-facebook-f" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    goToHome() {
      this.$router.push({ name: "/" });
    },
  },
};
</script>

<style scoped>
.menu-button {
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  right: 48px;
  padding-right: 24px;
  left: 20px;
  font-size: 24px;
  z-index: 1000;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.menu {
  position: fixed;
  top: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: -100%;
  height: 55%;
  width: 60%;
  background-color: #4f35c6;
  z-index: 1001;
  transition: right 0.3s ease;
  padding: 20px;
  border-radius: 1600px 0% 0% 1600px;
}

.menu.open {
  right: 0;
}

.close-button {
  position: relative;
  top: 22px;
  right: 0px;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.menu-items ul {
  list-style: none;
  padding: 0;
  text-align: right;
}

.menu-items li {
  margin-bottom: 10px;
}

.menu-items a {
  color: white;
  text-decoration: none;
  font-size: 24px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 12px;
}

.social-icons a {
  color: white;
  /* font-size: 24px; */
  width: 15px;
}
</style>
