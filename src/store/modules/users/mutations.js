export const SET_USERS = (state,data) => {
    state.users = data;
}
export const SET_AMOUNT_USERS = (state,counter) => {
    state.amount = counter;
}

export const SET_PAGE_USERS = (state,page) => {
    state.page = page;
}

export const SET_PAGE_NEXT = (state) => {
    state.page++;
}

export const SET_PAGE_PREV = (state) => {
    state.page--;
}