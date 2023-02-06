<script>
export default {
  name : 'AboutMe',
  props :['nom','postnom']
}
</script>
<template>
    <h1>Je m'appelle {{nom}} - {{postnom}}</h1>
</template>