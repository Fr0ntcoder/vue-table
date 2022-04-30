import Users from "@/api/Users";

export const GET_USERS = async ({commit,state}) => {
    const params = {
        page: state.page,
        amount: state.amount
    }
    try {
        const response = await Users.all(params);
        commit("SET_USERS",response.data.results) 
        localStorage.setItem("users",JSON.stringify(response.data.results))
    }catch(e) {
        console.error(e)
    }
    /* Users.all(params).then(response => {
        commit("SET_USERS",response.data.results)
        localStorage.setItem("users",JSON.stringify(response.data.results))
    }) */

}

export const GET_AMOUNT_USERS = async ({commit,state},amount) => {
    try {
        const response = await Users.amountUsers(state.page,amount)
        commit("SET_USERS",response.data.results) 
        localStorage.setItem("users",JSON.stringify(response.data.results))
        commit("SET_AMOUNT_USERS",amount)
    }catch(e) {
        console.error(e)
    }
    /* Users.amountUsers(state.page,amount).then(response => {
        commit("SET_USERS",response.data.results)
        localStorage.setItem("users",JSON.stringify(response.data.results))
    })
    commit("SET_AMOUNT_USERS",amount) */
}

export const GET_PAGE_USERS = async ({commit,state},page) => {
    try {
        const response = await Users.pageUsers(state.amount,page)
        commit("SET_USERS",response.data.results)
        localStorage.setItem("users",JSON.stringify(response.data.results))
        commit("SET_PAGE_USERS",page)
    }catch(e) {
        console.error(e)
    }
    /* Users.pageUsers(state.amount,page).then(response => {
        commit("SET_USERS",response.data.results)
        localStorage.setItem("users",JSON.stringify(response.data.results))
    })
    commit("SET_PAGE_USERS",page) */
}

export const PAGE_NEXT = ({commit}) => {
    commit("SET_PAGE_NEXT")
}

export const PAGE_PREV = ({commit}) => {
    commit("SET_PAGE_PREV")
}