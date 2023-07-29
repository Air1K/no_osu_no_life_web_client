export const textAnimLeft = {
    hidden: {
        x: -10,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    }),

}

export const textAnimRight = {
    hidden: {
        x: 10,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    }),
}