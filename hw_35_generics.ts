// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
const users2 = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true            
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// 1. Создать строку из имен пользователей через запятую
type Name = {
    name: string
}
const getName2 = <T extends Name>(users: T[]): string => users.map(({name}): string => name).join(', ')
console.log(getName2(users2));

// 2. Посчитать общее количество машин у пользователей
type Cars = {
    cars?: string[]
}
const getTotalCars2 = <T extends Cars>(users: T[]): number => 
    users.filter(({cars}) => cars).map(({cars}): number => cars!.length).reduce((a, b): number => a + b)
console.log(getTotalCars2(users2));

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
type Education = {
    name: string,
    hasEducation: boolean
}
const getUsersEducation2 = <T extends Education>(users: T[]) => users.filter(({hasEducation}): boolean => hasEducation)
    .map(({name}): string => name) // если нужен массив только из имен
console.log(getUsersEducation2(users2));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
type Animals = {
    name: string,
    animals?: string[]
}
const getUsersAnimals2 = <T extends Animals>(users: T[]) => users.filter(({animals}) => animals)
    .map(({name}): string => name) // если нужен массив только из имен
console.log(getUsersAnimals2(users2));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

const getCars2 = <T extends Cars>(users: T[]) => 
    users.filter(({cars}) => cars).map(({cars}): string => cars!.join(', ')).join(', ')
console.log(getCars2(users2));
