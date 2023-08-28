<template>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style lang="scss">
:root {
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
  background: #fafafa;
}

body {
  color: #333;
  padding: 10px;
}

h1 {
  font-size: 2rem;
}

.card {
  padding: 2em;
}
</style>