<template>
    <div v-show="showComponent">
        <!--
        <ul id="example-1">
            <li v-for="item in items" :key="item.message">
                {{ item.message }}
            </li>
        </ul>-->
        <Catalog 
            v-for="item in items" 
            v-bind:key="item.id" 
            v-bind:title="item.title"
            v-bind:imgPath="item.imgPath"
            v-bind:mileage="item.mileage"
            v-bind:engine="item.engine"
            v-bind:driveUnit="item.driveUnit"
            v-bind:transmission="item.transmission"
            v-bind:cost="item.cost"
            >
        </Catalog>

    </div>
</template>

<script>
import Catalog from './container/Catalog.vue'
import { 
    getCount, 
    getTitle,  
    getImgPath,
    getMileage,
    getEngine,
    getDriveUnit,
    getTransmission,
    getCost
} from '../../store/catalog'

export default {
    name: 'catalog',
    components: {
        Catalog
    },
    data () {
        return {
            items: [{}]
        }
    },
    computed: {
        showComponent() {
            if (this.$store.getters.getStep === 'catalog') {
                this.setConteiner()
            }
            return this.$store.getters.getStep === 'catalog'
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
                    cost: getCost(i)
                })
            }
            this.$store.dispatch('setConteinerCatalog', { data: true }) 
        }
    }
}

</script>
