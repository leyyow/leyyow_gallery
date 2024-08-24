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
<template>
  <div class="header_container">
    <MenuBar />
    <div class="d-flex justify-space-between align-center">
      <div class="searchBar d-flex align-center justify-space-between w-80 px-4">
        <img :src="searchIcon" alt="searchIcon" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a product"
          class="search pa-3 d-flex w-80 align-center"
        />
      </div>
      <button class="filter w-15"><img :src="filter" alt="filter" /></button>
    </div>
  </div>
  <ul class="px-4">
    <li>All</li>
    <li>Unisex</li>
    <li>Tempered</li>
    <li>Journey</li>
    <li>Black Checkers</li>
  </ul>

  <CartCatalogue />
</template>


<style scoped>
h1 {
  font-weight: 400;
  font-size: px;
}

.searchBar {
  border: 1px solid #eaeaea;
  border-radius: 8px;
} 
.searchBar > img {
  margin-right: 16px;
}
input::placeholder {
  color: #b5b5b5;
}
.filter {
  background-color: black;
  border-radius: 8px;
  padding: 12px;

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
  color: #b5b5b5;
}
li:hover {
  box-shadow: 0 0 0 1px #4f35c6;
  border-radius: 8px;
  color: #4f35c6;
}

</style>
