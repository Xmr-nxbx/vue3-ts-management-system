<template>
  <nav class="mynav">
    <ul>
      <li>
        <a href="#" class="title">
          <img class="logo" src="@/assets/logo.png" />
          后台管理系统
        </a>
      </li>
      <li></li>
      <li><a href="#"></a></li>
      <li><a href="#">个人信息</a></li>
      <li><a href="#" @click="delTokenAndLogout">退出登录</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    // 退出登录
    const delTokenAndLogout = () => {
      localStorage.removeItem("token");
      router.push({ name: "login" });
    };
    return { delTokenAndLogout };
  },
});
</script>

<style scoped lang="scss">
.mynav {
  width: 100%;
  height: var(--nav-height);
  background-color: var(--view-background-color);

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

    li {
      height: 100%;
      position: relative;

      a {
        padding: 0 20px;
        display: block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: var(--title-font-color);
        font-size: 20px;
        line-height: var(--nav-height);
      }

      .logo {
        vertical-align: middle;
        height: 80%;
      }

      .title {
        font-size: 25px;
      }
    }
    li:after {
      content: "";
      display: block;
      width: 100%;
      height: 0px;
      background-color: var(--item-selected-color);
      position: absolute;
      bottom: 0;
      transition: height 0.2s;
    }
    li:hover:after {
      height: 2px;
    }
  }
}
</style>