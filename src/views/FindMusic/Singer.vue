<template>
  <div>
    <ul>
        <h3>语种</h3>
        <li></li>
    </ul>
  </div>
</template>

<script>

import home_nav from "@/components/home_nav.vue";
export default {
  name: "Singer",
  components:{
      home_nav
  },
  data(){
      return{
          lag:['全部','华语','欧美','日本',]
      }
  }
};
</script>
