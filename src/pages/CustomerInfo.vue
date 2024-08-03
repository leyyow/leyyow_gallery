<template>
  <v-main>
    <v-container>
      <h1>Kindly input your information</h1>
      <form class="d-flex flex-column">
        <label class="text-grey-darken-2 mt-4" for="">Full name</label>
        <input
          type="text"
          placeholder="Full name"
          class="py-4 px-5 border my-4 rounded-lg"
        />
         <label class="text-grey-darken-2 mt-4" for=""> Email</label>
        <input
          type="email"
          placeholder="Email"
          class="py-4 px-5 border my-4 rounded-lg"
        />
        <label class="text-grey-darken-2" for="">Phone number</label>
        <input
          type="tel"
          placeholder="Phone number"
          class="py-4 px-5 border my-4 rounded-lg"
        />
        <label class="text-grey-darken-1 my-4" for="">Delivery Address</label>
        <div class="d-flex justify-space-between">
        <div>
            <label for="">Location</label>
          <div class="py-1 px-5 width border my-4 rounded-lg">
            <img src="" alt="location_pointer" />
            <input type="text" placeholder=" " />
          </div>
        </div>
      <div>
            <label for="">Area</label>
          <div class="py-1 px-5 width border my-4 rounded-lg">
            <img src="" alt="location_pointer" />

            <input type="text" placeholder="" />
          </div>
      </div>
        </div>
      </form>
      <PurpleModal :cart="true" :checkout="false" :shipping="true" :total="true"
      :shopping="false"/>
    </v-container>
  </v-main>
</template>
<style scoped>
.width{
  width: 80%;
}
</style>