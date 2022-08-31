//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function ProSkater(name, age, hair, nickName) {
    this.name = name
    this.age = age
    this.hair = hair
    this.nickName = nickName
    this.hello = function() {
        console.log(`hello skater`)
    }
    this.bye = function() {
        console.log(`bye bye!`)
    }
    this.sup = function(){
        console.log(`'sup homies!`)
    }
}

const tony = new ProSkater('tony', 30, 'red', 't-bone')

console.log(tony.name)
console.log(tony.age)