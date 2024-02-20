const getNumb =  function (max = 256,min = 0){
    return Math.round(Math.random()*(max - min) + min);
}

class Counter {
    constructor(){
        this.n = 0;
    }
    inc(){
        this.n += 1;
    }
    dec(){
        this.n -= 1;
    }
    chang(newV){
        this.n = newV;
    }
}
export default Counter;
export {getNumb};

