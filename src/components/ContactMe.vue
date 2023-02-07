<script>
  export default {
    name : 'ContactMe',
    props: {
      tel : {
        type: String,
        default : '+243977553723'
      },
      email :{
        type: String
      }
    }
  }
</script>
<template>
  <div>
    <div class="contact">
      Mon numero est {{tel}}
    </div>
    <div class="email">
      Mon email est {{email}}
    </div>
  </div>
</template>
<style>
  .contact{
    color: #42b983;
  }
</style>