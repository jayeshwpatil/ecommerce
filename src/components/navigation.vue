<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

import { ref, watch, computed } from 'vue'
const searchItem = ref(null)
const emit = defineEmits(["searchItem"])
// emit("searchItem", searchItem.value)

watch(searchItem, (newVal) => {
    emit("searchItem", newVal)
})


const props = defineProps(["wishlistCount", "cartListCount"])

const wishlistData = computed(() => {
    return props.wishlistCount
})

const CartListData = computed(() => {
    return props.cartListCount
})

const gotoShop = () => {
    console.log("go to shop")
    router.push('/shop');
}
// wishlistLength = computed(()=>{

// })


</script>
<template>

    <!-- <nav class="navbar darkGreenBg sticky-top navbar-expand-lg" data-bs-theme="dark"
        style="position: fixed; top: 0px;width:100%">
        <div class="container-fluid d-flex justify-content-between">
            <div><a class="navbar-brand text-success fw-bold" href="#">DJ-Store </a></div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" :class="{ active: $route.path === '/' }" aria-current="page"
                            to="/">
                            Home
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :class="{ active: $route.path === '/shop' }" to="/shop">Shop
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :class="{ active: $route.path === '/about' }" to="/about">About us
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :class="{ active: $route.path === '/contact' }" to="/contact">
                            Contact
                            Us</RouterLink>
                    </li>
                </ul>

            </div>
            <div class="d-flex">

                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search Product" v-model="searchItem">
                </div>
                <RouterLink class="btn btn-success btn-sm mx-2 position-relative " to="/wishlist" title="Wishlist"><i
                        class="bi bi-heart-fill"></i>
                    <span data-v-29e8c3c6="" class="badge text-bg-success mx-1">{{ wishlistData }}</span>
                </RouterLink>
                <RouterLink class="btn btn-success btn-sm position-relative " to="/cart" title="Cart"><i
                        class="bi bi-cart4"></i>
                    <span data-v-29e8c3c6="" class="badge text-bg-success mx-1">{{ CartListData }}</span>
                </RouterLink>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav> -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary darkGreenBg" data-bs-theme="dark"
        style="position: fixed; top: 0px;width:100%; z-index:7">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <RouterLink to="/" class="navbar-brand">DJ-Store</RouterLink>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" :class="{ active: $route.path === '/' }" aria-current="page"
                            to="/">
                            Home
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :class="{ active: $route.path === '/shop' }" to="/shop">Shop
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :class="{ active: $route.path === '/about' }" to="/about">About us
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :class="{ active: $route.path === '/contact' }" to="/contact">
                            Contact
                            Us</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">

                <form class="d-flex searchForm" role="search">
                    <input type="text" class="form-control" placeholder="Search Product" v-model="searchItem"
                        @focus="gotoShop">

                </form>
            </div>
            <div class="linkButton ">
                <RouterLink class="btn btn-success btn-sm mx-2 position-relative " to="/wishlist" title="Wishlist">
                    <i class="bi bi-heart-fill"></i>
                    <span data-v-29e8c3c6="" class="badge text-bg-danger mx-1">{{ wishlistData }}</span>
                </RouterLink>
                <RouterLink class="btn btn-success btn-sm position-relative " to="/cart" title="Cart"><i
                        class="bi bi-cart4"></i>
                    <span data-v-29e8c3c6="" class="badge text-bg-danger mx-1">{{ CartListData }}</span>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.darkGreenBg {
    background: #002112 !important;
}

.logo {
    color: #FFEC5C;
}

.navbar-nav li a {
    color: #fff;
    font-weight: 500;
}

.navbar-nav li a.active {
    color: #44803F;
}

.navbar-collapse {
    flex-grow: 0;
}

@media only screen and (max-width: 768px) {
    .navbar-nav li.nav-item {
        border-bottom: 1px dashed #000;
        ;
    }

    .linkButton {

        padding: 0px 0px 10px 0px;
    }

    .searchForm {
        border-bottom: 1px dashed #000;
        padding: 10px 0px;
        margin-bottom: 10px;
    }

}
</style>
