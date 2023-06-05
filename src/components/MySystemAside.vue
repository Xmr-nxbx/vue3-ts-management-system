<template>
  <el-menu
    class="el-menu-vertical-demo"
    default-active="1"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <span>商品列表</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <span>Two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><setting /></el-icon>
      <span>Three</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const handleOpen = () => {
      123;
    };
    const handleClose = () => {
      456;
    };
    return { handleOpen, handleClose };
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