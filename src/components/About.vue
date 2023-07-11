<template>
    <section id="about">
        <h2 class="s-title" v-scrollanimation>about</h2>
        <p class="s-sub-title" v-scrollanimation>A glimpse into who I am.</p>
        <p class="s-paragraph">Hey there! I'm Vencer, a motivated and dedicated full-stack web developer. I absolutely love
            building websites that are seamless and user-friendly. I've got tons of experience in both frontend and backend
            development, so I know my way around creating robust and scalable web applications.</p>
        <h4>What am I interested in</h4>
        <div class="interest">
            <span>coding</span>
            <span>music</span>
            <span>adventure</span>
            <span>gaming</span>
        </div>
        <a href="/vencer-olermo.pdf" download class="btn">Download CV</a>
    </section>
</template>
<script>
export default {
    name: 'About',
}
</script>
<style lang="scss" scoped>
#about {
    .s-paragraph {
        font-size: 18px;
        font-weight: 400;
        color: var(--tertiary);
        line-height: 35px;
        margin-bottom: 25px;
    }

    h4 {
        font-size: 24px;
        font-weight: bold;
        color: var(--tertiary);
        margin-bottom: 10px;
    }

    .interest {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 909px;
        width: 100%;
        flex-wrap: wrap;
        margin-bottom: 30px;

        span {
            width: 207px;
            height: 41px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #CECDCD;
            font-size: 18px;
            color: var(--tertiary);
            font-weight: 300;
            border-radius: 5px;
        }
    }

    .btn {
        background: var(--tertiary);
        color: var(--white);
        box-shadow: var(--shadow);
    }
}


@media screen and (max-width: 1024px) {
    #about .interest {
        justify-content: unset;
        column-gap: 20px;

        span {
            margin-bottom: 20px;
        }
    }
}
</style>