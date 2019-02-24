
<template>
  <div id="app">
    <ul id="menu">
      <li data-menuanchor="page1">
        <a href="#page1">section1</a>
      </li>
      <li data-menuanchor="page2">
        <a href="#page2">section2</a>
      </li>
      <li data-menuanchor="page3">
        <a href="#page3">section3</a>
      </li>
      <li data-menuanchor="page4">
        <a href="#page4">section4</a>
      </li>
      <li data-menuanchor="page5">
        <a href="#page5">section5</a>
      </li>
    </ul>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
      <div class="section">
        3 section ...
      </div>
      <div class="section">
        4 section ...
      </div>
      <div class="section">
        5 section ...
      </div>
    </full-page>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
   data () {
      return {
        options: {
          afterLoad: this.afterLoad,
          scrollOverflow: true,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
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
