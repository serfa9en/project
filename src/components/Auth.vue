<template>
    <div v-show="showComponent" class="settings">
        <h1>Авторизация</h1>
        <form>
            <div>
                <input placeholder="login" id="login">
            </div>
            <div>
                <input type="password" placeholder="password" id="password">
            </div>
        </form>
        <div class="button" v-on:click="input">
            <div class="text">
                <p>Вход</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'authorization',
  computed: {
    showComponent () {
        if (this.$store.getters.getAuthStatus === true) {
            this.setData()
        }
        return this.$store.getters.getAuthStatus
    }
  },
  methods: {
    setData: function () {
        document.getElementById('login').value = ""
        document.getElementById('password').value = ""
    },
    input: function () {
        let login = document.getElementById('login').value
        let pass = document.getElementById('password').value

        if(login === '' || pass === '')
            alert('Введите Ваши учетные данные')
        else {

            this.$store.dispatch('setHeaderStatus', {
                data: true
            })
            this.$store.dispatch('setAuthStatus', {
                data: false
            })
            this.$store.dispatch('setCatalog', {
                data: '#FFD9D9'
            })
            this.$store.dispatch('setCatalogColor', {
                data: '#621216'
            })
            this.$store.dispatch('setHistory', { data: '#621216' }) 
            this.$store.dispatch('setHistoryColor', { data: '#FFD9D9' }) 

            this.$store.dispatch('setProfile', { data: '#621216' }) 
            this.$store.dispatch('setProfileColor', { data: '#FFD9D9' }) 

        }
    }
  }
}

</script>

<style scoped>
.settings {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    height: auto;
    text-align: center;
    margin-top: 200px;

}

h1 {
    color: #621216;
}

input {
    width: 300px;
    height: 35px;
    font-size: 24px;
    padding: 5px 5px 5px 10px;
    border: 1px #8B282E solid;
    border-radius: 4px;
    background: #FFECD9;
    margin: 10px;
    color: #621216;
}

input:focus {
    outline: none;
    border: 2px #8B282E solid;
    box-shadow: 0px 10px 10px 0px rgba(139, 40, 46, 0.24);
    color: #621216;
}

.button {
    width: 100%;
    height: auto;
    text-align: center;

    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 0;

    cursor: pointer;
}

.text {
    width: 315px;
    border: 1px solid #8B282E;
    border-radius: 5px;
    background: #8B282E;
    color: #FFD9D9;
    font-size: 26px;
    padding: 0;
    line-height: 0;
}

</style>