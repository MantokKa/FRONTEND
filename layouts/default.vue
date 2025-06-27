<template>
  <div class="flex flex-col min-h-screen bg-white">
    <header
      class="border-b fixed w-full z-50 bg-amber-100 border-gray-300 p-3 font-semibold"
    >
      <div class="flex items-center justify-end w-full relative">
        <span
          class="absolute left-1/2 -translate-x-1/2 text-center cursor-pointer"
          @click="goToIndex"
          >JC store</span
        >
        <div class="flex items-center">
          <Button class="ml-2" @click="toggleCart">Cart</Button>
          <Button class="ml-2" @click="toggleLogin">login</Button>
          <Button class="ml-2 mr-2" @click="goToTestingPage"
            >TestingPage</Button
          >
        </div>
      </div>
    </header>
    <div class="fixed top-20 right-8 flex flex-row gap-4 z-50">
      <div
        v-if="showCart"
        class="bg-white shadow-md rounded-lg p-4 w-80 h-96 overflow-y-auto"
      >
        <CartList />
      </div>
      <div
        v-if="showLogin"
        class="bg-white shadow-md rounded-lg p-4 w-80 overflow-y-auto"
      >
        <Login />
      </div>
    </div>
    <main class="flex flex-grow p-4 bg-amber-950 pt-16">
      <div class="flex-grow p-4">
        <slot />
      </div>
    </main>
    <footer class="border-t bg-amber-400 border-gray-300 p-4 text-center">
      End
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "~/components/button.vue";
import CartList from "~/components/cartList.vue";
import Login from "~/components/login.vue";

const showLogin = ref(false);
const showCart = ref(false);
const router = useRouter();

function toggleCart() {
  showCart.value = !showCart.value;
}

function toggleLogin() {
  showLogin.value = !showLogin.value;
}

function goToTestingPage() {
  router.push("/testingPage");
}

function goToIndex() {
  router.push("/");
}
</script>
