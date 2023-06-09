<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商品名称：">
        <el-input v-model="formInline.name" placeholder="Approved by" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="console.log(1)">Query</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { getGoodsList } from "@/request/api";

export default defineComponent({
  setup() {
    const data = reactive({ formInline: { name: "" } });
    getGoodsList({
      page: 1,
    }).then((res) => {
      console.log(res);
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped lang="scss">
</style>