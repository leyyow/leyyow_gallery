<script>
export default {
    name:'CheckoutPage'
}
</script>
<template>
    <v-container>
        <h1>Thanks for being our customer</h1>
        <p>Input your coupon code to get Get 20% OFF Limited time offer</p>
        <div>
            <div class="coupon rounded pa-1"><input type="text"> <button>Apply</button></div>
        </div>
    </v-container>
</template>
<style scoped>
.coupon{
    border: 1px solid grey;

}
</style>