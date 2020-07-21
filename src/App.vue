<template>
  <div id="app">
    <header>
      <el-avatar :size="30" :src="circleUrl"></el-avatar>
      <h1>derMusic</h1>
      <el-page-header @back="goBack" content="" title="">
      </el-page-header>
      <el-input v-model="serachInput" placeholder="搜索音乐，视频，歌词，电台"></el-input>
      <div class="header_user">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
        <p>未登录</p>
      </div>
    </header>
    <main>
      <section class="sidebar">
        <div class="menu">
          <ul>
            <p>推荐</p>
            <li><router-link to="/">发现音乐</router-link></li>
            <li><router-link to="/personalfm">私人FM</router-link></li>
            <li>直播</li>
            <li>视频</li>
            <li>朋友</li>
            <!-- <li v-for="(item,index) in sidebarlist_recom" :key="index" :class=" {'current': index == recomisClick }"  @click="changeColor(index)">{{ item }}</li> -->
          </ul>
        </div>
        <div class="menu">
          <ul>
            <p>我的音乐</p>
            <li>本地音乐</li>
            <li>下载管理</li>
            <li>我的音乐网盘</li>
            <!-- <li v-for="(item,index) in sidebarlist_mymusic" :key="index" :class=" {'current': index == mymusicClick }"  @click="changeColor_mymusic(index)">{{ item }}</li> -->
          </ul>
        </div>
        <div class="menu">
          <ul>
            <p>创建的歌单</p>
          </ul>
        </div>
      </section>
      <section class="main_right">
      <router-view/>
      </section>
    </main>

    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      serachInput:"",
      // sidebarlist_recom:['发现音乐','私人FM','直播','视频','朋友'],
      // sidebarlist_mymusic:['本地音乐','下载管理','我的音乐网盘'],
      // recomisClick: 0,
      // mymusicClick: -1,
    };
  },
  methods: {
    goBack() {
      console.log('go back');
    },
    // changeColor(index){
    //   this.mymusicClick = -1;
    //   this.recomisClick = index;
    // },
    // changeColor_mymusic(index){
    //   this.recomisClick = -1;
    //   this.mymusicClick = index;
    // }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
header{
  display: flex;
  align-items: center;
  .el-avatar{
    margin-left: 10px;
  }
  h1{
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
  .el-page-header{
    margin-left: 50px;
    color: #fff;
  }
  .el-input{
    width: 300px;
    margin-left: 100px;
    input{
      height: 20px;
    }
  }
  .header_user{
    display: flex;
    align-items: center;
    margin-left: 500px;
    font-size: 14px;
    p{
      margin-left: 10px;
      color: #fff;
    }
  }
}
header,footer{
  width: 100%;
  height: 7vh;
  background-color: $mainblack;
}
header{
  border-bottom: 2px solid #B72424;
}
main{
  display: flex;
  width: 100%;
  height: 86vh;
  .sidebar{
    width: 20vw;
    height: 100%;
    background-color: #191B1F;
    .menu{
      ul{
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        .current{
          background-color: #26282C;
        }
        li{
          width: 100%;
          padding: 5px 0;
          cursor: pointer;
          color: #ADAFB2;
          a{
            color: #ADAFB2;
          }
        }
        p{
          width: 100%;
          padding: 10px 0;
          color: #ADAFB2;
          font-size: 12px;
          cursor: default;
        }
      }
    }
  }
  .main_right{
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
  }
}
footer{
}
</style>
