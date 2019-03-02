/* eslint-disable */ 
<template>
  <div id="app">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1" data-menuanchor="page1">
        section1
      </el-menu-item>
      <el-menu-item index="2" data-menuanchor="page2">
        section2
      </el-menu-item>
      <el-menu-item index="3" data-menuanchor="page3">
        section3
      </el-menu-item>
      <el-menu-item index="4" data-menuanchor="page4">
        section4
      </el-menu-item>
      <el-menu-item index="5" data-menuanchor="page5">
        section5
      </el-menu-item>

    </el-menu>
    <!-- <ul id="menu"> -->
    <!-- <li data-menuanchor="page1">
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
      </li> -->
    <!-- </ul> -->
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <!-- First section ... -->

        <el-carousel :interval="5000" arrow="always" height='500px'>
          <el-carousel-item v-for="item in items" :key="item">
            <img :src="item">

          </el-carousel-item>
        </el-carousel>
        <h3>傻逼</h3>
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
          sectionsColor: ['#ccc', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab'],
        
       
        },
         items:['https://alvarotrigo.com/fullPage/extensions/imgs/parallax/parallax-2.jpg',
        'https://alvarotrigo.com/fullPage/extensions/imgs/parallax/parallax-3-3.jpg',
        'https://alvarotrigo.com/fullPage/extensions/imgs/parallax/parallax-3-2.jpg',
        'https://alvarotrigo.com/fullPage/extensions/imgs/parallax/parallax-1-1.jpg']
      
   
      }
    },
     methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        location.hash=`#page${key}`
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
  /* display: inline-block; */

  color: #42b983;
  /* height: 96px;
  width: 60px; */
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
