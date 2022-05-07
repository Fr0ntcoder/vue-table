<template lang="pug">
.table-amount__wrap
    p.table-amount__text Количество отображаемых элементов:
    ul.table-amount__list  
        li(v-for="(item,i) of amountList" :key="i").table-amount__item
            a(href="#" :data-amount="`${item}`" :class="{'active': GET_AMOUNT === item}" @click.prevent="handlerAmount(item)").table-amount__link {{item}}
</template>

<script>
import {mapActions,mapGetters} from "vuex"
export default {
    data() {
        return {
            amountList: [10,25,50]
        }
    },
    computed: {
        ...mapGetters(["GET_AMOUNT"])
    },
    methods: {
        ...mapActions(["GET_AMOUNT_USERS","GET_USERS","GET_PAGE_USERS"]),
        handlerAmount(n) {
            this.GET_AMOUNT_USERS(n);
            this.GET_PAGE_USERS(1);
            this.GET_USERS();
        }
    }
}
</script>

<style lang="scss">
.table {
    &-amount {
        &__wrap {
            display: flex;
            font-size: 18px;
            margin-bottom: 30px;
        }
        &__text {
            margin-right: 20px;
        }
        &__list {
            display: flex;
        }
        &__item {
            margin-right: 15px;
            &:last-child {
                margin-right: 0;
            }
        }
        &__link {
            font-size: 18px;
            padding: 10px;
            color: #000;
            &.active {
                background: #000;
                border-radius: 5px;
                color: #fff;
            }
        }
    }
}
</style>