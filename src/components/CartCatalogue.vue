<template>
  <v-app>
  
      <div class="products" >
       
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" /> 
          </div >
          <div  class="card">
            <img class="img" :src="brownShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="blueShoe" alt="A nike shoe">
          </div >
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="brownShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="blueShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="brownShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="blueShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" loading ="lazy" />
          </div >
           <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" /> 
          </div >
          <div  class="card">
            <img class="img" :src="brownShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="blueShoe" alt="A nike shoe">
          </div >
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="brownShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="blueShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="brownShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="blueShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" loading ="lazy" />
          </div >
            <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" /> 
          </div >
          <div  class="card">
            <img class="img" :src="brownShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="blueShoe" alt="A nike shoe">
          </div >
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="brownShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="blueShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="brownShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="blueShoe" alt="A nike shoe" loading ="lazy" />
          </div >
          <div  class="card">
            <img class="img" :src="whiteShoe" alt="A nike shoe" loading ="lazy" />
          </div >
      </div >

  </v-app>
</template>

<script setup>
import whiteShoe from "@/assets/newShoe.png";
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
 width: 119px;
 height: 88px;

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
.products {
  display: grid;
    grid-template-columns: auto auto auto;
}
</style>
