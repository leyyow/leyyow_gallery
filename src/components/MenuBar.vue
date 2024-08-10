<template>
  <div class="d-flex justify-end header">
    <button @click="toggleMenu" class="menu-button">☰</button>
    <div v-if="menuOpen" class="menu-overlay" @click="toggleMenu"></div>
    <div :class="['menu', { open: menuOpen }]">
      <button class="close-button" @click="toggleMenu">✕</button>
      <nav class="menu-items">
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <a :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
      <div class="social-icons">
        <a v-for="icon in socialIcons" :key="icon.platform" :href="icon.link">
          <i :class="icon.iconClass"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
    socialIcons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.menu-button {
  position: fixed;
  top: 20px;
  display: flex;
  justify-content: flex-end;
  right: 20px;
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
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  right: -100%;
  height: 100%;
  width: 80%;
  background-color: #4a5de8;
  z-index: 1001;
  transition: right 0.3s ease;
  padding: 20px;
}

.menu.open {
  right: 0;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.menu-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-items li {
  margin-bottom: 20px;
}

.menu-items a {
  color: white;
  text-decoration: none;
  font-size: 24px;
}

.social-icons {
  display: flex;
  gap: 15px;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.social-icons a {
  color: white;
  font-size: 24px;
}

</style>
