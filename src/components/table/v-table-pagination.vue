<template lang="pug">
.table-pagination__wrap
    a(href="#" @click.prevent="handlerPrev").table-pagination__prev
        i.fa-solid.fa-angle-left
    ul.table-pagination__list
        li.table-pagination__item(v-for="item of pageMax")
            a(href="#" :data-page="pageMax" :class="{'active': GET_PAGE === item}" @click.prevent="handlerPage(item)").table-pagination__link {{item}}
    a(href="#" @click.prevent="handlerNext").table-pagination__next
        i.fa-solid.fa-angle-right
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    data() {
        return {
            pageMax: 10
        }  
    },
    computed: {
        ...mapGetters(["GET_PAGE"])
    },
    methods: {
        ...mapActions(["PAGE_USERS","GET_PAGE_USERS","PAGE_NEXT","PAGE_PREV"]),
        handlerPage(n) {
            this.GET_PAGE_USERS(n);
        },
        handlerNext() {
            if(this.GET_PAGE < this.pageMax) {
                this.PAGE_NEXT()
                this.GET_PAGE_USERS(this.GET_PAGE);
            }
        },
        handlerPrev() {
            if(this.GET_PAGE != 1) {
                this.PAGE_PREV()
                this.GET_PAGE_USERS(this.GET_PAGE);
            }
        }
    }
}
</script>

<style lang="scss">
.table {
    &-pagination {
        &__wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            justify-content: center;
        }
        &__list {
            display: flex;
            justify-content: center;
            margin: 0 50px;
        }
        &__item {
            margin-right: 10px;
        }
        &__prev {
            font-size: 20px;
            padding: 15px;
            color: #000;
        }
        &__next {
            font-size: 20px;
            padding: 15px;
            color: #000;
        }
        &__link {
            font-size: 20px;
            padding: 15px;
            color: #000;
            &.active {
                background: #000;
                color: #fff;
            }
        }
    }
}
</style>