<template>
  <div class="wrapper">
      <div class="wrapper-header">
        <nav class="nav-header">
          <ul class="uk-navbar-nav uk-hidden-small ">
            <li class="uk-active">
              <a href="">logo</a>
            </li>
            <li>
              <a href="">Item</a>
            </li>
            <li class="uk-parent" data-uk-dropdown="" aria-haspopup="true" aria-expanded="false">
              <a href="">Parent</a>

              <div class="uk-dropdown uk-dropdown-navbar uk-dropdown-bottom" style="top: 40px; left: 0px;">
                <ul class="uk-nav uk-nav-navbar">
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li>
                    <a href="#">Another item</a>
                  </li>
                  <li class="uk-nav-header">Header</li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li>
                    <a href="#">Another item</a>
                  </li>
                  <li class="uk-nav-divider"></li>
                  <li>
                    <a href="#">Separated item</a>
                  </li>
                </ul>
              </div>

            </li>
          </ul>

          <a href="#offcanvas-1" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas=""></a>

          <div class="uk-navbar-flip">

            <a href="" class="uk-navbar-toggle uk-navbar-toggle-alt uk-visible-small"></a>

            <ul class="uk-navbar-nav uk-hidden-small">
              <li class="uk-parent" data-uk-dropdown="" aria-haspopup="true" aria-expanded="false">
                <a href="">Parent</a>

                <div class="uk-dropdown uk-dropdown-navbar uk-dropdown-bottom" style="top: 40px; left: 0px;">
                  <ul class="uk-nav uk-nav-navbar">
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Another item</a>
                    </li>
                    <li class="uk-nav-header">Header</li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Another item</a>
                    </li>
                    <li class="uk-nav-divider"></li>
                    <li>
                      <a href="#">Separated item</a>
                    </li>
                  </ul>
                </div>

              </li>
              <li>
                <a href="">Item</a>
              </li>
              <li class="uk-active">
                <a href="">Active</a>
              </li>
            </ul>

          </div>

        </nav>
      </div>
      <div class="wrapper-container">
        <pageContent></pageContent>
      </div>
      
  </div>
</template>
<script>
import pageContent from "./Viewer/pageContent.vue";

export default {
  //注册组件
  components: {
    pageContent
  },
  methods: {}
};
</script>
<style scoped>
.wrapper{
  background: #eee;
  padding: 1px;
}
.wrapper-header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    background: #fff;
    padding: 1em 0em;
}
.nav-header{
}
.wrapper-container {
    background: #fff;
    margin: 6em auto 1em;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
</style>

