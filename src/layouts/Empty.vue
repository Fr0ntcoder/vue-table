<template lang="pug">
Header(title="User Info")
main.main
	router-view
Footer
</template>

<script>
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss">
.main {
    padding: 100px 0;
    flex: 1 0 auto;
}
</style>