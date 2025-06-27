<template>
  <div
    class="justify-center rounded-2xl flex bg-amber-300 min-h-screen items-center"
  >
    <StoreTitle />
    <NameInput />
    <ItemList />
    <Searchbar />
  </div>
</template>

<script setup>
import StoreTitle from "~/components/StoreTitle.vue";
import NameInput from "~/components/NameInput.vue";
import ItemList from "~/components/ItemList.vue";
import Searchbar from "~/components/searchbar.vue";
</script>
