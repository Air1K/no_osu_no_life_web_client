export const logoMove = (ref1, ref2)=>{

    const forbac = 10;
    const forfront = 20;
    const speed = 0.05;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;
    let framer;

    function setMouseParallaxStyle(){
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;
        const move = positionX / forbac;
        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);
        ref1.current.style.transform = `translate(${positionX / forfront}%, ${positionY / forfront}%)`
        ref2.current.style.transform = `translate(${positionX / forbac}%, ${positionY / forbac}%)`
        if(move === (positionX / forbac)){
            cancelAnimationFrame(framer);
            framer = 0
            return
        }
        framer = requestAnimationFrame(setMouseParallaxStyle);
    }

    setMouseParallaxStyle()
    window.addEventListener("mousemove", (e)=>{
        if(framer<=1 || framer === undefined){
            setMouseParallaxStyle()
        }
        const parallaxWidth = window.innerWidth;
        const parallaxHeight =  500;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;
        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;

    });
}

