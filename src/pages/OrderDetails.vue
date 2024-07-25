<script></script>
<template>
  <div>
    image for the deletable-chips
    <div class="header_container">
      <h2>Unisex for women</h2>
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
  </div>
</template>
<style scoped>
.header_container, .select_container {
  display: flex;
  justify-content: space-between;
}
.select_container > div {
    width: 45%;
}
p {
  font-size: 1.5rem;
}
</style>
