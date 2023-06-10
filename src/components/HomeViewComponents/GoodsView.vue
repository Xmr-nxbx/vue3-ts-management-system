<template>
  <div class="search-box">
    <el-form :inline="true" :model="selectData" class="demo-form-inline">
      <el-form-item label="标题：">
        <el-input v-model="selectData.title" placeholder="请输入关键字" />
      </el-form-item>
      <el-form-item label="详情：">
        <el-input v-model="selectData.introduce" placeholder="请输入关键字" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item label="数量：">
        <el-input
          v-model.number="selectData.pageSize"
          placeholder="请输入条目数量"
        />
      </el-form-item>
    </el-form>
    <div class="search-content">
      <el-table :data="dataList.computedGoodsList" border>
        <el-table-column prop="id" label="ID" min-width="50" />
        <el-table-column prop="title" label="标题" min-width="100" />
        <el-table-column prop="introduce" label="详情" />
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="selectData.count"
        v-model:page-size="selectData.pageSize"
        v-model:current-page="selectData.page"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  watch,
  defineComponent,
  reactive,
  toRefs,
  onMounted,
} from "vue";
import { getGoodsList } from "@/request/api";
import { GoodsInitData, GoodsListInterface } from "@/type/goods";

export default defineComponent({
  setup() {
    const data = reactive(new GoodsInitData());
    onMounted(() => {
      getGoodsList().then((res) => {
        data.list = res.data.goodsList || [];
        data.listForShow = data.list;
      });
    });

    const dataList = reactive({
      computedGoodsList: computed(() => {
        const startIndex =
          (data.selectData.page - 1) * data.selectData.pageSize;
        const endIndex = startIndex + data.selectData.pageSize;
        const res = data.listForShow.slice(startIndex, endIndex);
        return res;
      }),
    });

    // 提交时，修改数据
    const onSubmit = () => {
      let arr: GoodsListInterface[] = [];
      // 搜索框没有值：退出
      if (!(data.selectData.title || data.selectData.introduce)) {
        return;
      }

      // 查询并赋值
      if (data.selectData.title) {
        arr = data.list.filter((each: GoodsListInterface) => {
          return each.title.indexOf(data.selectData.title) !== -1;
        });
      }
      if (data.selectData.introduce) {
        arr = data.list.filter((each: GoodsListInterface) => {
          return each.introduce.indexOf(data.selectData.introduce) !== -1;
        });
      }
      data.listForShow = arr;
    };

    // 监听selectData的title和introduce的变化
    watch(
      [() => data.selectData.title, () => data.selectData.introduce],
      () => {
        const searchTitleLength = data.selectData.title.trim.length;
        const searchIntroduceLength = data.selectData.introduce.trim.length;
        // 复原listForShow为list
        if (!(searchTitleLength || searchIntroduceLength)) {
          data.listForShow = data.list;
        }
      }
    );

    // 监听listForShow的变化
    watch([() => data.listForShow], () => {
      data.selectData.page = 1;
      data.selectData.count = data.listForShow.length;
    });

    return { ...toRefs(data), dataList, onSubmit };
  },
});
</script>

<style scoped lang="scss">
.search-box {
  padding: 10px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  overflow-y: scroll;
}
</style>