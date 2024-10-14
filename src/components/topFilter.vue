<script setup>
import { ref } from 'vue';
const emit = defineEmits(['SortOptionValue'])
const props = defineProps(['productLength'])
const sortingSelection = ref('LtoH');



const changeSorting = () => {
    emit("SortOptionValue", sortingSelection.value)
}
</script>

<template>
    <div v-if="props.productLength > 0"
        class="px-3 mb-3 fw-bold py-1 d-flex justify-content-between align-items-center">
        <div>
            <span class="badge bg-success">{{ props.productLength }}</span> Result Found
        </div>
        <div>
            <!-- <select class="form-select   fw-bold" v-model="sortingSelection" @change="$emit('sortingSelection')"> -->
            <select class="form-select   fw-bold" v-model="sortingSelection" @change="changeSorting">
                <option value="LtoH">Price - Low to High</option>
                <option value="HtoL">Price - High to Low</option>
            </select>
        </div>
    </div>
</template>

<style scoped></style>