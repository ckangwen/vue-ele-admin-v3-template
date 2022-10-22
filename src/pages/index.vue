<template>
  <div class="flex justify-center">
    欢迎使用vite
  </div>
  <a-button type="primary">
    Primary Button
  </a-button>
</template>

<script>
import {
  reactive, toRefs, onBeforeMount, onMounted,
} from "vue";
export default {
  name: "",
  setup() {
    console.log("1-开始创建组件-setup");
    const data = reactive({});
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped lang="scss"></style>
