<template>
  <div>
    <sidebar-menu :items="sidebarItems" class="sidebar-menu" />
    <Nuxt class="nuxt" />
  </div>
</template>

<script>
import SidebarMenu from '~/components/SidebarMenu'
export default {
  components: {
    SidebarMenu,
  },
  created() {
    console.log('sadsdasd', this.$store)
    this.$store.dispatch("getAllPlugins");
  },
  computed: {
    sidebarItems() {
      return [
        {
          title: "Marketing",
          route: "/tab1",
          icon: "b-icon-grid-fill",
        },
        {
          title: "Finance",
          route: "/tab2",
          icon: "b-icon-currency-exchange",
        },
        {
          title: "Personnel",
          route: "/tab3",
          icon: "b-icon-clipboard-check",
        }, 
      ]
    },
  },
}
</script>

<style>
:root {
  --text-primary: hsl(200, 15%, 8%);
  --background-primary: hsl(0, 0%, 100%);
  --elements-primary: hsl(0, 0%, 100%);
  --input-primary: hsl(0, 0%, 52%);
}

:root.dark {
  --text-primary: hsl(0, 0%, 100%);
  --background-primary: hsl(207, 26%, 17%);
  --elements-primary: hsl(209, 23%, 22%);
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
