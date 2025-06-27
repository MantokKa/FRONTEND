<template>
  <form
    @submit.prevent="onSearch"
    class="flex items-center w-full max-w-md mx-auto bg-white rounded-lg shadow px-4 py-2"
  >
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search products..."
      class="flex-grow px-3 py-2 text-gray-700 rounded-l-lg focus:outline-none"
    />
    <button
      type="submit"
      class="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-r-lg font-semibold"
    >
      Search
    </button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["search"]);
const searchQuery = ref("");

function onSearch() {
  emit("search", searchQuery.value);
}
</script>
