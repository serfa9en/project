<template>
    <div class="settings" v-show="showComponent">
        <div 
          class="button" 
          id="catalog"
          :style="[{ 'background-color': `${ this.$store.getters.getCatalog }` },
                  { 'color': `${ this.$store.getters.getCatalogColor }` }]"
          v-on:click="setStep(1)">
            <p>Каталог</p>
        </div>
        <div 
          class="button" 
          id="history"
          :style="[{ 'background-color': `${ this.$store.getters.getHistory }` },
                  { 'color': `${ this.$store.getters.getHistoryColor }` }]"
          v-on:click="setStep(2)">
            <p>Моя история</p>
        </div>
        <div 
          class="button" 
          id="profile"
          :style="[{ 'background-color': `${ this.$store.getters.getProfile }` },
                  { 'color': `${ this.$store.getters.getProfileColor }` }]"
          v-on:click="setStep(3)">
            <p>Личный кабинет</p>
        </div>
        <div class="exit-button" v-on:click="exit">
            <p>Выход</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header',
  computed: {
    showComponent () {
        if (this.$store.getters.getHeader === true) {
            this.setElem()
        }
        return this.$store.getters.getHeader
    }
  },
  methods: {
    setElem: function () {
        this.$store.dispatch('setCatalog', {
                data: '#FFD9D9'
            })
            this.$store.dispatch('setCatalogColor', {
                data: '#621216'
            })

        this.$store.dispatch('setStep', {
            data: 'catalog'
        })
        /*
        //var step
        console.log(this.$store.getters.getStep)
        switch (this.$store.getters.getStep) {
            case 'catalog': {
                //step = document.getElementById('catalog')
                break
            }
            case 'history': {
                //step = document.getElementById('history')
                break
            }
            case 'profile': {
                //step = document.getElementById('profile')
                break
            }
        }
        var ss = document.getElementById('profile').value
        ss.style.backgroundColor = "#FFD9D9"

*/

    },
    setStep: function (val) {
        switch (val) {
            case 1: {
                this.$store.dispatch('setStep', { data: 'catalog' }) 

                this.$store.dispatch('setCatalog', { data: '#FFD9D9' }) 
                this.$store.dispatch('setCatalogColor', { data: '#621216' }) 

                this.$store.dispatch('setHistory', { data: '#621216' }) 
                this.$store.dispatch('setHistoryColor', { data: '#FFD9D9' }) 

                this.$store.dispatch('setProfile', { data: '#621216' }) 
                this.$store.dispatch('setProfileColor', { data: '#FFD9D9' }) 
                break
            }
            case 2: {
                this.$store.dispatch('setStep', { data: 'history' }) 
                
                this.$store.dispatch('setCatalog', { data: '#621216' }) 
                this.$store.dispatch('setCatalogColor', { data: '#FFD9D9' }) 

                this.$store.dispatch('setHistory', { data: '#FFD9D9' }) 
                this.$store.dispatch('setHistoryColor', { data: '#621216' }) 

                this.$store.dispatch('setProfile', { data: '#621216' }) 
                this.$store.dispatch('setProfileColor', { data: '#FFD9D9' }) 
                break
            }
            case 3: {
                this.$store.dispatch('setStep', { data: 'profile' }) 
                
                this.$store.dispatch('setCatalog', { data: '#621216' }) 
                this.$store.dispatch('setCatalogColor', { data: '#FFD9D9' }) 

                this.$store.dispatch('setHistory', { data: '#621216' }) 
                this.$store.dispatch('setHistoryColor', { data: '#FFD9D9' }) 

                this.$store.dispatch('setProfile', { data: '#FFD9D9' }) 
                this.$store.dispatch('setProfileColor', { data: '#621216' }) 
                break
            }
        }
    },
    exit: function () {
        this.$store.dispatch('setHeaderStatus', {
            data: false
        })
        this.$store.dispatch('setAuthStatus', {
            data: true
        })
        this.$store.dispatch('setStep', {
            data: null
        })
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
    height: 100px;
    background: #8B282E;
    display: flex;
    text-align: center;
}

.button {
    width: 200px;
    height: 100%;
    border: white 2px solid;
    justify-content: center;
    align-items: center;
    text-align: center;
    bottom: 0;
    display: flex;
    font-size: 24px;
    cursor: pointer;
}

.button:hover {
    background: #BF262F;
    color: #FFD9D9;
}

.exit-button {
    width: 200px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    bottom: 0;
    display: flex;
    font-size: 24px;
    color: #FFD9D9;
    cursor: pointer;
}
</style>