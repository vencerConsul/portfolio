<template>
    <div id="banner">
        <div class="flex">
            <div class="col">
                <div class="text-container">
                    <p v-scrollanimation>Hello, I'm a</p>
                    <h1 v-scrollanimation>Full-stack web</h1>
                    <h2 v-scrollanimation>DEVELOPER</h2>
                    <div class="buttons" v-scrollanimation>
                        <a href="#contact" class="btn" v-scrollanimation>Hire me</a>
                        <div class="social-icons" v-scrollanimation>
                            <a target="_blank" href="https://github.com/vencerConsul">
                                <img src="/icons/github.png" class="round">
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/vencer-consul-olermo/">
                                <img src="/icons/linkedin.png" class="round">
                            </a>
                            <a href="mailto:o.lermovenz@gmail.com">
                                <img src="/icons/email.png" class="round">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col me">
                <img src="/vencer.png">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Banner',
}
</script>

<style lang="scss" scoped>
#banner {
    height: 100%;
    position: relative;
    z-index: 2;

    .flex {
        display: flex;
        align-items: center;
        max-width: 1307px;
        width: 100%;
        margin: 0 auto;

        .col {
            flex: 0 0 auto;
            width: 50%;
        }
    }

    .me img {
        position: relative;
        z-index: 4;
        opacity: 0;
        animation: blink 1s forwards;
        animation-delay: 2s;
    }

    @keyframes blink {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .text-container {
        max-width: 700px;
        width: 100%;
        color: var(--tertiary);
        text-align: left;

        p {
            font-size: clamp(0.875rem, 0.875rem + 0.5208vw, 1.5rem);
        }

        p.before-enter {
            opacity: 0;
            transform: translateY(100px);
            transition: all 0.3s ease-out;
        }

        p.enter {
            opacity: 1;
            transform: translateY(0px);
        }

        h1 {
            font-size: clamp(1.5rem, 1.5rem + 2.6563vw, 4.6875rem);
            font-weight: 800;
            text-shadow: var(--shadow);
        }

        h1.before-enter {
            opacity: 0;
            transform: translateY(120px);
            transition: all 0.5s ease-out;
        }

        h1.enter {
            opacity: 1;
            transform: translateY(0px);
        }

        h2 {
            font-size: clamp(1.25rem, 1.25rem + 2.0833vw, 3.75rem);
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 10px;
            text-shadow: var(--shadow);
        }

        h2.before-enter {
            opacity: 0;
            transform: translateY(130px);
            transition: all 0.7s ease-out;
        }

        h2.enter {
            opacity: 1;
            transform: translateY(0px);
        }

        .buttons {
            display: flex;
            justify-content: space-between;
            max-width: 382px;
            width: 100%;
        }

        .btn {
            background-color: var(--primary);
            color: var(--secondary);
            box-shadow: var(--shadow);
        }

        .btn.before-enter {
            opacity: 0;
            transform: translateY(140px);
            transition: all .9s ease-out;
        }

        .btn.enter {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .social-icons {
        display: flex;
        max-width: 165px;
        width: 100%;
        justify-content: space-between;

        .round {
            background: var(--tertiary);
            color: white;
            box-shadow: var(--shadow);
        }
        a{
            transition: 0.3s;
        }

        a:hover {
            transform: scale(1.1);
        }
    }

    .social-icons.before-enter {
        opacity: 0;
        transform: translateY(150px);
        transition: all 1.1s ease-out;
    }

    .social-icons.enter {
        opacity: 1;
        transform: translateY(0px);
    }
}

@media screen and (max-width: 1403px) {
    #banner {
        padding-left: 30px;
        padding-right: 30px;
    }
}

@media screen and (max-width: 817px) {
    #banner {
        display: flex;
        align-items: center;

        .col {
            width: 100% !important;
        }

        .me {
            display: none;
        }

        .text-container {
            width: 100%;
        }

        .buttons {
            flex-direction: column-reverse;
            row-gap: 10px;
        }

        .interest span {
            margin-bottom: 20px;
        }
    }
}
</style>