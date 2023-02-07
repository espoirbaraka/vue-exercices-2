<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ContactMe email="esbarakabigega@gmail.com" />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactMe from "@/components/ContactMe";

export default {
  name: 'ContactView',
  components: {
    ContactMe
  }
}
</script>
