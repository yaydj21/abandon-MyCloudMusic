<template>
  <div>
    <p>{{ singerDes }}</p>
  </div>
</template>

<script>
import { GetDes } from "@/api/getDes"

export default {
  name: 'Home',
  data(){
    return{
      singerDes:""
    }
  },
  created(){
    GetDes().then((res) =>{
      console.log(res.data.briefDesc);
      this.singerDes = res.data.briefDesc;
    }).catch(err =>console.log(err));
  },
  method:{
    // getDes(){
    //   GetDes().then(res =>console.log(res)).catch(err =>console.log(err));
    // }
  }
}
</script>
