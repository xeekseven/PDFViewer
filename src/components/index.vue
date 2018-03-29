<template>
  <div class="common-column common-main-start">
      <pageViewer></pageViewer>
      <pageFooter></pageFooter>
  </div>
</template>

<script>
//引入组件
import pageFooter from "./pageFooter.vue";
import pageViewer from "./pageViewer.vue"

export default {
  //注册组件
  components: {
    pageFooter,
    pageViewer
  },
  methods: {}
};
</script>
<style scoped>

</style>
