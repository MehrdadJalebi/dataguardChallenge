<template>
  <div>
    <sidebar-menu :items="sidebarItems" class="sidebar-menu" />
    <Nuxt class="nuxt" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SidebarMenu from '~/components/SidebarMenu'
export default {
  components: {
    SidebarMenu
  },
  created () {
    this.getAllPlugins()
    this.getAllTabdata()
  },
  computed: {
    sidebarItems () {
      return [
        {
          title: 'Marketing',
          route: '/tab1',
          icon: 'b-icon-grid-fill'
        },
        {
          title: 'Finance',
          route: '/tab2',
          icon: 'b-icon-currency-exchange'
        },
        {
          title: 'Personnel',
          route: '/tab3',
          icon: 'b-icon-clipboard-check'
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      getAllPlugins: 'getAllPlugins',
      getAllTabdata: 'getAllTabdata'
    })
  }
}
</script>

<style>
:root {
  --text-primary: hsl(200, 15%, 8%);
  --background-primary: hsl(0, 0%, 100%);
  --elements-primary: hsl(0, 0%, 100%);
  --input-primary: hsl(0, 0%, 52%);
}

body {
  background-color: var(--background-primary);
}

.container {
  max-width: 100%;
}
.nuxt {
  width: calc(100vw - 335px);
  margin-left: 320px;
}
.sidebar-menu {
  width: 320px;
}
</style>
