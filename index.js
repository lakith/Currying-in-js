let saywhat = function(a) {
    return function (b){
        return function(c){
            console.log("saying " + a + " to "+ b + " using " + c)
        }
    }
}

// one way
let sayHi = saywhat("Hi")
let sayWhome = sayHi("Me")
let sayHiToMeUsingJs = sayWhome("Javascript")

// other way
saywhat("Hi")("Lakith")("Currying")

