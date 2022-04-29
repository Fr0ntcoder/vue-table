import Users from "@/api/Users";

export const GET_USERS = ({commit,state}) => {
    const params = {
        page: state.page,
        amount: state.amount
    }
    Users.all(params).then(response => {
        commit("SET_USERS",response.data.results)
        localStorage.setItem("users",JSON.stringify(response.data.results))
    })

}

export const GET_AMOUNT_USERS = ({commit,state},amount) => {
    Users.amountUsers(state.page,amount).then(response => {
        commit("SET_USERS",response.data.results)
        localStorage.setItem("users",JSON.stringify(response.data.results))
    })
    commit("SET_AMOUNT_USERS",amount)
}

export const GET_PAGE_USERS = ({commit,state},page) => {
    Users.pageUsers(state.amount,page).then(response => {
        commit("SET_USERS",response.data.results)
        localStorage.setItem("users",JSON.stringify(response.data.results))
    })
    commit("SET_PAGE_USERS",page)
}

export const PAGE_NEXT = ({commit}) => {
    commit("SET_PAGE_NEXT")
}

export const PAGE_PREV = ({commit}) => {
    commit("SET_PAGE_PREV")
}