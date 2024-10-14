<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue'

let route = useRoute()
let selectedId = route.query.id
console.log("query", route.query.id)

const emit = defineEmits(["allData", "addtoCartList", "wishlistProductRemove"])

const props = defineProps(["allProductData"])
let products = ref(props.allProductData)


let detailProduct = computed(() => { return props.allProductData.filter(item => item.id == selectedId) })
console.log("product", detailProduct)
// let detailProduct = products.value.filter(item => item.id == selectedId)
// console.log("product", detailProduct)

const addtoWishlist = (dataId) => {
  emit("allData", dataId)
}

const addtoCart = (dataId) => {
  emit("addtoCartList", dataId)
}

const removeFromList = (dataId) => {
  emit("wishlistProductRemove", dataId)
  watch(props.allProductData, (newVal) => {
    products.value = newVal
  })
}

</script>

<template>

  <div class="breadCrumWithHeading lightGreenBg">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/"><i class="bi bi-house-fill"></i> Home</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/shop"><i class="bi bi-house-fill"></i> Shop</RouterLink>
        </li>
        <li class="breadcrumb-item active text-dark" aria-current="page">Product Details</li>
        <li>

        </li>
      </ol>
    </nav>
  </div>
  <div class="container ">
    <div class="p-5">
      <div v-for="(item, index) of detailProduct" :key="index">
        <div class="row">
          <div class="col-sm-4 border" align="center">
            <div class="text-center">
              <img :src="item.imgSrc" class="productImage" style="height: 250px;">
            </div>
          </div>
          <div class="col-sm-8">
            <h1 class="productTitle fw-bold mt-3 " style="min-height: auto  ;">{{ item.name }}</h1>
            <p>{{ item.description }}</p>
            <h4 class="productPrice mt-3  ">
              <div>
                <span v-if="item.salePrice">
                  <span class="fw-bold text-success">₹ {{ item.salePrice }}</span>
                  <span class="fw-bold text-dark opacity-25" style="margin-left:10px;"><del>₹{{ item.price
                      }}</del></span>
                </span>
                <span v-else>
                  <span class="fw-bold text-success">₹{{ item.price }}</span>
                </span>
              </div>
              <div class="my-3 d-flex justify-content-between ">
                <div>
                  <a title="Add to Cart" class="fw-bold btn btn-sm btn-success " @click.prevent="addtoCart(item.id)">
                    <i class="bi bi-cart-plus"></i> Add to Cart</a>
                </div>
                <div>
                  <a v-if="!item.wishlist" title="Add to Wish List " class="fw-bold btn btn-sm btn-dark"
                    @click.prevent="addtoWishlist(item.id)">
                    <i class="bi bi-heart-fill text-danger"></i> Add to Wishlist</a>
                  <a v-if="item.wishlist == true" title="Add to Wish List " class="fw-bold btn btn-danger text-white "
                    @click.prevent="removeFromList(item.id)">
                    <i class="bi bi-heart-fill "></i> Remove from Wishlist</a>


                </div>

              </div>


            </h4>

          </div>
        </div>

      </div>
    </div>
  </div>


</template>

<style>
.small {
  font-size: 10px;
}
</style>
