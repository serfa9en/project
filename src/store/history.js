
export function getCount () {
    return 3
}

export function getTitle (number) {
    switch (number) {
        case 0: return 'Audi A5, 2019'
        case 1: return 'Kia Soul, 2017'
        case 2: return 'Kia Carnival, 2023'
      }
} 

export function getMileage (number) {
    switch (number) {
        case 0: return '73 000 км'
        case 1: return '131 500 км'
        case 2: return '0'
      }
} 

export function getEngine (number) {
    switch (number) {
        case 0: return '2.0 л / 190 л.с. / Дизель'
        case 1: return '2.0 л / 163 л.с. / Бензин'
        case 2: return '2.2 л / 199 л.с. / Дизель'
      }
} 

export function getDriveUnit (number) {
    switch (number) {
        case 0: return 'Полный'
        case 1: return 'Передний'
        case 2: return 'Передний'
      }
} 

export function getTransmission (number) {
    switch (number) {
        case 0: return 'Роботизированная'
        case 1: return 'Автоматическая'
        case 2: return 'Автоматическая'
      }
} 

export function getCost (number) {
    switch (number) {
        case 0: return '35 000'
        case 1: return '10 000'
        case 2: return '15 000'
      }
} 

export function getImgPath (number) {
    switch (number) {
        case 0: return '5.webp'
        case 1: return '10.webp'
        case 2: return '11.webp'
      }
} 

export function getDate (number) {
    switch (number) {
        case 0: return '01.01.2024 - 15.01.2024'
        case 1: return '07.01.2023 - 18.01.2023'
        case 2: return '01.04.2023 - 15.04.2023'
      }
} 

export function getCostAll (number) {
    switch (number) {
        case 0: return '525 000'
        case 1: return '120 000'
        case 2: return '225 000'
      }
} 