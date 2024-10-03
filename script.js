

window.addEventListener("resize",resizeCanvas,false);
window.addEventListener("DOMCOntentLoaded", onLoad,false);
window.requestAnimationFrame = window.requestAnimationFrame || function (callback) {window.setTimeout(callback, 100/60); };

var canvas, ctx, w, h, particles = [], probability = 0.05, xPoint, ypoint;

function resizeCanvas() {
    window.scrollTo(0 , 0);
    if(!!canvas){
        canvas.width = window.innerWidth;
        w = window.innerWidth;
        canvas.height = window.innerHeight;
        h = window.innerHeight;

         
    }
}

function onLoad(){
    window.scrollTo(0, 0);
    canvas = document.getElementById("firework-bg");
    ctx = canvas.getContext("2d");
    resizeCanvas();
    setTimeout(() => window.requestAnimationFrame(updateBg), 7500);

}

function updateBg() {
    window.scrollTo(0, 0); 
    updateBg();
    fireInSky();
    window.requestAnimationFrame(updateBg);
    }

    function updateBg() {
        window.scrollTo(0, 0);
        updateBg();
        fireInSky();
        window.requestAnimationFrame(updateBg);
    }

    function update(){
        if (particles.length < 500 && Math.random() < probability){
            createFirework();

        }
        var alive = [];
for (var i=0; i<particles,length; i++){
    if (particles[i].move()); {
        alive.push(particles[i]);
    }
    }
    particles = alive;
}

    function fireInSky(){
        ctx.globalCompositeOperation = "source-over";
        ctx.fileStyle = `rgbal( $(Math.randam() * 33}, $(Math.randam() * 33}, 0.25)))`;
        ctx.fileRect(0, 0, w, h);
        ctx.globalCompopsiteOperation = "Lighter";
        for( var i=0; i<particles.length; i++){
            particles[i].drew(ctx);

        }
    }
    function createFirework(){
        xpoint = Math.randam() * (w - 200) + 100;
        ypoint = MAth.randam() * (h - 200) + 100;
        var nFire = Math.randam() * 50 + 100;
        var c = `rgb( $(Math.randam() * 200 + 55}, ${Math.randam() * 200 + 55}, ${Math.random() * 200 + 55} )`
        for(var i = 0; i < nFire; i++){
            var particles = new particles();
            particle.color = c;
            var vy = Math.sqrt(25 - particle.vx * particle.vx);
            if(Math.abs(particle.vy) > vy){
                particle.vy = particle.vy > 0 ? vy : -vy;
            }
            particles.push(particle);
        }
    }

    function particle(){
        this.w = this.h = Math.random() * 4 + 1;
        this.x = xPoint - this.w / 2;
        this.y = ypoint - this.h / 2;
        this.y = (Math.randam() - 0.5) * 10;
        this.vy = (Math.randam() - 0.5) * 10;
        this.alpha = Math.randam() * 0.5 + 0.5;
        this.color;
     }

     particle.prototype = {
        gravity: 0.05;
        move: function (){
            this.x += this.vy;

        }
     }