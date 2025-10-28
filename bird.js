let cvs = document.querySelector("#flappybird");
let ctx = cvs.getContext("2d");
let x = 50
let xp=[cvs.width, cvs.width*2]
let yp=[0, -100]
let gap=150
let sch = 0
let y = 150
let bird = document.createElement('img')
bird.src='bird.png'
let bg = document.createElement('img')
bg.src='bg.png'
let bg1 = document.createElement('img')
bg1.src='bg1.png'
let pipeB = document.createElement('img')
pipeB.src='pipeBottom.png'
let pipeU = document.createElement('img')
pipeU.src='pipeUp.png'
let s=0
let u=0
window.addEventListener('click', function(){
    s=0
    
    if (u<0){
        u=0
    }
    y-=50
    if (u<4){
           u+=0.5
    }
 
})
function draw(){
    y+=s
    if (s<30){
        s+=0.023
    }
    u-=0.01
    if (s>2){
        bird.src='images/birdD.png'
    }
    else if (u>0){
        bird.src='images/birdU.png'
    }
    else{
        bird.src='images/bird.png'
    }
    ctx.drawImage(bg, 0, 0)
    ctx.drawImage(bg1, 0, cvs.height-bg1.height/2)
    ctx.drawImage(bird, x, y)
    
    for (i=0; i<xp.length; i++){
        xp[i]-=1
        ctx.drawImage(pipeU, xp[i], yp[i])
        ctx.drawImage(pipeB, xp[i], yp[i]+pipeU.height+gap)
        if (xp[i]<pipeU.width*-1){
            
            // let r=cvs.width
            // let u=Math.random()*50
            // xp.splice(i)
            // xp.push(r)
            // yp.splice(i)
            // yp.push(u)
            // if (pipes_x[i] === 50) {
            xp.push(xp[xp.length - 1] + 350);
            yp.push(Math.round(Math.random() * pipeU.height) - pipeU.height);
        }
        if (xp[i]===50){
            sch+=1
        }
        if ((x+bird.width>=xp[i] && x<=xp[i]+pipeU.width && (y<=yp[i]+pipeU.height || y+bird.height>=yp[i]+pipeU.height+gap)) || y<0 || y+bird.height>=cvs.height-bg1.height/2){
            xp=[cvs.width]
            yp=[0]
            s=0
            u=0
            sch=0
            y = 150
        }
    }
    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: " + sch, 10, cvs.height - 20);
    requestAnimationFrame(draw)

}
draw()
