<script setup>
import { ref } from 'vue';
const props = defineProps(["maxValue"])
const emit = defineEmits(["catagoryList", "variationList", "priceSet"])
let finalMaxValue = ref(props.maxValue)
let finalMinimumValue = ref(0)

const selectedCatagory = ref([])
const selectedVariaion = ref([])

const newPriceFilter = () => {
    // console.log("min and max value", finalMinimumValue.value, finalMaxValue.value)
    if (!finalMaxValue.value || finalMaxValue.value == 0) {
        finalMaxValue.value = props.maxValue
    }
    else {
        finalMaxValue.value
    }
    let minMaxVal = {
        "minValue": finalMinimumValue.value,
        "maxValue": finalMaxValue.value
    }
    emit("priceSet", minMaxVal)
}


const findCatagory = () => {
    emit("catagoryList", selectedCatagory.value)
}
const findVariation = () => {
    emit("variationList", selectedVariaion.value)
}




</script>

<template>
    <div class="col-sm-3 customGrayBg ">
        <div class="p-3 text-dark">
            <h4>Filter</h4>
            <hr>
            <div>
                <div class="form-label text-left">

                    <span class="small pt-1" style="float: right;">Max product price {{
                        props.maxValue
                    }}</span>
                    <div class="text-dark fw-bold">Price Range</div>


                </div>
                <div class="d-flex ">
                    <div>
                        <input class="form-control custInputField" type="text" v-model="finalMinimumValue"
                            placeholder="Min. ">
                    </div>
                    <div>
                        <input class="form-control custInputField mx-2" type="text" v-model="finalMaxValue"
                            placeholder="Max. ">
                    </div>
                    <button type="button" class="btn btn-success form-control btn-sm"
                        @click="newPriceFilter">Submit</button>
                </div>
            </div>
            <hr />
            <div>
                <div class="form-label text-left">
                    <span class="text-dark fw-bold">Catagory</span>
                </div>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Men" id="Men" v-model="selectedCatagory"
                            @change="findCatagory" />
                        <label class="form-check-label" for="Men"> Men </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Women" id="Women"
                            v-model="selectedCatagory" @change="findCatagory" />
                        <label class="form-check-label" for="Women"> Women </label>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div class="form-label text-left">
                    <span class="text-dark fw-bold">Variations</span>
                </div>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="T-Shirt" id="T-Shirt"
                            v-model="selectedVariaion" @change="findVariation" />
                        <label class="form-check-label" for="T-Shirt"> T-Shirt </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Shirt" id="Shirt"
                            v-model="selectedVariaion" @change="findVariation" />
                        <label class="form-check-label" for="Shirt"> Shirt </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Sweatshirt" id="Sweatshirt"
                            v-model="selectedVariaion" @change="findVariation" />
                        <label class="form-check-label" for="Sweatshirt"> Sweatshirt </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Jacket" id="Jacket"
                            v-model="selectedVariaion" @change="findVariation" />
                        <label class="form-check-label" for="Jacket"> Jacket </label>
                    </div>
                </div>
            </div>
            <hr />
        </div>

    </div>
</template>

<style></style>