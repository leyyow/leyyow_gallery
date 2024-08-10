<script>
import blueShoe from "@/assets/blueShoe.svg";
export default {
    data() {
        return {
            blueShoe
        }
    }
}
</script>
<template>
  <div>
    <h1>Confirmation order</h1>
       <h3>Product (3) items</h3>
    <div class="card">
      <div class="card_header">
     
        <img src="" alt="" class="edit" />
      </div>
      <div class="card_info d-flex justify-lg-space-between ma-4 ">
        <div class="dets d-flex ">
          <div class="shoe_img d-flex align-center justify-center  ">
            <img :src="blueShoe" alt="shoe" class="img"/>
          </div>
          <p class="w-66">Unisex (For the men, for the women)</p>
        </div>
        <h3 class="price font-weight-bold">N5,000</h3>
      </div>
    </div>
  </div>
</template>
<style>
.shoe_img{
    background-color: #F9EEEB;
}
.img{
    width: 64px;
    height: 46px;
}
.dets{
    border: 2px solid red;

}
.card{
  border: 2px solid greenyellow;
}
p{
  margin-left:12px ;
}
</style>