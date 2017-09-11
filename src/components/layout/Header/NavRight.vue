<template>
  <ul class="nav navbar-nav navbar-right">
    <router-link to="/contato" tag="li" exact @click.native="toggleNavBar">
      <a>Contato</a>
    </router-link>
    <router-link to="/login" tag="li" v-if="!isLogged" exact @click.native="toggleNavBar">
      <a>Login</a>
    </router-link>
    <li class="dropdown" :class="{'open': isOpenDropUser}" v-if="isLogged">
			<a class="dropdown-toggle" data-toggle="dropdown" href="javascript:{}" @click="toggleDropDownUser()">{{ currentUser.name }} <span class="caret"></span></a>
			<ul class="dropdown-menu" aria-labelledby="themes">
				<li><a href="javascript:{}">Meu perfil</a></li>
				<li class="divider"></li>
				<li><a href="javascript:{}">Sair</a></li>
			</ul>
		</li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      isOpenDropUser: false
    }
  },
  computed: {
    ...mapGetters(['isLogged', 'currentUser'])
  },
  methods: {
    toggleNavBar: function () {
      this.$emit('toggleNavBar')
    },
    toggleDropDownUser () {
      this.isOpenDropUser = !this.isOpenDropUser
    }
  }
}
</script>
