<template>
	<div class="">
		<login />
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Login from './forms/Login'

export default {
  name: 'auth',
  components: {
    Login
  },
  computed: {
    ...mapGetters(['isLogged'])
  }
}
</script>
