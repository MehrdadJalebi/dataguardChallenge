<template>
  <b-card body-class="plugin-card">
    <b-card-body class="info">
      <div class="w-75">
        <b-card-text class="plugin-name">
          <span>
            {{ info.title }}
          </span>
        </b-card-text>
        <b-card-text class="desc">
          {{ info.description }}
        </b-card-text>
      </div>
      <div class="text-center w-25">
        <b-form-checkbox class="ml-2" v-model="enabled" switch size="lg" />
        <small :class="statusClass">{{ status }}</small>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      enabled: true
    }
  },
  watch: {
    enabled () {
      this.$emit('toggled', this.info.id)
    },
    info: {
      handler (newVal) {
        if (newVal) {
          this.enabled = newVal.status === 'active'
        }
      },
      immediate: true
    }
  },
  computed: {
    statusClass () {
      return this.enabled ? 'text-success' : 'text-danger'
    },
    status () {
      return this.enabled ? 'Allowed' : 'Blocked'
    }
  }
}
</script>
<style lang="scss">
$success: #5BC88D;
$danger: #C63040;
.card {
  box-shadow: 0px 2px 10px 0 rgb(0 0 0 / 10%);
  background: var(--elements-primary);
  border-radius: 0.5em;
  color: var(--text-primary);
  height: 12rem;
  margin-bottom: 2rem;

  .plugin-card {
    padding: 0;

    .info {
      padding: 1.25rem;
      display: flex;
      flex-flow: row;
    }

    .plugin-name {
      font-weight: 800;
      font-size: 1.2rem;
    }
      .desc {
        font-size: 0.85rem;
        margin-bottom: 0;
        margin-left: 0.25rem;
      }
  }
}
.custom-control-label::before{
  background-color: $danger;
}
.custom-switch.b-custom-control-lg .custom-control-label::after {
  background-color: white;
}
.custom-control-input:checked ~ .custom-control-label::before {
  background-color: $success;
}

@media (max-width: 575px) {
  .card {
    height: auto;
    min-height: 12rem;
    max-width: 80vw;
    margin: 0 auto 2rem;
  }
}
</style>
