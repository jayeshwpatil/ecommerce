<script setup>
import { ref } from 'vue'

const props = defineProps(["amountDetailInformation"])
const detailInformation = props.amountDetailInformation


</script>

<template>

  <div class="breadCrumWithHeading lightGreenBg">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/"><i class="bi bi-house-fill"></i> Home</RouterLink>
        </li>
        <li class="breadcrumb-item active text-dark" aria-current="page">Checkout
        </li>
        <li>

        </li>
      </ol>
    </nav>
  </div>
  <div class="container mb-3 ">
    <div class="p-5">
      <div class="row ">
        <div class="col-sm-7">
          <div class="pb-1">
            <h2 class="productTitle fw-bold heightAuto mb-3">Contact Inforrmation</h2>
            <p>We'll use this email to send you details and updates about your order.</p>
            <input type="email" class="form-control" placeholder="Enter your email id">
            <p class="pt-2">You are currently checking out as a guest.</p>
          </div>
          <hr>
          <div class="py-3 ">
            <h2 class="productTitle fw-bold heightAuto mb-3">Shipping Address</h2>
            <p class="mb-4">Enter the address where you want your order delivered.</p>
            <div class="row ">
              <div class="col-sm-6 mb-2 ">
                <label for="formFile" class="form-label">First Name</label>
                <input type="text" name="" id="" class="form-control">
              </div>
              <div class="col-sm-6 mb-2">
                <label for="formFile" class="form-label">Last Name</label>
                <input type="text" name="" id="" class="form-control">
              </div>
              <div class="col-sm-12 mb-2">
                <label for="formFile" class="form-label">Address</label>
                <textarea name="" id="" cols="3" class="form-control"></textarea>
              </div>
              <div class="col-sm-6 mb-2">
                <label for="formFile" class="form-label">City</label>
                <input type="text" name="" id="" class="form-control">
              </div>
              <div class="col-sm-6 mb-2">
                <label for="formFile" class="form-label">State</label>
                <input type="text" name="" id="" class="form-control">
              </div>
              <div class="col-sm-6 mb-2">
                <label for="formFile" class="form-label">Pincode</label>
                <input type="text" name="" id="" class="form-control">
              </div>
              <div class="col-sm-6 mb-2">
                <label for="formFile" class="form-label">Phone Number</label>
                <input type="text" name="" id="" class="form-control">
              </div>
              <div class="col-sm-12 mt-3">
                <input class="form-check-input mx-2" type="checkbox" value="" id="" checked />
                <label class="form-check-label" for=""> Use same address for billing </label>
              </div>
            </div>
          </div>
          <hr>
          <div class="py-4 ">
            <h2 class="productTitle fw-bold heightAuto mb-3">Payment Information</h2>

            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" name="paymentOption" id="cod" />
              <label class="form-check-label" for="">
                Cash on Delivery
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="paymentOption" id="razorpay" />
              <label class="form-check-label" for="">
                Pay with Razorpay
              </label>
            </div>
          </div>
          <hr>
          <div class="pb-1">
            <p>By proceeding with your purchase you agree to our Terms and Conditions and Privacy Policy</p>
          </div>
          <div class="text-center">
            <button class="btn btn-success">Place Order</button>
          </div>
        </div>

        <div class="col-sm-1"></div>
        <div class="col-sm-4">
          <h1 class="productTitle fw-bold heightAuto">Order summary</h1>

          <hr>
          <div class="p-2">
            <div class="d-flex justify-content-between mb-2">
              <label>Subtotal</label>
              <span class="fw-bold">₹ {{ detailInformation.productTotalPrice.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between  mb-2">
              <label>Shipping</label>
              <span class="fw-bold">₹ {{ detailInformation.ShippingChanges.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between  mb-3">
              <label>Discount</label>
              <span class="fw-bold">₹ {{ detailInformation.disc.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between ">
              <label>GST</label>
              <span class="fw-bold"></span>
            </div>
            <div class="d-flex justify-content-between" style="margin-left: 20px;">
              <label>CGST</label>
              <span class="fw-bold">₹ {{ ((detailInformation.gst) / 2).toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between" style="margin-left: 20px;">
              <label>SGST</label>
              <span class="fw-bold">₹ {{ ((detailInformation.gst) / 2).toFixed(2) }}</span>
            </div>
          </div>
          <hr>
          <div class="p-2">
            <div class="d-flex justify-content-between  mb-3">
              <label class="fw-bold">Total</label>
              <span class="fw-bold text-success">₹ {{ detailInformation.total.toFixed(2) }}</span>
            </div>
          </div>

          <div class="text-center">
            <button class="btn  btn-success">Proceed to Checkout</button>
          </div>

        </div>
      </div>
    </div>
  </div>


</template>

<style>
.heightAuto {
  min-height: auto;
}
</style>
