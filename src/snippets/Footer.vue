<template>
    <footer>
        <div class="footer-icons">
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
        <div class="row">
            <p style="margin-bottom: 10px;">© 2023 Full-stack Web Developer</p>
            <small>Created with <img src="/vuejs.png"> by Vencer Olermo</small>
        </div>
    </footer>
</template>
<style scoped>
.row {
    justify-content: center;
    text-align: center;
    font-family: clamp(0.875rem, 0.875rem + 0.2083vw, 1.125rem);
    font-weight: 500;
    margin: 50px 50px;
}
.footer-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    margin: 100px 50px;
}
.footer-icons a{
    height: 47px;
    width: 47px;
    border-radius: 50%;
    background: var(--tertiary);
}
.row small{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}
.row small img{
    width: 30px;
}
</style>