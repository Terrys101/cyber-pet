class Test {
    constructor (name,drinkLvl) {
      this._name = name;
      this._drinkLvl = 5;
    }


    get drinkLvl(){
        return this._drinkLvl
    } 

    hungerDrain() {
        setInterval(() => {this._drinkLvl-=5}, 1000);
        if (this._drinkLvl = 0){
        alert("YES") 
            
        } else {
            alert("NO")
            
        }
      }


 
// }
// const max =  new Test ("bob")
  
// console.log(max)
// console.log(max)
// console.log(max)




// function alertMe () {
//     alert('hi')
// }

// const timerid = setInterval(alertMe,5000)

// clearInterval(timerid,6000)









