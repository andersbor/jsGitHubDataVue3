const baseurl = "https://api.github.com"

Vue.createApp({
    data() {
        return {
            username: null,
            userinfo: null,
            errormessage: null,
            repos: []
        }
    },
    methods: {
        async getUserInfo(username) {
            url = baseurl + "/users/" + username
            try {
                const response = await axios.get(url)
                this.userinfo = await response.data
                this.errormessage = null
            } catch (ex) {
                console.log(ex.message)
                this.errormessage = ex.message
                this.userinfo = null
                this.repos = null
            }
        },
        async getRepos(username) {
            url = baseurl + "/users/" + username + "/repos?per_page=30"
            console.log(url)
            try {
                const response = await axios.get(url)
                this.repos = await response.data
                this.errormessage = null
            } catch (ex) {
                console.log(ex.message)
                this.errormessage = ex.message
                this.repos = []
            }
        }
    }
}).mount("#app")