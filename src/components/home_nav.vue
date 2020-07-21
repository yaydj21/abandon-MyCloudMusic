<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/myrecommend">个性推荐</router-link>
        </li>
        <!-- <li><router-link to="/about">About</router-link></li> -->
        <li>
          <router-link to="/playlist">歌单</router-link>
        </li>
        <li>主播电台</li>
        <li>排行榜</li>
        <li>
          <router-link to="/singer">歌手</router-link>
        </li>
        <li>最新音乐</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  component: {}
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #202226;
  margin-bottom: 20px;
  ul {
    display: flex;
    li:hover{
      color: #fff;
    }
    li {
      padding: 0px 20px;
      color: #828385;
      a:hover{
        color: #fff;
      }
      a {
        color: #828385;
      }
    }
  }
}
</style>