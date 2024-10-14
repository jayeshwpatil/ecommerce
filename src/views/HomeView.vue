<script setup>

</script>

<template>
  <div class="bgImage ">

    <main class="p-5 ">
      <h1 class="title text-center text-success fw-bold">"Elevate Your Wardrobe with Timeless Styles"</h1>
      <p class="lead text-center fw-bold">Discover our exclusive collection of shirts, jackets, and hoodies
        <br>tailored for
        the bold and stylish.
      </p>
      <p class="lead text-center">
        <RouterLink to="shop" class="btn btn-success">Visit Shop</RouterLink>
      </p>
    </main>

  </div>

</template>

<style scoped>
body {
  overflow: hidden;
}

main {
  background: #fff;
  border-radius: 30px;
  opacity: 0.7;
  margin-top: 100px;
  width: auto !important;
  height: auto !important;
  margin: 0px auto;

}

h1.title {
  font-size: 25px;
}

.bgImage {
  background: url(../../public/shop.jpg) center no-repeat;
  background-size: cover;
  height: 90vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {

  main {
    margin-top: 0px;
  }



}
</style>
