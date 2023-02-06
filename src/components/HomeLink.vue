<script>
export default {
  name : 'HomeLink',
  props:['url', 'msg']
}
</script>
<template>
  <div>
    <a :href="url">{{msg}}</a>
  </div>
</template>
<style>
a{
  text-decoration: none;
}
</style>