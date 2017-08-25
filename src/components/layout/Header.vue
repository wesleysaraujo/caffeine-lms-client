<template>
	<div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Caffeine LMS</router-link>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
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
            <li>
              <router-link to="/">Blog</router-link>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/login">Login</router-link>
            </li>
            <li><router-link to="/contato">Contato</router-link></li>
          </ul>

        </div>
      </div>
    </div>
</template>

<script>
	export default {
	  name: 'header'
	}
</script>