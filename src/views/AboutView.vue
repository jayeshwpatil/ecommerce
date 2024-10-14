<template>
  <div class="breadCrumWithHeading lightGreenBg">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="breadcrumb-item active text-dark" aria-current="page">About Us</li>
      </ol>
    </nav>
  </div>
  <div class="w-75 mx-auto  p-5 ">

    <h3 class="mb-3">I created this e-commerce website using Vue JS Composition API.</h3>
    <ul><strong>Core Components</strong>
      <li>HTML, CSS, JavaScript: The building blocks of your website.</li>
      <li>Vue JS: The framework that provides structure and reactivity.</li>
      <li>Vue Router: For managing navigation between different pages (e.g., home, shop, product detail, cart,
        checkout).
      </li>
    </ul>

    <ul><strong>Data Management</strong>
      <li>JSON File: A simple way to store product data for testing. Consider using a more robust data storage solution
        like a database for production.</li>
    </ul>

    <ul><strong>Core Functionalities</strong>
      <li>Product Listing: Display products from your JSON file on the shop page.</li>
      <li>Search: Search functionality added.</li>
      <li>Sorting: Implement sorting functionality based on price, category, or attributes.</li>
      <li>Filtering: Allow users to filter products based on various criteria.</li>
      <li>Product Details: Show detailed information about individual products.</li>
      <li>Add to Cart: Enable users to add products to their shopping cart.</li>
      <li>Wishlist: Provide a wishlist feature for users to save products for later.</li>
      <li>Checkout: Guide users through the checkout process, including address input, coupon application, and GST
        calculation.</li>
    </ul>

    <p>Remember: This is just a basic outline. You can add more features and customizations as needed to enhance your
      e-commerce website.</p>
  </div>
</template>

<style scoped>
ul {
  padding: 0px;
  margin: 0px;
  margin-bottom: 25px;
}

ul li {
  margin-left: 30px;
  margin-top: 7px;
}
</style>
