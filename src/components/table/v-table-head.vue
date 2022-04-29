<template lang="pug">
thead.table-head
    tr
        th(v-for="(item,i) of list" :key="i") {{item}}
</template>

<script>
export default {
    props: {
        list: Array
    }
}
</script>

<style lang="scss">
.table {
    border-collapse: collapse;
    &-head {
        border-bottom: 1px solid #dbd9d9;
        background: #fdf7f7;
        & th {
            font-size: 16px;
            font-weight: bolder;
            text-align: center;
            padding: 15px;
        }
    }
}
</style>