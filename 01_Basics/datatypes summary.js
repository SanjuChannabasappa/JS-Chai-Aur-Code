/* Primitive */
// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt


/* Non-primitive (Reference) */
// Array, Object, functions


/* Symbol */
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);


/* BigInt */
const bignumber = 123456789n;
console.log(typeof bignumber); 

/* Array */
const heros = ["sanju", "siddu", "sanjusiddu"];


/* Object */
const data = {
    name : "sanju",
    age : 23,
    work : "soft_eng"
};


/* functions */
const simple = function () {
    console.log("sanju")
    
}
