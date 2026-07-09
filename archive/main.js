const cursor = document.querySelector('.cursor')

let init_x=0
let init_y=500
let angle=80    
let r=300
let last_x=init_x+r*Math.cos(radian(90-angle))
let last_y=init_y-r*Math.sin(radian(90-angle))

function radian(angle){
    return angle*Math.PI/180

}
var tween = gsap.fromTo(".box1", {rotation:angle,y:init_y,x:init_x},{ duration: 2.5, x: last_x, y:last_y,paused: true, }); // 앞에서 초기 좌표 설정후 뒤에서 움직이도록 작성
// rotation : 시계방향으로 각도만큼 회전

document.querySelector("#play").onclick = function() { return tween.play(); }
document.querySelector("#pause").onclick = function() { return tween.pause(); }
document.querySelector("#resume").onclick = function() { return tween.resume(); }
document.querySelector("#reverse").onclick = function() { return tween.reverse(); }
document.querySelector("#restart").onclick = function() { return tween.restart(); }

let moving=0;

document.querySelector("#img").onclick = function() {
    if(moving==0){
        moving=(moving+1)%2;
        return tween.play(); 
    }else{
        moving=(moving+1)%2;
        return tween.reverse(); 
    }
}


window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY  - cursor.clientHeight/2 + 'px'
    cursor.style.left = e.pageX - cursor.clientWidth/2 + 'px'
    console.log(e.pageY,e.pageX)
    init_x=e.pageX-30-50
    init_y=e.pageY-30-50
    last_x=init_x+r*Math.cos(radian(90-angle))
    last_y=init_y-r*Math.sin(radian(90-angle))
    tween = gsap.fromTo(".box1", {rotation:angle,y:init_y,x:init_x},{ duration: 2.5, x: last_x, y:last_y,paused: true, });

})


window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
    
})

window.addEventListener('touchstart', (e) => {
    audio.play()
    audio.volume = 0.5
    this.touches = e.changedTouches
    cursor.style.top = this.touches[0].pageY  - cursor.clientHeight/2 + 'px'
    cursor.style.left = this.touches[0].pageX - cursor.clientWidth/2 + 'px'
    cursor.classList.add('active-touch')
})
window.addEventListener('touchend', (e) => {
    this.touches = e.changedTouches
    cursor.style.top = this.touches[0].pageY  - cursor.clientHeight/2 + 'px'
    cursor.style.left = this.touches[0].pageX - cursor.clientWidth/2 + 'px'
    cursor.classList.remove('active-touch')
    
})