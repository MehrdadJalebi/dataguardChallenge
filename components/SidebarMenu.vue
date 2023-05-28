<template>
  <b-sidebar
    v-model="toggle"
    :body-class="[{ 'all-disabled': !allEnabled }, 'sidebar']"
    header-class="p-0"
    no-header-close
  >
    <template #header>
      <nuxt-link to="/">
        <b-img src="/logo.png" alt="Logo" fluid class="logo" />
      </nuxt-link>
    </template>
    <div class="d-flex flex-column justify-content-between h-100">
      <b-nav class="py-3" vertical>
        <b-nav-item
          :active="item.route === $route.fullPath"
          v-for="(item, index) in items"
          :key="index"
          class="nav-item"
          :to="item.route"
        >
          <!--<font-awesome-icon icon="fa-grid" class="mr-1" />-->
          <component class="mr-2" :is="item.icon" />
          {{ item.title }}
        </b-nav-item>
      </b-nav>
      <div class="footer">
        <p class="pt-2">All plugins enabled</p>
        <b-form-checkbox v-model="allEnabled" switch size="lg" />
      </div>
      <div :class="[allEnabled ? 'success-sidebar-border' : 'danger-sidebar-border']"></div>
    </div>
  </b-sidebar>
</template>
<script>
import { BIconGridFill, BIconCurrencyExchange, BIconClipboardCheck } from 'bootstrap-vue'

export default {
  components: {
    BIconGridFill,
    BIconCurrencyExchange,
    BIconClipboardCheck
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      toggle: true,
      allEnabled: true
    }
  },
  computed: {
  }
}
</script>
<style lang="scss">
$sidebar-bg: #F1F1F1;
$sidebar-item-active-bg: #FFFFFF;
$sidebar-item-left-border: #C63040;
$primary-text: #1E1E1E;
$success: #5BC88D;
$danger: #C63040;

.sidebar {
  .logo {
    width: 100%;
  }
  background-color: $sidebar-bg;
  .nav-item {
    a {
      border-left: 5px solid transparent;
      color: $primary-text;
      padding: 1rem;
    }
    .active {
      background-color: $sidebar-item-active-bg;
      border-left: 5px solid $sidebar-item-left-border;
    }
  }
  .footer {
    margin-top: auto;
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    padding-bottom: 0;
  }
  .custom-switch.b-custom-control-lg .custom-control-label::before {
    height: 1.75rem;
    width: 3rem;
    border-radius: 1.5rem;
    border: 0px;
    background-color: $danger;
  }
  .custom-switch.b-custom-control-lg .custom-control-label::after {
    width: calc( 1.75rem - 5px );
    height: calc( 1.75rem - 5px );
    border-radius: 1.5rem;
    background-color: white;
  }
  .custom-switch.b-custom-control-lg .custom-control-input:checked ~ .custom-control-label::after {
    transform: translateX(1.25rem);
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    background-color: $success;
  }
}

.success-sidebar-border {
  padding: 2rem;
  background: linear-gradient(0deg, $success 0%, rgba(241,241,241,0) 75%);
}

.danger-sidebar-border {
  padding: 2rem;
  background: linear-gradient(0deg, $danger 0%, rgba(241,241,241,0) 75%);
}

.b-sidebar {
  display: block !important;
  transition: none !important;
  .b-sidebar-body {
    height: calc(100vh - 105px);
  }
}
</style>
