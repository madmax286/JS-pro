// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
interface IUser {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: IUser[] = [
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

const getName = (users: IUser[]): string => users.map(({name}): string => name).join(', ')
console.log(getName(users));

// 2. Посчитать общее количество машин у пользователей

const getTotalCars = (users: IUser[]): number => 
    users.filter(({cars}) => cars).map(({cars}): number => cars!.length).reduce((a: number, b: number): number => a + b)
console.log(getTotalCars(users));

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

const getUsersEducation = (users: IUser[]) => users.filter(({hasEducation}): boolean => hasEducation)
    .map(({name}): string => name) // если нужен массив только из имен
console.log(getUsersEducation(users));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

const getUsersAnimals = (users: IUser[]) => users.filter(({animals}) => animals)
    .map(({name}): string => name) // если нужен массив только из имен
console.log(getUsersAnimals(users));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

const getCars = (users: IUser[]) => 
    users.filter(({cars}) => cars).map(({cars}): string => cars!.join(', ')).join(', ')
console.log(getCars(users));
