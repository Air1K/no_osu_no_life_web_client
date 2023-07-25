export const logoMove = (ref1, ref2) => {

    const forbac = 10;
    const forfront = 20;
    const speed = 0.05;
    let exit = false
    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;
    let framer;

    function setMouseParallaxStyle() {
        try {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            const move = positionX / forbac;
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);
            ref1.current.style.transform = `translate(${positionX / forfront}%, ${positionY / forfront}%)`
            ref2.current.style.transform = `translate(${positionX / forbac}%, ${positionY / forbac}%)`
            if (move === (positionX / forbac)) {
                cancelAnimationFrame(framer);
                framer = 0
                return
            }
            framer = requestAnimationFrame(setMouseParallaxStyle);
        } catch (e) {
            framer = 0
            exit = true
        }
    }

    setMouseParallaxStyle()
    window.addEventListener("mousemove", function moveElement(e) {
        if (framer <= 1 || framer === undefined) {
            setMouseParallaxStyle()
        }
        if (exit) {
            window.removeEventListener("mousemove", moveElement)
        }
        const parallaxWidth = window.innerWidth;
        const parallaxHeight = 500;
        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;
        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
    });
}

