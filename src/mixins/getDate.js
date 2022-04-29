export default {
    computed: {
        dateFilter() {
            return (value) => {
                const options = {};
                options.day = "2-digit";
                options.month = "long";
                options.year = "numeric"; 

                return new Date(value).toLocaleString("ru",options)
            }
        }
    }
}