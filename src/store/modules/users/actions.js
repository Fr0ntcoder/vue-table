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

}

export const GET_AMOUNT_USERS = async ({commit},amount) => {
    commit("SET_AMOUNT_USERS",amount)
}

export const GET_PAGE_USERS = async ({commit},page) => {
    commit("SET_PAGE_USERS",page)
}

export const PAGE_NEXT = ({commit}) => {
    commit("SET_PAGE_NEXT")
}

export const PAGE_PREV = ({commit}) => {
    commit("SET_PAGE_PREV")
}