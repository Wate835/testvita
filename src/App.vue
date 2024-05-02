<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onErrorCaptured, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  document.addEventListener(
    'mousedown',
    function (event) {
      if (event.detail > 1) {
        event.preventDefault()
      }
    },
    false
  )
})
</script>

<style scoped>
.layout {
  height: 100vh;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.1s ease-in-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
