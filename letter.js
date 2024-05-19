let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '我愿是一条急流，是山间的小河，穿过崎岖的道路，从山岩中间滚过……<只要我的爱人是一条小鱼，在我的浪花中间，愉快地游来游去<我愿是一座荒林，坐落在河流两岸；我高声呼叫着，同暴风雨作战……<只要我的爱人是一只小鸟，停在枝头上啼叫，在我的怀里作巢<我愿是城堡的废墟，耸立在高山之巅，即使被轻易毁灭，我也并不懊丧……<只要我的爱人是一根常春藤，绿色枝条恰似臂膀，沿着我的前额上升<我愿是一块云朵，是一面破碎的大旗，在旷野的上空，疲倦地傲然停立....<只要我的爱人是黄昏的太阳，照射我苍白的脸，射出红色的光焰'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
