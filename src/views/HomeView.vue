<template>
  <div class="home">
    <el-container class="home-view">
      <el-header>
        <my-system-header></my-system-header>
      </el-header>
      <el-container class="main-view">
        <el-aside width="200px">
          <my-system-aside></my-system-aside>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MySystemHeader from "@/components/MySystemHeader.vue";
import MySystemAside from "@/components/MySystemAside.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MySystemHeader,
    MySystemAside,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .home-view {
    height: 100%;
  }
}

.el-header {
  padding: 0;
  margin: 0;
  height: var(--nav-height);
}

.main-view {
  padding: 10px;
  height: calc(100% - var(--nav-height));
  box-sizing: border-box;
  background-color: #848484;
}

.el-aside {
  height: 100%;
}
</style>