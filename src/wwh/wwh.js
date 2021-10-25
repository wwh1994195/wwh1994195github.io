// import articles from '../../route'
let centerLeft = document.querySelector('.center_left')
let content = centerLeft.querySelector('.content');

String.prototype.ellipsis = function(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...'
    } else {
        return str
    }
}
let articles = [{
        id: 1,
        title: '有没有那些很骚很骚的文案？',
        article: `1、我以为爱情要用心，没想到还要用力 2、我希望压得我喘不过气的不是生活，而是你 3、以前只想着看星星看月亮，现在看到你就下不了床 4、一个晚上做不完，那就两个晚上吧 5、认识你之后我才知道，情话不一定要用嘴说 6、你不主动我也不主动，你这次主动我以后自己动 7、我喜欢你脸红红的样子，更喜欢你气喘吁吁的样子 8、我是千你是北，我们在一起就是乖 9、白天叫姐姐，晚上姐姐叫 10、做好的状态：你在床上面 我在你上面 11、有些事不用一天做完，我们又不赶时间，可以每天都做一做
            12、花有什么好种的，来和我种草莓 13、即使你穿上天的衣裳，我也要解开那些星星的纽扣 14、“为了节约用水，以后可以一起洗澡吗？” 15、被哥哥蒙在鼓里有什么意思呢，蒙在被子里才有趣16、传闻人有206根骨头，一遇见你呀，我就有207根了 17、见你的第一面我就想上你，斯文人管这叫一见钟情 18、总说我嘴硬，你不试试怎么知道软不软，说不定还甜呢 19、干嘛，我又没有写藏头诗 20、想和你朝朝又暮暮，嗯嗯又啊啊
`
    },
    {
        id: 2,
        title: '如何看待知乎上的男拳',
        article: `鄙人几于外留住，你的日子过得好么？而且啥都不码让你倒退n年`
    },
    {
        id: 3,
        title: '如何看待知乎上的男拳',
        article: `老师是武音毕业的资深声乐老师，专业过硬，师德好，教学兢兢业业，从教十几年来，桃李满天下，有不少都成为了专业歌手，上过中国好声音。不过，老师不喜欢以这些作为宣传。老师还经常参加公益活动，捐款捐物，如今这样的坚守初心，品德高尚的老师真的不多见了。如果各位读者有幸成为老师的学生，还请一定珍惜，好好学习，一定能学有所得！`
    },
    {
        id: 4,
        title: '如何看待知乎上的男拳',
        article: `
               第一，知乎男权地图炮所有女性的次数，按比例来说并不算多，论声势更是远远不如当年杨笠“普信男”“男的，垃圾”下的各种女性评论；第二，知乎男权与其说是男权不如说是反女权，这群人的目的就是反女权，如果有的时候不慎地图炮或者误伤了别人的话，【主要原因是女权太过可恶抹黑了全体女性而已】——就像【如果有个工人在抗战时候说日本人都是垃圾，主要不是因为他素质太低骂了日本群众，而是因为日本军国主义发动了侵略战争】，他的这个地图炮话语需要由日本军国主义来负责，同理，【不慎误伤一般女性的责任，应该主要由女权主义来负，因为女权主义已经这样群体性羞辱一般男性好多年了】第三，你想做正常网民可以，少参与性别话题就是了，如果你主动参与性别话题，【就像一个人非要跑到双方激烈交战的战场中央那样，交战双方没有为你生命负责的义务——简而言之，你被打死属于自找的】第四，知乎上的女权主义，起码在15年之前是非常常见而且是主流，当时反女权还根本寥寥无几，而且被普遍认为是魔怔，也就是说当时女权主义是天然正确的一方——比如我当时也认为女权主义是正确的。所以，在女权主义占据天然正义的高地，大部分知乎人赞成女权主义这种大优势局面之后，是怎么被反女权反推的？无他，【不要看女权主义说了什么，而要看女权主义做了什么】综上，知乎反女权属于正义的自卫反击，虽然会有打错人的情况，但这是属于没有办法，而且比例并不高，你想避免也很容易——不参与性别话题就是，你不站在战场中间，自然不会被双方集火。`
    },
    {
        id: 5,
        title: '如何看待知乎上的男拳',
        article: `这场战争一开始我们就已经输了，现在打下去的目标不是为了赢，而是为了让对方也输——腘腩留要彩礼的本质不是别人要，而是你愿意出，你愿意出的原因是你找不到不要彩礼的，你只能用彩礼证明自己的能力、家境和资产等等。所以我带头降级打击了，只要每个腘腩都愿意躺平，愿意找低一级甚至两级，家里没钱但是更年轻漂亮的老婆，甚至润到东南亚，这帮要价最高和年纪最大的女拳就尴尬了，希望她们能一直坚持不婚不育，成为这场战争失败者的活广告。真的，男人对自己好一点。`
    },
]
articles.forEach(element => {
    let content1 = content.cloneNode(true);
    content1.querySelector('h3').innerHTML = element.title;
    content1.querySelector('p').innerHTML = element.article;
    centerLeft.appendChild(content1)
})
content.remove()

// articles.forEach(element => {
//     let content1 = content.cloneNode(true);
//     content1.querySelector('h4').innerHTML = element.title
//     content1.querySelector('p').innerHTML = element.article.ellipsis(element.article, 100) + '<span>查看全部<span>'
//     centerLeft.appendChild(content1);
// });
// content.remove()
// let title = document.querySelector('h4');
// console.log(title);
// title.addEventListener('click', function() {
//         window.location.href = `index.html?id=1`
// })
// let btns = document.querySelectorAll('p span');
// btns = Array.from(btns);
// console.log(btns);
// articles.forEach(element => {
//     for (let i = 0; i < btns.length; i++) {
//         btns[i].onclick = function() {
//             let res = /\n/g
//             this.parentNode.innerHTML = element.article.replace(res, '<br');


//         }
//     }

// });
// class Ellipsis {
//     constructor(obj) {
//         this.el = obj.el;
//         this.text = this.el.innerHTML;
//         this.textCount = obj.textCount;
//         this.findAllButtonText = obj.findAllButtonText || '查看全文';
//         this.ellipsisButtonText = obj.ellipsisButtonText || '收起';
//         this.showFindAllButton = obj.showFindAllButton || false;
//         this.flag = true;
//     }
//     get buttonText() {
//         return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
//     }
//     exec() {
//         if (!this.textCount) throw new Errow('文本内容不能为空');
//         this.el.innerHTML = this.format(this.text, this.textCount);
//         if (this.showFindAllButton) {
//             this.addButton();
//         }
//     }
//     addButton() {
//         var a = document.createElement('a');
//         a.textContent = this.findAllButtonText;
//         a.style.color = "blue";
//         a.style.cursor = 'pointer';
//         var _this = this;
//         a.addEventListener('click', function() {
//             _this.flag = !_this.flag;
//             this.textContent = _this.buttonText;
//             _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text, _this.textCount) : _this.text;
//         })
//         this.el.appendChild(a, this.el.childNodes[0])
//     }
//     format(str, num) {
//         return str.length < num ? str : (str.substring(0, num) + '...');
//     }
// }
// let ellipsis = new Ellipsis({
//     el: document.querySelector('.content p'),
//     textCount: 30,
//     findAllButtonText: "查看",
//     showFindAllButton: true
// })
// ellipsis.exec();
// let lists = document.querySelectorAll('.center_list');
// let contents = document.querySelectorAll('.content');
// lists = Array.from(lists);
// contents = Array.from(contents);
// lists.forEach(element => {
//     element.classList.remove('center_list2')
//     element.addEventListener('click', function() {
//         this.classList.add('center_list2');
//     })

// });
// for (let i = 0; i < lists.length; i++) {
//     lists[i].onclick = function() {
//         for (let i = 0; i < lists.length; i++) {
//             lists[i].classList.remove('center_list2');
//             contents[i].style.display = 'none'
//         }
//         this.classList.add('center_list2')
//         contents[i].style.display = 'block'
//     }
// }