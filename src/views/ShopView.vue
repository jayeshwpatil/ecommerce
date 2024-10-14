<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, onBeforeMount, ref } from 'vue'
import leftFilter from '../components/leftFilter.vue'
import topFilter from '../components/topFilter.vue'
import noProductFound from '@/components/noProductFound.vue';

const router = useRouter();

const emit = defineEmits(["allData", "addtoCartList"])
const props = defineProps(["allProductData", "serachProductName"])

let findalltheData = computed(() => {
  return props.allProductData
})

let products = ref(findalltheData)

let customPriceSet = ref({})
let catagoryValue = ref([])
let variationValue = ref([])



const productLength = computed(() => { return finalProductList.value.length })


//finding max price in all product
let maxValue = computed(() => {
  let lists = products.value.map((item) => {
    if (item.salePrice) {
      return item.salePrice
    }
    else {
      return item.price
    }
  })
  return Math.max(...lists)
})



const truncateString = (data, lengthSet) => {
  if (data.length < lengthSet) { return data }
  else {
    return data.slice(0, lengthSet) + "..."
  }
}

const SortOptionValueNew = (data) => {
  console.log("sorting option is selected ", data);
  if (data == 'LtoH') {
    products.value = products.value.sort((a, b) => {
      const aPrice = a.salePrice ? a.salePrice : a.price
      const bPrice = b.salePrice ? b.salePrice : b.price
      return aPrice - bPrice
    })
  }
  else {
    return products.value.reverse();
  }

}

const setPrice = (data) => {
  console.log("price is ", data.minValue)
  customPriceSet.value = data
}

const setCatagory = (data) => {
  catagoryValue.value = data
}

const setVariation = (data) => {
  variationValue.value = data
}

const finalProductList = computed(() => {
  if (Object.keys(customPriceSet.value).length > 0 || catagoryValue.value.length > 0 || variationValue.value.length > 0 || props.serachProductName) {
    let exactData = products.value
    console.log("selected catagory and variation")
    if (Object.keys(customPriceSet.value).length > 0) {
      exactData = exactData.filter((item) => {
        if (item.salePrice) {
          return item.salePrice > customPriceSet.value.minValue && item.salePrice <= customPriceSet.value.maxValue
        }
        else {
          return item.price > customPriceSet.value.minValue && item.price <= customPriceSet.value.maxValue
        }
      })
    }
    if (catagoryValue.value.length > 0) {
      exactData = exactData.filter((item) => catagoryValue.value.includes(item.catagory))
    }
    if (variationValue.value.length > 0) {
      exactData = exactData.filter((item) => variationValue.value.includes(item.attribute))
    }
    if (props.serachProductName) {
      exactData = exactData.filter((item) => item.name.toLowerCase().includes(props.serachProductName.toLowerCase()))
    }
    return exactData
  }
  else {
    console.log("NO price, catagory & variation selected")
    return products.value
  }

})

const fullProductSend = (data) => {
  console.log("full product is ", data)
  router.push(`/productDetails?id=${data.id}`);
}

const addtoWishlist = (dataId) => {
  emit("allData", dataId)
}

const addtoCart = (dataId) => {
  emit("addtoCartList", dataId)
}


onBeforeMount(() => {
  SortOptionValueNew('LtoH');


})

</script>

<template>

  <div class="breadCrumWithHeading lightGreenBg">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/"><i class="bi bi-house-fill"></i> Home</RouterLink>
        </li>
        <li class="breadcrumb-item active text-dark" aria-current="page">Shop</li>

      </ol>
    </nav>
  </div>
  <div class="p-5">
    <div class="row">
      <leftFilter :maxValue="maxValue" @catagoryList="setCatagory" @variationList="setVariation" @priceSet="setPrice">
      </leftFilter>
      <!-- left fitler section -->
      <div class="col-sm-9">
        <topFilter :productLength="finalProductList.length" @Sort-option-value="SortOptionValueNew"></topFilter>
        <!-- top filter section -->
        <div class="row">
          <noProductFound v-if="finalProductList < 1"></noProductFound>
        </div>
        <div class="row">
          <div class="col-sm-4 position-relative mb-4 " v-for="(item, index) in finalProductList" :key="index">
            <img v-if="item.salePrice" src="../../public/sale.png" class="salePosition">
            <div class="  border">
              <div class="text-center">
                <img :src="item.imgSrc" class="productImage pointer" style="height: 250px;"
                  @click="fullProductSend(item)">
              </div>

              <div class="px-3 ">
                <h1 class="productTitle fw-bold mt-3 pointer" @click="fullProductSend(item)">{{
                  truncateString(item.name, 60) }}
                </h1>
                <h4 class="productPrice mt-3 d-flex justify-content-between">
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
                  <div>
                    <a title="Add to Wish List " class="fw-bold btn btn-sm btn-light roundedButton border mx-1"
                      @click.prevent="addtoWishlist(item.id)">
                      <i v-if="item.wishlist" class="bi bi-heart-fill text-danger"></i>
                      <i v-else class="bi bi-heart text-secondary"></i>

                    </a>
                    <a title="Add to Cart" class="fw-bold btn btn-sm btn-success roundedButton border"
                      @click.prevent="addtoCart(item.id)">
                      <i class="bi bi-cart-plus"></i>
                    </a>
                  </div>

                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!--  -->

    </div>
  </div>


</template>

<style>
/* .productImage {
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
} */
</style>
