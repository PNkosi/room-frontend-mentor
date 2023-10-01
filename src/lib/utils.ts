export const slideLeftVariants = {
    hidden: {
        x: -20,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 50
        }
    }
}


export const slideTopVariants = {
    hidden: {
        y: -20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50 }
    }
}

export const slideBottomVariants = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50 }
    }
}


export const slideRightVariants = {
    hidden: {
        x: -20,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 50
        }
    }
}