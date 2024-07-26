<script setup>
import blueShoe from "@/assets/blueShoe.svg";
import blackShoe from "@/assets/blackShoe.svg";
import brownShoe from "@/assets/brownShoe.svg";
</script>
<template>
  <div class="container">
    <div class="hero_img">
      <v-img :src="blueShoe"></v-img>
    </div>
    <div class="header_container">
      <h2 style="width: 50%">Unisex (for the men, women)</h2>
      <p>N5000</p>
    </div>

    <div class="select_container">
      <div>
        <h4>Colors</h4>
        <v-select
          label="Color"
          segmented
          overflow
          editable
          target="#target"
        ></v-select>
      </div>
      <div>
        <h4>Colors</h4>
        <v-select
          label="Size"
          :items="items"
          v-model="value"
          autocomplete
        ></v-select>
      </div>
    </div>
    <div class="second_container">
      <v-btn size="x-large"> Add to cart </v-btn>
      <div>
        <h3>Similar products</h3>
        <v-row>
          <v-col class="blue">
            <v-img :src="blueShoe"></v-img>
          </v-col>
          <v-col class="black">
            <v-img :src="blackShoe"></v-img>
          </v-col>
          <v-col class="brown">
            <v-img :src="brownShoe"></v-img>
          </v-col>
        </v-row>
    </div>
    </div>
  </div>
</template>
<style scoped>
.header_container,
.select_container {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.select_container > div {
  width: 45%;
}
p {
  font-size: 1.5rem;
}
.hero_img {
  background-color: #f9eeeb;
  border-radius: 8px;
}
.container {
  margin: 24px;
}
.second_container {
  width: 100%;
}
.second_container > div{
    display: flex;
    flex-direction: column;
}
.v-row{
    margin: 0;
    align-items: center;
}
.second_container > button {
  margin: 32px 0;
  width: 100%;
}
.second_container >div> h3{
    margin: 16px 0;
}
.blue,
.black,
.brown {
  border-radius: 8px;
  padding: 0;
  margin: 3px;
}
.blue {
  background: #eaf1ff;
}
.black {
  background-color: #f9eeeb;
}
.brown{
    background-color: #EBE7B8;
}
</style>
