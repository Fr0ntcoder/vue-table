<template lang="pug">
header.header
    .container  
        h1.header-title {{title}}
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    height: 200px;
    background: #000;
    align-items: center;
    flex: 0 0 auto;
    &-title {
        font-size: 35px;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
    }
}
</style>