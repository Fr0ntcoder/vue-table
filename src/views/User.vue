<template lang="pug">
.container
	a(href="#" @click.prevent="this.$router.go(-1)").user-back
		i.fa-solid.fa-arrow-left
		span Вернуться назад
	.user-wrap
		.user-left
			span.user-img
				img(:src="`${getUser.picture.large}`")
			h4.user-left__title Login info
			.user-left__wrap
				user-info(title="username" :value="getUser.login.username")
				user-info(title="password" :value="getUser.login.password")
		.user-right
			h3.user-right__title {{`${getUser.name.first} ${getUser.name.last}`}}
			h4.user-right__subtitle Personal info
			user-info(title="Title" :value="getUser.name.title")
			user-info(title="First name" :value="getUser.name.first")
			user-info(title="Last Name" :value="getUser.name.last")
			user-info(title="Gender" :value="getUser.gender")
			user-info(title="Date of birthday " :value="dateFilter(getUser.dob.date)")
			user-info(title="Age" :value="getUser.dob.age")
			h4.user-right__subtitle Adress
			user-info(title="Street" :value="`${getUser.location.street.number} ${getUser.location.street.name}`")
			user-info(title="City" :value="getUser.location.city")
			user-info(title="State" :value="getUser.location.postcode")
			user-info(title="Phone" :value="getUser.phone")
</template>
<script>
import userInfo from "@/components/user/user-info"
import getDate from "@/mixins/getDate"
import {mapGetters,mapActions} from "vuex"
export default {
  data() {
	  return {
	  }
  },
  mixins: [getDate],
  components: {
	  userInfo
  },
  methods: {
    ...mapActions(["GET_USERS"])
  },
  computed: {
    ...mapGetters(["GET_USERS_LIST","GET_USER_ID"]),
    getUser() {
      	return this.GET_USER_ID(this.$route.params.name)
    }
  }
}
</script>
<style lang="scss">
.user {
	&-back {
		display: inline-block;
		padding: 10px 15px;
		border-radius: 5px;
		margin-bottom: 30px;
		transition: all 0.3s ease-in-out;
		background: #000;
		color: #fff;
		&:hover {
			opacity: .8;
		}
		& svg {
			margin-right: 10px;
		}
	}
	&-wrap {
		padding: 30px;
		background: #fff;
	}
	&-img {
		display: block;
		margin-bottom: 15px;
		border-radius: 5px;
	}
	&-left {
		width: 30%;
		&__wrap {

		}
		&__title {
			font-size: 25px;
			text-align: center;
			margin-bottom: 30px;
		}
	}
	&-right {
		width: 70%;
		padding-left: 50px;
		&__title {
			font-size: 25px;
			margin-bottom: 30px;
		}
		&__subtitle {
			font-size: 20px;
			margin-bottom: 15px;
		}
	}
	&-wrap {
		display: flex;
	}
}
</style>
