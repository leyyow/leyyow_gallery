<script>
export default {
    name: 'PurpleModal',
    data(){
    return {};
  },
};
</script>
<template>
  <div>
    <v-container class="rounded-t-lg text-white position-fixed bottom-0 left-0 w-100 ma-0 pa-4">
      <div class="d-flex first-div  pb-4 justify-space-between my-4">
        <p>Subtotal</p>
        <p class="text-subtitle">11,000</p>
      </div>
      <div class="d-flex flex-column my-3 ">
        <button class="pa-3 rounded-lg mt-5" :to="{ name: 'CheckoutPage' }" >Continue shopping</button>
         <button class=" checkout pa-3 rounded-lg my-4">Proceed to checkout</button>
      </div>
    </v-container>
  </div>
</template>
<style scoped>
.v-container{
    background: linear-gradient(to right, #6d40ee, #943fed );
    width:100%;
}
.first-div{
    border-bottom: white dotted 4px;
    
}
button{
    border: white 1px solid
}
.checkout{
    background: white;
    color:#814cef;
}
</style>  