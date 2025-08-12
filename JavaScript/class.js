class className{
    constructor(name, year){
        this.name = name
        this.year = year
    }
    aboutMe(){
        console.log(`my name is ${this.name} and I born in ${this.year}`)
    }
}

let c1 = new className("pritam", 2002)

console.log(c1.name)
console.log(c1.year)
console.log(c1)

c1.aboutMe()

