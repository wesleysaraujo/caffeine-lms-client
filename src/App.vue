<template>
  <div id="app">
    <page-loader></page-loader>
    <main-header></main-header>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import MainHeader from './components/layout/Header/Main'

export default {
  name: 'app',
  components: {MainHeader}
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
