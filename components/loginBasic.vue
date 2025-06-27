<!-- create here the basicLogin that is not ready for backend -->
<template>
  <form @submit.prevent="onSubmit" class="p-4 bg-white rounded shadow max-w-xs mx-auto mb-8">
    <div class="mb-4">
      <label class="block mb-1 text-sm">Email</label>
      <input v-model="email" type="email" class="border rounded w-full p-2" required />
    </div>
    <div class="mb-4">
      <label class="block mb-1 text-sm">Password</label>
      <input v-model="password" type="password" class="border rounded w-full p-2" required />
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
    <div v-if="msg" class="mt-2 text-sm text-green-600">{{ msg }}</div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
const msg = ref('')
function onSubmit() {
  msg.value = `Email: ${email.value}, Password: ${password.value}`
}
</script>

<!-- create here the basicLogin that is ready for backend -->
<template>
  <form @submit.prevent="onLogin" class="p-4 bg-white rounded shadow max-w-xs mx-auto">
    <div class="mb-4">
      <label class="block mb-1 text-sm">Email</label>
      <input v-model="backendEmail" type="email" class="border rounded w-full p-2" required />
    </div>
    <div class="mb-4">
      <label class="block mb-1 text-sm">Password</label>
      <input v-model="backendPassword" type="password" class="border rounded w-full p-2" required />
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full" :disabled="loading">Login</button>
    <div v-if="backendMsg" class="mt-2 text-sm" :class="backendError ? 'text-red-600' : 'text-green-600'">{{ backendMsg }}</div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const backendEmail = ref('')
const backendPassword = ref('')
const backendMsg = ref('')
const backendError = ref(false)
const loading = ref(false)
async function onLogin() {
  backendMsg.value = ''
  backendError.value = false
  loading.value = true
  try {
    // Replace with your backend endpoint
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: backendEmail.value, password: backendPassword.value })
    })
    if (!res.ok) throw new Error('Login failed')
    backendMsg.value = 'Login successful!'
  } catch (err) {
    backendMsg.value = err.message
    backendError.value = true
  } finally {
    loading.value = false
  }
}
</script>