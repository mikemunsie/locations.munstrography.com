<template>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style lang="scss">
:root {
  --image-height: 50vh;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.87);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

html,
body {
  background: #000;
  color: white;
}

body {
  padding: 10px;
}

h1 {
  font-size: 2rem;
}

.card {
  padding: 2em;
}
</style>

<script lang="ts" setup>
const element = document.documentElement; // or any specific element

function recalculate_image_height() {
  let height = Math.floor(window.innerHeight / 2);
  if (height < 300) height = 300;
  element.style.setProperty("--image-height", `${height}px`);
}

setTimeout(() => {
  recalculate_image_height();
}, 1000);


window.onresize = () => {
  if (window.innerWidth < 600) return;
  recalculate_image_height();
};
</script>