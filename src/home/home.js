// import Ani from '../../assets/Ani.js'
// import '../../assets/Ani.css'

class Animation{
    constructor(target){
        this.target = target
    }
    run(){
        this.target.run()
    }
}
class Ani{
    constructor(name){
        this.name = name
    }
    run(){
        let lis = document.querySelectorAll('li')
        function add(){
            if(!lis.length) return;
            lis = Array.from(lis);
            let li = lis.shift();
            li.classList.add('right-title')
            li.addEventListener('animationstart',function(e){
                setTimeout(add,100)
            })
        }
        add()
    }
}
let ani = new Animation(new Ani())
ani.run()