<template>
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActiveRoute"
    router
  >
    <template v-for="route in allowRoutes" :key="route.path">
      <el-menu-item :index="route.path">
        <span>{{ route.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const allowRoutes = router.getRoutes().filter((route) => {
      return route.meta.isShow;
    });
    let defaultActiveRoute = allowRoutes.length ? allowRoutes[0].path : "";

    return { allowRoutes, defaultActiveRoute };
  },
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
  border: 0;
  background-color: var(--view-background-color);
  .el-menu-item {
    color: var(--title-font-color);
  }
  .el-menu-item:hover {
    background-color: var(--view-background-reverse-color);
    color: var(--title-font-reverse-color);
  }
  .el-menu-item.is-active {
    color: var(--item-selected-color);
  }
}
</style>