<template>
	<ul class="nav navbar-nav">
		<li class="dropdown">
			<a class="dropdown-toggle" data-toggle="dropdown" href="#" id="themes">Cursos <span class="caret"></span></a>
			<ul class="dropdown-menu" aria-labelledby="themes">
				<li><a href="../default/">Cursos</a></li>
				<li class="divider"></li>
				<li><a href="../cerulean/">Cerulean</a></li>
				<li><a href="../cosmo/">Cosmo</a></li>
				<li><a href="../cyborg/">Cyborg</a></li>
				<li><a href="../darkly/">Darkly</a></li>
				<li><a href="../flatly/">Flatly</a></li>
				<li><a href="../journal/">Journal</a></li>
			</ul>
		</li>
		<li>
			<a href="../help/">Ajuda</a>
		</li>
		<router-link to="/" tag="li" exact @click.native="toggleNavBar">
			<a>Blog</a>
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