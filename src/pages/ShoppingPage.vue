<template>
  <div class="header_container">
    <MenuBar />
    <div class="search_holder">
      <div class="searchBar">
        <img :src="searchIcon" alt="searchIcon" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a product"
          class="search"
        />
      </div>
      <button class="filter"><img :src="filter" alt="filter" /></button>
    </div>
  </div>
  <ul>
    <li>All</li>
    <li>Unisex</li>
    <li>Tempered</li>
    <li>Journey</li>
    <li>Black Checkers</li>
  </ul>

  <CartCatalogue />
</template>

<script>
import CartCatalogue from "@/components/CartCatalogue.vue";
import filter from "@/assets/filterICon.svg";
import searchIcon from "@/assets/searchIconGray.svg";
import MenuBar from "@/components/MenuBar.vue";
//
export default {
  data() {
    return {
      CartCatalogue,
      filter,
      searchIcon,
    };
  },
  components: {
    MenuBar,
  },
};
</script>
<style scoped>
h1 {
  font-weight: 400;
  font-size: px;
}

.searchBar {
  border: 1px solid #eaeaea;
  padding: 13px;
  border-radius: 8px;
  display: flex;
  width: 80%;
  align-items: center;
}
.searchBar > img {
  margin-right: 16px;
}
input::placeholder {
  color: gray;
}
.filter {
  background-color: black;
  border-radius: 8px;
  padding: 12px;
  width: 44px;
}
.header_container {
  display: flex;
  flex-direction: column;
  margin: 20px 24px;
}
ul {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 100%;
  margin: 24px 0;
}
li {
  list-style: none;
  padding: 6px 24px;
  text-wrap: nowrap;
}
li:hover {
  border: 1px solid purple;
  border-radius: 8px;
  color: purple;
}
.search_holder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
