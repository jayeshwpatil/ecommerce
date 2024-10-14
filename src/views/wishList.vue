<script setup>
import noProductFound from '@/components/noProductFound.vue';
import { ref, computed } from 'vue'
const emit = defineEmits(["wishlistProductRemove"])

const props = defineProps(["allProductData"])
const showingwishlist = computed(() => {
  return props.allProductData.filter((item) => item.wishlist == true)
})

const removeFromList = (dataId) => {
  emit("wishlistProductRemove", dataId)
}





</script>

<template>

  <div class="breadCrumWithHeading lightGreenBg">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/"><i class="bi bi-house-fill"></i> Home</RouterLink>
        </li>
        <li class="breadcrumb-item active text-dark" aria-current="page">Wishlist</li>
        <li>

        </li>
      </ol>
    </nav>
  </div>
  <div class="container ">
    <div class="p-5">
      <div class="row ">
        <noProductFound v-if="showingwishlist.length < 1"></noProductFound>
        <div class="col-sm-12">

          <div v-for="(item, index) of showingwishlist" :key="index" class="mb-3 border">
            <div class="row">
              <div class="col-sm-3">
                <div class="text-center">
                  <img :src="item.imgSrc" class="productImage pt-3" style="height: 100px;">
                </div>
              </div>
              <div class="col-sm-8">
                <h1 class="productTitle fw-bold mt-3 " style="min-height: auto  ;">{{ item.name }}</h1>
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
                      <a href="" title="Add to Cart" class="fw-bold btn btn-sm btn-success ">
                        <i class="bi bi-cart-plus"></i> Add to Cart</a>
                      <a href="" title="Buy it Now" class="fw-bold btn btn-sm btn-success mx-1 ">
                        <i class="bi bi-bag-check-fill"></i> Buy it Now</a>
                    </div>
                    <div>
                      <a title="Add to Wish List " class="fw-bold btn btn-danger text-white "
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
    </div>
  </div>


</template>

<style>
.small {
  font-size: 10px;
}
</style>
