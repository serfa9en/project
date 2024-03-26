<template>
    <div v-show="showComponent">
        <History 
            v-for="item in items" 
            v-bind:key="item.id" 
            v-bind:title="item.title"
            v-bind:imgPath="item.imgPath"
            v-bind:mileage="item.mileage"
            v-bind:engine="item.engine"
            v-bind:driveUnit="item.driveUnit"
            v-bind:transmission="item.transmission"
            v-bind:cost="item.cost"
            v-bind:date="item.date"
            v-bind:costAll="item.costAll"
            >
        </History>

    </div>
</template>

<script>
import History from './container/History.vue'
import {
    getCount, 
    getTitle,  
    getImgPath,
    getMileage,
    getEngine,
    getDriveUnit,
    getTransmission,
    getCost,
    getDate,
    getCostAll
} from '../../store/history'

export default {
    name: 'history',
    components: {
        History
    },
    data () {
        return {
            items: [{}]
        }
    },
    computed: {
        showComponent() {
            if (this.$store.getters.getStep === 'history') {
                this.setConteiner()
            }
            return this.$store.getters.getStep === 'history'
        }
    },
    methods: {
        setConteiner: function () {
            let count = getCount()+1
            this.items = []
            for (let i = 0; i < count; i++) {
                this.items.push({
                    id: i,
                    title: getTitle(i),
                    imgPath: getImgPath(i),
                    mileage: getMileage(i),
                    engine: getEngine(i),
                    driveUnit: getDriveUnit(i),
                    transmission: getTransmission(i),
                    cost: getCost(i),
                    date: getDate(i),
                    costAll: getCostAll(i)
                })
            }
            //this.$store.dispatch('setConteinerCatalog', { data: true }) 
        }
    }
}

</script>