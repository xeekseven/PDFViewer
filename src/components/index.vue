<template>
  <div class="common-column common-main-start">
      <pageHeader style="z-index:1001"></pageHeader>
      <router-view style="margin-top:4.2rem;"></router-view>
      <pageFooter></pageFooter>
  </div>
</template>

<script>
//引入组件
import pageFooter from "./layouts/pageFooter.vue";
import pageHeader from "./layouts/pageHeader.vue"

export default {
  //注册组件
  components: {
    pageFooter,
    pageHeader
  },
  methods: {}
};
</script>
<style scoped>

</style>
