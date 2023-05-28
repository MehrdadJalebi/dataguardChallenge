<template>
  <b-container>
    <b-row class="mt-5">
      <b-col
        v-for="(plugin, index) in tabPlugins"
        :key="index"
        cols="12"
        xl="4"
        lg="6"
        md="12"
        sm="12"
      >
        <plugin-card :info="plugin" @toggled="togglePlugin"/>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex'
import PluginCard from '~/components/PluginCard'
import { getTab } from '~/services'

export default {
  components: {
    PluginCard,
  },
  data() {
    return {
      loading: false,
      tabPlugins: [],
      tab: {},
    }
  },
  watch: {
    $route: {
      handler(newVal) {
        this.init()
      },
      immediate: true,
    },
  },
  computed: {
    ...mapGetters({
      plugins: 'plugins'
    }),
  },
  created() {
    this.init()
  },
  methods: {
    ...mapActions({
      updateTab: 'updateTab'
    }),
    async init() {
      this.tab = await getTab(this.$route.params.tab)
      this.setTabPlugins()
    },
    setTabPlugins() {
      this.tabPlugins = []
      Object.entries(this.plugins).forEach((item) => {
        if (this.tab.active.includes(item[0])) {
          this.setTabPluginItem(item, 'active')
        } else if (this.tab.disabled.includes(item[0])) {
          this.setTabPluginItem(item, 'disabled')
        } else if (this.tab.inactive.includes(item[0])) {
          this.setTabPluginItem(item, 'inactive')
        }
      })
    },
    setTabPluginItem(item, status) {
      this.tabPlugins.push({
        id: item[0],
        title: item[1].title,
        description: item[1].description,
        status
      })
    },
    togglePlugin(e) {
      if (this.tab.active.includes(e)) {
        this.tab.inactive.push(e)
        const itemIndex = this.tab.active.indexOf(e)
        this.tab.active.splice(itemIndex, 1)
      } else if (this.tab.inactive.includes(e)) {
        this.tab.active.push(e)
        const itemIndex = this.tab.inactive.indexOf(e)
        this.tab.inactive.splice(itemIndex, 1)
      }
      const payload = { 
        tab: this.tab,
        tabName: this.$route.params.tab
      }
      this.updateTab(payload)
    },
  },
}
</script>        
<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}
</style> 
