<template>
  <ul class="nav navbar-nav navbar-right">
    <router-link to="/login" tag="li" exact @click.native="toggleNavBar">
      <a>Login</a>
    </router-link>
    <router-link to="/contato" tag="li" exact @click.native="toggleNavBar">
      <a>Contato</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  methods: {
    toggleNavBar: function () {
      this.$emit('toggleNavBar')
    }
  }
}
</script>