export const GET_USERS_LIST = state => state.users;
export const GET_AMOUNT = state => state.amount;
export const GET_PAGE = state => state.page;
export const GET_USER_ID = (state) => (username) => state.users.find(el => el.login.username === username);