<template>
    <div class="settings">
        <transition name="fade">
            <div v-if="this.$store.getters.getStep === 'catalog'">
                <Catalog/>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="this.$store.getters.getStep === 'history'">
                <History/>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="this.$store.getters.getStep === 'profile'">
                <Profile/>
            </div>
        </transition>
    </div>
</template>

<script>
import Catalog from './view/CatalogView.vue'
import History from './view/HistoryView.vue'
import Profile from './view/ProfileView.vue'

export default {
  name: 'container',
  components: {
    Catalog,
    History,
    Profile
  }
}

</script>

<style scoped>
.settings {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;

}
</style>