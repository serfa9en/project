export function getName (number) {
    switch (number) {
        case 0: return 'Фамилия Имя Отчество'
      }
} 

export function getPassport (number) {
    let data = []
    switch (number) {
        case 0: {
            data[0] = '1234'
            data[1] = '123456'
            data[2] = 'Выдан отделом МВД по краю'
            data[3] = '07.07.2020'
        }
    }
    return data
} 

export function getAdress (number) {
    let data = []
    switch (number) {
        case 0: {
            data[0] = 'г.Пермь, ул. Какая-то, д.6, кв.111'
            data[1] = 'г.Пермь, ул. Какая-то, д.6, кв.111'
        }
    }
    return data
} 

export function getDrive (number) {
    switch (number) {
        case 0: return 'Данные...'
    }
} 

export function getData (number) {
    let data = []
    switch (number) {
        case 0: {
            data[0] = 'login'
            data[1] = '********'
            data[2] = 'password'
        }
    }
    return data
} 