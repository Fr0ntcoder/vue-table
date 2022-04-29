<template lang="pug">
.wrapper
  component(:is="layout")
    router-view
</template>
<script>
import Main from "@/layouts/Main"
import Empty from "@/layouts/Empty"
export default {
  components: {
    Main,
    Empty
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "empty"
    }
  },
  methods: {
  },
}
</script>
<style lang="scss">
@import url("./assets/css/main.css");
#app {
  height: 100%;
}
.wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background: $mainColor;
}
</style>
