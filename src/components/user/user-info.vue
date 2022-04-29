<template lang="pug">
.user-info
    span {{title}}
    span {{value}} 
</template>

<script>
export default {
    props: ["title","value"]
}
</script>

<style lang="scss">
.user {
    &-info {
        display: flex;
        font-size: 20px;
        padding: 15px 0;
        margin-bottom: 15px;
        border-bottom: 1px solid $mainColor;
        justify-content: space-between;
        &:first-child {
            border-top: 1px solid $mainColor;
        }
        &:last-child {
            border: none;
        }
        & span {
            width: 50%;
        }
    }
}
</style>