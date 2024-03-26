<template>
    <div class="settings" v-show="showComponent">
        <div class="conteiner">
            <img :src="imgItem">
            <div class="text">
                <p class="title">{{ title }}</p>
                <p class="obj"><b>Пробег:</b> {{ mileage }}</p>
                <p class="obj"><b>Двигатель:</b> {{ engine }}</p>
                <p class="obj"><b>Привод:</b> {{ driveUnit }}</p>
                <p class="obj"><b>Коробка передач:</b> {{ transmission }}</p>
                <p class="costNum">{{ cost }} руб / сут.</p>
            </div>
            <div>
                <div class="costt">
                    <p class="costNumm">{{ costAll }}</p>
                    <p>руб</p>
                </div>
                <p class="obj"><b>{{ date }}</b></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'containerCatalog',
    props: {
        title: String,
        imgPath: String,
        mileage: String,
        engine: String,
        driveUnit: String,
        transmission: String,
        cost: String,
        costAll: String,
        date: String
    },
    data () {
        return {
            number: null,
            img: null
        }
    },
    computed: {
        showComponent () {
            if(this.$store.getters.getConteinerCatalog === true) {
                this.setData()
            }
            return this.$store.getters.getConteinerCatalog
        },
        imgItem () {
            return require(`../../../assets/img/${ this.img }`)
        }
    },
    methods: {
        setData:function () {
            this.img = this.imgPath
        },
        order: function () {
            console.log('vjk')
        }
    }
}
</script>



<style scoped>
.settings {
    width: 1200px;
    height: 350px;

    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    border: 1px solid #621216;
    border-radius: 10px;

    margin: 40px;
}

.conteiner {
    width: 100%;
    height: 250px;

    display: flex;
    text-align: center;

    justify-content: center;
    align-items: center;
}

img {
    width: 250px;
    height: auto;
}

.text {
    width: 45%;
    height: 100%;

    text-align: left;
    padding-left: 40px;
}

.title {
    color: #621216;
    font-size: 30px;
    font-weight: 700;
}

.obj {
    color: #621216;
    font-size: 20px;
    line-height: 1em;
}

.cost {
    width: 200px;
    height: 100px;

    border: 1px solid #621216;
    color: #621216;
    font-size: 20px;
    border-radius: 5px;
    margin-bottom: 100px;
}
.costt {
    width: 200px;
    height: 100px;

    border: 1px solid #621216;
    color: #621216;
    font-size: 20px;
    border-radius: 5px;
    margin-bottom: 100px;
    line-height: 0;
}

.costNum {
    font-size: 24px;
    font-weight: 700;
    color: #621216;
    line-height: 0;
}

.costNumm {
    font-size: 30px;
    font-weight: 700;
    color: #621216;
    line-height: 0;
}

.button {
    width: 200px;
    height: 45px;
    background: #8B282E;
    color: #FFD9D9;
    border-radius: 5px;

    display: flex;
    text-align: center;

    justify-content: center;
    align-items: center;
    bottom: 0;

    font-size: 20px;
    font-weight: 700;

    margin-top: 50px;
}

.button:hover {
    background: #BF262F;
    cursor: pointer;
}
</style>