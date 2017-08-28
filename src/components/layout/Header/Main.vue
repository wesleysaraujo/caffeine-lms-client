<template>
	<div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <nav-brand @toggleNavBar="toggleNavCollapseIn" />
        <div class="navbar-collapse collapse" :class="{in: isCollapseIn}" id="navbar-main">
          <nav-left @toggleNavBar="toggleNavCollapseIn" />
          <nav-right @toggleNavBar="toggleNavCollapseIn" />
        </div>
      </div>
    </div>
</template>

<script>
import NavBrand from './NavBrand'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

export default {
  name: 'caffeine-header',
  components: {
    NavBrand,
    NavLeft,
    NavRight
  },
  data () {
    return {
      isCollapseIn: false
    }
  },
  methods: {
    toggleNavCollapseIn () {
      this.isCollapseIn = !this.isCollapseIn
    }
  }
}
</script>
