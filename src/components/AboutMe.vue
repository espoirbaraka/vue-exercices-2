<script>
import {mapState} from 'vuex'
export default {
  name : 'AboutMe',
  props :['nom','postnom'],
  beforeCreate() {console.log('Je ne suis pas encore cree')
  },
  created() {console.log('Je suis de ja cree')
  },
  beforeMount() {console.log('Je vais bientot etre monte')
  },
  mounted() {console.log('Je suis deja monte')
  },
  beforeDestroy() {console.log('Je vais etre detruit')
  },
  destroyed() {console.log('Je suis deja detruit')
  },
  computed:{
    ...mapState(["day","month","year"])
  }
}
</script>
<template>
  <div>
    <h1>Je m'appelle {{nom}} - {{postnom}}</h1>
    <p>Nous sommes le {{day}}/{{month}}/{{year}}</p>
  </div>
</template>