<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AboutMe nom="BARAKA" postnom="BIGEGA" />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/AboutMe";

export default {
  name: 'HomeView',
  components: {
    AboutMe
  }
}
</script>
