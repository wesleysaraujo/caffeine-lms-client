<template>
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
			<h3 class="page-header">Login</h3>
			<form action="">
				<div class="alert alert-danger" v-if="loginError">
					<p>É obrigatório preencher o e-mail e a senha</p>
				</div>
		    	<div class="form-group" :class="{'has-error': loginError}">
		    		<label for="email" class="control-label">E-mail</label>
		    		<input type="email" class="form-control" id="email" v-model="user.email">
		    	</div>
		    	<div class="form-group" :class="{'has-error': loginError}">
		    		<label for="password" class="control-label">Senha</label>
		    		<input type="password" class="form-control" id="password" v-model="user.password">
		    	</div>
		    	<button class="btn btn-primary" @click.prevent="authentication()" :disabled="!isValid">Entrar</button>
		    </form>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
import {isEmpty} from 'lodash'

export default {
  name: 'autn-login',
  data () {
    return {
      msg: 'Bem vindo ao Caffeine Dashboard',
      user: {
        email: '',
        password: ''
      },
      loginError: false
    }
  },
  computed: {
    isValid () {
      return !isEmpty(this.user.email) && !isEmpty(this.user.password)
    }
  },
  methods: {
    ...mapActions(['attemptLogin']),
    authentication: function () {
      const user = this.user
      this.attemptLogin({...user})
        .then(() => {
          this.$router.push('/dashboard')
        })
    }
  }
}
</script>
