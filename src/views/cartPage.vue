<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();

import { ref, computed } from 'vue'
import noProductFound from '@/components/noProductFound.vue';

let couponCode = ref(["NEWUSER", "DIS100"])
const props = defineProps(["allProductData", "cartListCount"])
const emit = defineEmits(["amountDetails"])

let couponUserInput = ref('')
let finalCouponUserInput = ref('')
// console.log("all cart data is ", props.allProductData)

const updatedCartList = computed(() => {
  return props.allProductData.filter((item) => item.cart > 0)
})

const productTotalPrice = computed(() => {
  const newPrice = props.allProductData.filter((item) => item.cart > 0)
  const filterPrice = newPrice.reduce((accu, curr) => {

    return accu + ((curr.salePrice ? curr.salePrice : curr.price) * curr.cart)
  }, 0)
  return filterPrice
})

let ShippingChanges = computed(() => {
  return props.cartListCount * 30
})

let GSTCalc = computed(() => {
  return (productTotalPrice.value + ShippingChanges.value) * 0.18
})

let couponSubmit = () => {
  // console.log("user coupon is ", couponUserInput.value)
  finalCouponUserInput.value = couponUserInput.value
}

let couponSel = computed(() => {
  if (couponCode.value.includes(finalCouponUserInput.value)) {
    console.log("Coupon accepted")
    if (finalCouponUserInput.value == 'DIS100') {
      return (productTotalPrice.value + ShippingChanges.value + GSTCalc.value) * 0.99
    }
    return (productTotalPrice.value + ShippingChanges.value + GSTCalc.value) * 0.10
  }
  else {
    console.log("invalid")
    return 0
  }
})

let payableAmount = computed(() => {
  return productTotalPrice.value + ShippingChanges.value + GSTCalc.value - couponSel.value
})

let amountData = () => {
  console.log("test")
  emit("amountDetails", {
    "productTotalPrice": productTotalPrice.value,
    "ShippingChanges": ShippingChanges.value,
    "gst": GSTCalc.value,
    "disc": couponSel.value,
    "total": payableAmount.value
  })

}
const removeCoupon = () => {
  finalCouponUserInput.value = null
}




</script>

<template>

  <div class="breadCrumWithHeading lightGreenBg">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/"><i class="bi bi-house-fill"></i> Home</RouterLink>
        </li>
        <li class="breadcrumb-item active text-dark" aria-current="page">Cart</li>
        <li>

        </li>
      </ol>
    </nav>
  </div>
  <div class="container mb-3">
    <div class="p-5">
      <div class="row ">
        <div class="col-sm-7">
          <noProductFound v-if="updatedCartList.length < 1"></noProductFound>
          <div v-for="(item, index) of updatedCartList" :key="index" class="mb-3 border">
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
                      <div class="input-group mb-3">
                        <span class="input-group-text pointer" @click="item.cart--">-</span>
                        <input type="text" class="form-control" style="width: 50px;" v-model="item.cart"
                          aria-label="Amount (to the nearest dollar)">
                        <span class="input-group-text pointer" @click="item.cart++">+</span>
                      </div>
                    </div>

                  </div>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-4">
          <h1 class="productTitle fw-bold heightAuto">Cart total</h1>
          <hr>
          <div class="p-2">
            <div class="d-flex justify-content-between">
              <input type="text" class="form-control " placeholder="Add a Coupon Code" v-model="couponUserInput">
              <button class="btn btn-dark btn-sm" style="width: 180px;" @click="couponSubmit">Apply Coupon</button>
            </div>
            <div class="small  pt-2" style="text-align: right;">(10% discount for first time user, use code "NEWUSER")
            </div>
          </div>
          <hr>
          <div class="p-2">
            <div class="d-flex justify-content-between mb-2">
              <label>Subtotal</label>
              <span class="fw-bold">₹ {{ productTotalPrice.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between  mb-2">
              <div>
                <label>Shipping Charges<span class="small px-2">( ₹ 30 * {{ props.cartListCount }} product
                    )</span></label>

              </div>
              <span class="fw-bold">₹ {{ ShippingChanges.toFixed(2) }}</span>
            </div>

            <div class="d-flex justify-content-between ">
              <label>GST <span class="small"> ( 18% applicable = ₹ {{ GSTCalc.toFixed(2) }} )</span></label>
              <span class="fw-bold"></span>
            </div>
            <div class="d-flex justify-content-between" style="margin-left: 20px;">
              <label>CGST</label>
              <span class="fw-bold">₹ {{ (GSTCalc / 2).toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between" style="margin-left: 20px;">
              <label>SGST</label>
              <span class="fw-bold">₹ {{ (GSTCalc / 2).toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between  mt-3">
              <label>Discount
                <span v-if="finalCouponUserInput" class="small border px-2 py-1 bg-warning text-dark mx-2"
                  @click="removeCoupon">{{
                    finalCouponUserInput
                  }} <i class="bi bi-x-circle "></i></span>
              </label>
              <span class="fw-bold">₹ {{ couponSel.toFixed(2) }}</span>
            </div>
          </div>
          <hr>
          <div class="p-2">
            <div class="d-flex justify-content-between  mb-3">
              <label class="fw-bold">Total</label>
              <span class="fw-bold text-success">₹ {{ payableAmount.toFixed(2) }}</span>
            </div>
          </div>

          <div class="text-center " v-if="payableAmount > 0">
            <RouterLink class="btn  btn-success" @click="amountData" to="/checkout">Proceed to Checkout</RouterLink>
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

.pointer {
  cursor: pointer
}
</style>
