<template>
  <div class="main" v-infinite-scroll style="overflow:auto">
    <!-- 轮播 start -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 10" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 轮播 end-->

    <!-- 推荐歌单 start -->
    <section>
      <div class="recommond_title">
        <h2>推荐歌单</h2>
        <router-link to="/playlist">更多></router-link>
      </div>
      <div class="recommond_main">
        <div id="everyday" class="showitem">
          <div class="play_count">62104</div>
        </div>
        <div class="showitem">
          其他
        </div>
        <div class="showitem">
          其他
        </div>
        <div class="showitem">
          其他
        </div>
        <div class="showitem">
          其他
        </div>
        
      </div>
    </section>
  </div>
</template>

<script>
import home_nav from "@/components/home_nav.vue";
import { findMusicBanner } from "@/api/findmusic"

export default {
  name: "FindMusic",
  components: {
    home_nav
  },
  created(){
    findMusicBanner().then((res) =>{
      console.log(res);
    }).catch(err =>{console.log(err);})
  }
};
</script>

<style lang="scss" scoped>
  .main{
    padding: 0 20px;
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
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .recommond_title{
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #23262C;
    margin-bottom: 10px;
    h2{
      font-size: 18px;
      color: #fff;
      font-weight: 400;
    }
    a{
      color: #828385;
      font-size: 12px;
    }
  }
  .recommond_main{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    height: 400px;
    .showitem{
      width: 18%;
      height: 50%;
      margin-bottom: 50px;
      background-color: skyblue;
      .play_count{
        width: 100%;
        text-align: right;
      }
    }
  }
</style>
