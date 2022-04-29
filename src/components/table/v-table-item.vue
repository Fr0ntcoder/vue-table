<template lang="pug">
tr.table-row
    td 
        img(:src="`${data.picture.large}`").table-img
    td {{data.gender}}
    td {{data.name.first}}
    td {{data.name.last}}
    td {{data.email}}
    td {{data.phone}}
    td {{data.location.country}}
    td 
        router-link(:to="{name: 'User',params: {name: data.login.username}}").table-link Перейти
</template>
<script>
export default {
    props: ["data"],
}
</script>

<style lang="scss">
.table {
    background: #fff;
    &-link {
        border-radius: 5px;
        padding: 10px 25px;
        transition: all 0.3s ease-in-out;
        background: linear-gradient(90deg,#000,rgba(0,0,0,.9));
        color: #fff;
    }
    &-row {
        width: 100%;
        transition: all 0.3s ease-in-out;
        border-bottom: 1px solid #efecec;
        cursor: pointer;
        &:hover {
            background: #efecec;
        }
        & td {
            padding: 15px;
            vertical-align: middle;
            text-align: center;
        }
    }
    &-img {
        width: 100px;
        border-radius: 50%;
    }
}
</style>