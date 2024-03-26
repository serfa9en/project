<template>
    <div class="settings" v-show="showComponent">
        <div class="text">
            <p class="title">{{ this.nameUsr }}</p>
            <p class="title-block">Паспорт</p>
            <p>Серия, номер: {{ this.passportUsr[0] }} {{ this.passportUsr[1] }}</p>
            <p>Выдан: {{ this.passportUsr[2] }}</p>
            <p>Дата выдачи: {{ this.passportUsr[3] }}</p>
            <hr>
            <p class="title-block">Адреса</p>
            <p>Адрес регистрации: {{ this.adressUsr[0] }}</p>
            <p>Адрес проживания: {{ this.adressUsr[1] }}</p>
            <hr>
            <p class="title-block">Водительское удостоверение</p>
            <p>{{ this.driveUsr }}</p>
            <hr>
            <p class="title-block">Учетная запись</p>
            <p>Логин: {{ this.dataUsr[0] }}</p>
            <p>Пароль: {{ this.dataUsr[1] }}</p>
            <div class="button">Посмотреть<br>пароль</div>
            <hr>
            <div class="edit">
                <div class="button">Редактировать</div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    getName,
    getPassport,
    getAdress,
    getDrive,
    getData
} from '../../store/profile'

export default {
    name: 'profile',
    data () {
        return {
            nameUsr: null,
            passportUsr: [],
            adressUsr: [],
            driveUsr: null,
            dataUsr: []
        }
    },
    computed: {
        showComponent() {
            if (this.$store.getters.getStep === 'profile') {
                this.setData()
            }
            return this.$store.getters.getStep === 'profile'
        }
    },
    methods: {
        setData: function () {
            this.nameUsr = getName(0)
            this.passportUsr = getPassport(0)
            this.adressUsr = getAdress(0)
            this.driveUsr = getDrive(0)
            this.dataUsr = getData(0)
        }   
    }
}

</script>


<style scoped>
.settings {
    width: 1200px;
    height: auto;

    text-align: center;

    border: 1px solid #621216;
    border-radius: 10px;

    margin: 40px;
}
hr {
    width: 100%;
    border: 1px solid #621216;
}
.text {
    width: 90%;
    height: 100%;
    text-align: left;
    color: #621216;
}

.title {
    font-size: 40px;
    font-weight: 700;
}
.title-block {
    font-size: 30px;
    font-weight: 700;
}

.button {
    width: 200px;
    height: 50px;
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

}

.edit {
    width: 100%;
    display: flex;
    text-align: center;

    justify-content: center;
    align-items: center;
    bottom: 0;
    margin: 20px;
}
</style>