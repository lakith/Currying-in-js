# Currying-in-js

if you take a look at the inner function (function that holds c as param) b and a are closures to that function. 
whan you call saywhat it will return a function. 

you can get the result by  calling each one separatly or you can get the reslt bu calling all at once. this is curring in js

```javascript
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
```
