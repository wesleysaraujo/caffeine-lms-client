<template>
  <div>
    <h1 class="text-center">{{ msg }}</h1>
  </div>
</template>

<script>
import axios from '@/http'

export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Bem vindo ao Caffeine Dashboard'
    }
  },
  mounted () {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka')
    .then(response => response.data)
    .then(data => {
      console.log(data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>
