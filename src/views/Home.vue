<template lang="pug">
.container
	v-table-amount
	v-table
		v-table-head(:list="headList")
		v-table-item(v-for="item of GET_USERS_LIST" :data="item")
	v-table-pagination
</template>
<script>
import vTable from "@/components/table/v-table"
import vTableHead from "@/components/table/v-table-head"
import vTableItem from "@/components/table/v-table-item"
import vTableAmount from "@/components/table/v-table-amount"
import vTablePagination from "@/components/table/v-table-pagination"
import {mapActions,mapGetters} from "vuex"
export default {
	data() {
		return {
			headList: ["Image","Gender","Name","Surname","Email","Phone","Country","Link"]
		}
	},
	components: {
			vTable,
			vTableHead,
			vTableItem,
			vTableAmount,
			vTablePagination
	},
	computed: {
		...mapGetters(["GET_USERS_LIST"])
	},
	methods: {
		...mapActions(["GET_USERS"]),
	},
	mounted() {
		this.GET_USERS()
	}
}
</script>
<style scoped>

</style>
