<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navigation from './components/navigation.vue'
import footerSection from './components/footerSection.vue'
import { ref, computed } from 'vue'

import productList from '../src/productList.json'
let allproducts = ref(productList)
let serachProduct = ref(null)
let amountDetailinfo = ref(null)

const allproductData = computed(() => {
  // let finalOutputVal = allproducts.value.map((item) => {
  //   if (item.salePrice) {
  //     return { ...item, finalPrice: item.salePrice }
  //   }
  //   else {
  //     return { ...item, finalPrice: item.price }
  //   }
  // })
  // return finalOutputVal
  return allproducts.value
})

// console.log("all producsts value ", allproductData.value)



// const allData = ref([])

const testing = (dataId) => {
  let newlist = allproducts.value.map((item) => {
    if (item.id == dataId) {
      if (item.wishlist == false || !item.wishlist) {
        return { ...item, wishlist: true }
      }
      else {
        return { ...item, wishlist: false }
      }
    }
    else {
      return { ...item }
    }
  })
  allproducts.value = newlist;
  // allData.value = data
  // console.log("data 1 tesing", allproducts.value)
}

const wishlistCountNo = computed(() => {
  let wishlistC = allproductData.value.filter((item) => item.wishlist == true)
  console.log("wshlist count is", wishlistC.length)
  return wishlistC.length
})

const removeFromWishList = (dataId) => {
  testing(dataId)
}

const addtoCartList1 = (dataId) => {
  let cartData = allproducts.value.map((item) => {
    if (item.id == dataId) {
      if (!item.cart) {
        return { ...item, cart: 1 }
      }
      else {
        return {
          ...item, cart: item.cart + 1
        }
      }

    }
    else {
      return { ...item }
    }
  })
  allproducts.value = cartData;
  console.log("new cart data is ", allproducts.value)
}

const cartListCountNo = computed(() => {
  let cartListC = allproductData.value.filter((item) => item.cart > 0)
  let abs = cartListC.reduce((acc, curr) => {
    return acc + curr.cart
  }, 0)
  return abs
})

const searchboxQuery = (data) => {
  //console.log("searchbox is", data)
  serachProduct.value = data

}
const amountInfo = (data) => {
  amountDetailinfo.value = data
}

</script>

<template>
  <div class="container-fluid m-0 p-0">
    <div class="topheight"></div>
    <navigation :wishlistCount="wishlistCountNo" :cartListCount="cartListCountNo" @searchItem="searchboxQuery">
    </navigation>

    <RouterView @allData="testing" :allProductData="allproductData" @wishlistProductRemove="removeFromWishList"
      @addtoCartList="addtoCartList1" :cartListCount="cartListCountNo" :serachProductName="serachProduct"
      @amountDetails="amountInfo" :amountDetailInformation="amountDetailinfo" />

    <footerSection></footerSection>
  </div>
</template>

<style>
.topheight {
  height: 55px
}

.productImage {
  animation-play-state: paused;

}

.productImage:hover {
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  10% {
    transform: translateX(-5px);
  }

  40% {
    transform: translateX(5px);
  }

  70% {
    transform: translateX(-5px);
  }

  80% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX(0);
  }
}

.productTitle {
  font-size: 16px;
  min-height: 50px;
  color: #222222;
}

.salePosition {
  position: absolute;
  left: 20px;
  top: 10px;
  z-index: 1;
  width: 50px !important;
}

.productPrice {
  font-size: 18px;
  color: #013f18;
}

.roundedButton {
  border-radius: 50%;
  font-weight: bold;
}

.roundedButton:hover {
  color: #fff
}

.breadCrumWithHeading {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.breadCrumWithHeading ol {
  padding: 0px;
  margin: 0px;
}

.custInputField {
  width: 100px;
}

.customGrayBg {
  background: #ecf1ef;
}

.lightGreenBg {
  background: #B4CF66;
  ;
}

.darkGreenBg {
  background: #11231b;
}

a {
  text-decoration: none;
  color: #198754;
}

.small {
  font-size: 10px;
}

.pointer {
  cursor: pointer;
}
</style>
