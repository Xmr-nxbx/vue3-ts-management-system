<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

html,
body,
#app {
  height: 100vh;
  width: 100vw;
}

:root {
  --nav-height: 50px;
  --view-background-color: #666;
  --view-background-reverse-color: #aaa;
  --title-font-color: #fff;
  --title-font-reverse-color: #000;
  --item-selected-color: #00ff66;
}
</style>
