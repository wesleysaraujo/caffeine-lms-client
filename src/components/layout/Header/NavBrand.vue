<template>
	<div class="navbar-header">
		<router-link to="/" class="navbar-brand">Caffeine LMS</router-link>
		<button 
			class="navbar-toggle" 
			type="button" 
			data-toggle="collapse" 
			data-target="#navbar-main" 
			@click.prevent="toggleNavBar">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
	</div>
</template>

<script>
export default {
  name: 'nav-brand',
  methods: {
    toggleNavBar: function () {
      this.$emit('toggleNavBar')
    }
  }
}
</script>
