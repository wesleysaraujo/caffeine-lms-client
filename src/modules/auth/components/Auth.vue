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
		    		<input type="email" class="form-control" id="email" v-model="login.email">
		    	</div>
		    	<div class="form-group" :class="{'has-error': loginError}">
		    		<label for="password" class="control-label">Senha</label>
		    		<input type="password" class="form-control" id="password" v-model="login.password">
		    	</div>
		    	<button class="btn btn-primary" @click.prevent="authentication()">Entrar</button>
		    </form>
		</div>
	</div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Bem vindo ao Caffeine Dashboard',
      login: {
        email: '',
        password: ''
      },
      loginError: false
    }
  },
  methods: {
    authentication: function () {
      if (this.login.email && this.login.password) {
        alert('Olá ' + this.login.email)
      } else {
        this.loginError = true
      }
    }
  },
  watch: {
    login: function (value) {
      console.log(value)
    }
  }
}
</script>