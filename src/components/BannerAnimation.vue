<template>
    <div class="bg-animation">
        <span class="left-animation"></span>
        <span class="right-animation"></span>
    </div>
    <div class="container">
        <div class="circle delay1"></div>
        <div class="circle delay2"></div>
        <div class="circle delay3"></div>
        <div class="circle delay4"></div>
    </div>
    <div class="arrows">
        <img src="/arrow-1.png" class="arrow-1" />
        <img src="/arrow-2.png" class="arrow-2" />
    </div>
    <div class="dots">
        <img src="/icons/banner-dots.png" class="dot1" />
        <img src="/icons/banner-dots.png" class="dot2" />
        <img src="/icons/banner-dots.png" class="dot3" />
    </div>
</template>
<script>
export default {
    name: 'BannerAnimation',
}
</script>

<style lang="scss" scoped>
.bg-animation {
    display: flex;
    overflow: hidden;

    .left-animation {
        height: 100%;
        width: 66%;
        background: #f9f9f9;
        position: absolute;
        top: 0;
        z-index: 1;
        animation: moveRight 1.2s;
    }

    .right-animation {
        height: 100%;
        width: 34%;
        background: #FB4B4B;
        position: absolute;
        top: -100%;
        right: 0;
        z-index: 1;
        animation: moveDown 1s forwards;
        animation-delay: 1s;
    }
}

@keyframes moveDown {
    from {
        top: -100%;
    }

    to {
        top: 0px;
    }
}

@keyframes moveRight {
    from {
        left: -1000px;
    }

    to {
        left: 0%;
    }
}

.arrows {
    position: absolute;
    top: 40%;
    right: -300px;
    z-index: 1;
    animation: moveLeft 1s forwards;
    animation-delay: 1.2s;

    .arrow-2 {
        margin-left: -70px;
    }
}


@keyframes moveLeft {
    from {
        right: -40%;
    }

    to {
        right: 5%;
    }
}

.dots {
    .dot1 {
        position: absolute;
        right: 400px;
        z-index: 1;
        animation: moveDot1Down 1s forwards;
        animation-delay: 2s;
    }

    .dot3 {
        position: absolute;
        top: 700px;
        transform: rotate(90deg);
        z-index: 1;
        animation: moveDot3Down 1s forwards;
        animation-delay: 2.5s;
    }
}

@keyframes moveDot1Down {
    from {
        top: -970px;
    }

    to {
        top: 100px;
    }
}

@keyframes moveDot3Down {
    from {
        right: -100px;
    }

    to {
        right: 100px;
    }
}

/* Circle */
.delay1 {
    animation: waves 3s linear;
    animation-delay: 3s;
}

.delay2 {
    animation: waves 3s infinite .7s linear;
}

.delay3 {
    animation: waves 3s infinite 1.5s linear;
}

.delay4 {
    animation: waves 3s infinite 1.9s linear;
}

.circle {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 1px solid #c4c4c4;
    position: absolute;
    opacity: 0;
    top: 40%;
    left: 62%;
    z-index: 1;
}

@keyframes waves {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(4);
        opacity: 0;
    }
}

@media screen and (max-width: 1024px){
    .bg-animation .left-animation,
    .bg-animation .right-animation
    {
        width: 50%;
    }
    img.arrow-1,
    img.arrow-2
    {
    max-width: 50%;
}
}
</style>