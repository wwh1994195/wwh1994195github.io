new class{constructor(t){this.target=t}run(){this.target.run()}}(new class{constructor(t){this.name=t}run(){let t=document.querySelectorAll("li");!function n(){if(!t.length)return;t=Array.from(t);let r=t.shift();r.classList.add("right-title"),r.addEventListener("animationstart",(function(t){setTimeout(n,100)}))}()}}).run();