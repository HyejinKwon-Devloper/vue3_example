<script setup lang="ts">
import { translateMsg } from '@/utils/translation';

defineProps<{
  msg: string
}>()

document.addEventListener("keypress", function(e) {
  console.log(e)
  if (e.keyCode === 13) {
    alert('test');
  }
}, false);

document.addEventListener("keyup", function(e) {
  console.log(e)
  if (e.key === "F11" ) {
    alert('test2');
  }
}, false);

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
     {{ translateMsg("message.success_start") }}
      <a href="https://vitejs.dev/">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. 
      What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
