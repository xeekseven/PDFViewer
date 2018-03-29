<template>
    <div>
        <div>得到一个axios请求的值</div>
        <div></div>
        <div>{{ _value }}</div>
        <button type="button" class="btn btn-primary" v-on:click="GetValue" data-dismiss="modal">取值</button>
    </div>
</template>

    <script>
import { mapGetters } from "vuex";
export default {
  name: "index",

  data() {
    return {
      v: "null",
      _msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    GetValue() {
      this.$store.dispatch("GetValue", 2);
    }
  },
  computed: {
    ...mapGetters({
      value: "value"
    }),
    _value: function() {
      return this.value;
    }
  }
};
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
