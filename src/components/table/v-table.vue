<template lang="pug">
.table-wrap
    table.table
        slot
</template>

<script>
export default {

}
</script>

<style lang="scss">
.table {
    width: 100%;
    border: 1px solid #e4e1e1;
    &-wrap {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        overflow: hidden;
        margin-bottom: 50px;
    }
}
</style>