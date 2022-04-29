import Api from "./Api"

export default {
    all(params) {
        return Api.get(`?page=${params.page}&results=${params.amount}&seed=default`)
    },
    amountUsers(page,amount) {
        return Api.get(`?page=${page}&results=${amount}&seed=default`)
    },
    pageUsers(amount,page) {
        return Api.get(`?page=${page}&results=${amount}&seed=default`)
    }
}