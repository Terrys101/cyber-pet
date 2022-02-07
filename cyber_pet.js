class Pet {
    constructor(name,enery,food,hydration,) {
        this._name = name;
        this._enery = (Math.floor(Math.random(1) * 20));       
        this._food = (Math.floor(Math.random(1) * 20));
        this._hydration = (Math.floor(Math.random(1) * 20));
    }
    get name(){
     return this._name;
    }
    get enery(){
        return this._enery
    }
    get food(){
        return this._food
    }
    get hydration(){
        return this._hydration
    }

         //Negative consequences
       reduceEnery(){
           return this._enery -- ;
        }

       reduceFood(){
           return this._food --;
       }
       reduceHydation(){
           return this._hydration--;
       }
      // Positive consequences
       powerEnery(){
           return this._enery ++;
       }

        powerFood(){
           return this._food ++;
        }
        powerHydation(){
            return this._hydration ++;
        }
    
    
    }
    //PET one
     class Dog extends Pet {
      constructor(name,walking){
          super(name,walking)
          this._walking = -3
      }
      get walking(){
          return this._walking
         
      }
     }

      //PET two
      class Cat extends Pet {
        constructor(name,hunting){
            super(name,hunting)
            this._hunting = -3
        }
        get hunting(){
            return this._hunting
           
        }
       }

           //PET THREE
        class Bird extends Pet {
        constructor(name,flying){
            super(name,flying)
            this._flying = -3
        }
        get flying(){
            return this._flying
           
        }
       }



    const max = new Dog ("max")
     console.log(max)
    
     const sam = new Cat ("sam")
     console.log(sam)

      const charlie = new Bird ("charlie")
      console.log(charlie)
    

       




     // console.log(dog.enery) 
    // console.log(max.reduceEnery())
    // console.log(max.reduceEnery())
    // console.log(max.reduceEnery())
    // console.log(max.powerEnery())
    // console.log(max.powerEnery())
    // console.log(max.powerEnery())
    // console.log(max)




    // console.log(dog.reduceEnery())  
    // console.log(dog.reduceEnery())
    // console.log(dog.reduceEnery())
    // console.log(dog.reduceEnery())