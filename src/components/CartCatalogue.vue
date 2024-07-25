<template>
  <v-app>
    <v-container class="products">
      <v-row>
       
          <v-col class="card">
            <v-img class="img" :src="blackShoe"> </v-img>
          </v-col>
          <v-col class="card">
            <v-img class="img" :src="brownShoe"> </v-img>
          </v-col>
          <v-col class="card">
            <v-img class="img" :src="blueShoe"> </v-img>
          </v-col>
          <v-col class="card">
            <v-img class="img" :src="blackShoe"> </v-img>
          </v-col>
          <v-col class="card">
            <v-img class="img" :src="brownShoe"> </v-img>
          </v-col>
          <v-col class="card">
            <v-img class="img" :src="blueShoe"> </v-img>
          </v-col>
          <v-col class="card">
            <v-img class="img" :src="blackShoe"> </v-img>
          </v-col>
          <v-col class="card">
            <v-img class="img" :src="brownShoe"> </v-img>
          </v-col>
          <v-col class="card">
            <v-img class="img" :src="blueShoe"> </v-img>
          </v-col>
          <v-col class="card">
            <v-img class="img" :src="blackShoe"> </v-img>
          </v-col>
          
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import blackShoe from "@/assets/blackShoe.svg";
import brownShoe from "@/assets/brownShoe.svg";
import blueShoe from "@/assets/blueShoe.svg";
</script>
<style>
.Img_Holder{
    /* width: 200px; */
    border: 2px solid red;
  background: #f2e9fa;
  border-radius: 4px;
  margin: 3px;
}
.img{
 width: 100px;
}
.card {
   background: #f2e9fa;
  border-radius: 4px;
  margin: 3px;
 
  display: grid;
}
.car-img {
   background: #f2e9fa;
  border-radius: 4px;
  margin: 3px;
  width: 100px;
  display: grid;

}
/* .products {
  display: grid;
    grid-template-columns: auto auto auto;
} */
</style>
