export default {
    users: JSON.parse(localStorage.getItem("users")) || [],
    page: 1,
    amount: 10
}