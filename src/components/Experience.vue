<template>
    <section id="experience">
        <h2 class="s-title" v-scrollanimation>experience</h2>
        <p class="s-sub-title" v-scrollanimation>The work I have completed.</p>
        <div class="e-wrapper">
            <div class="e-box" v-for="experience in experiences" :key="experience.company" v-scrollanimation>
                <h2 class="e-company">{{ experience.company }}</h2>
                <h4 class="e-position">{{ experience.position }}</h4>
                <p>{{ experience.paragraph }}</p>
                <h2 class="e-stacks">Stacks</h2>
                <div class="e-stacks-wrapper">
                    <span v-for="stack in experience.stacks" :key="stack">{{ stack }}</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Experience',
    data() {
        return {
            experiences: [
                {
                    company: 'Technodream Web Design',
                    position: 'Web Developer',
                    paragraph: 'Developing static and dynamic websites, including WordPress development. Creating WordPress plugins based on clients specific requirements. I work more on backend, custom post types, custom template, Integrating APIs, GoHighLevel, Zapier Integration and managing large projects such as E-commerce and Booking.',
                    stacks: ['HTML,', 'CSS,', 'JAVASCRIPT,', 'VUEJS,', 'JQUERY,', 'PHP,', 'RESTful API’s,', 'VELO (WIX),', 'AJAX,', 'WORDPRESS,', 'DIVI,','Elementor/Pro,','WPBakery,','Gutenberg,', 'ADOBE FIREWORKS', 'FIGMA', 'MYSQL'],
                },
                {
                    company: 'Creative Outline Ltd.',
                    position: 'Junior Web Developer',
                    paragraph: 'I specialize in developing websites using WordPress, primarily utilizing tools such as PHP, JavaScript, and ACF (Advanced Custom Fields), in conjunction with the HTML5Blank WordPress Boilerplate Theme.',
                    stacks: ['HTML,', 'CSS,', 'JAVASCRIPT,', 'JQUERY,', 'PHP,', 'RESTful API’s,', 'AJAX,', 'AXIOS,', 'FETCH API', 'WORDPRESS', 'FIGMA', 'GIT', 'ACF', 'PYTHON'],
                },
                {
                    company: 'Freelance',
                    position: 'Full-stack Web Developer',
                    paragraph: 'I develop websites for various clients using Laravel and WordPress, and deploy them to production environments such as Digital Ocean (via SSH), Heroku, Railway, and shared hosting. Additionally, I have experience using AWS S3 for storage.',
                    stacks: ['HTML,', 'CSS,', 'JAVASCRIPT,', 'VUEJS,', 'ANGULAR,', 'JQUERY,', 'PHP,', 'RESTful API’s,', 'VELO (WIX),', 'AJAX,', 'AXIOS,', 'FETCH API,', 'LARAVEL,', 'CODEIGNITER,', 'VUE.JS,', 'WORDPRESS,', 'FIGMA,', 'CLOUD HOSTING,', 'GIT', 'GITFLOW'],
                }
            ]
        };
    },
}
</script>
<style lang="scss" scoped>
#experience {
    .e-box.before-enter:nth-child(1) {
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease-out;
    }

    .e-box.enter:nth-child(1) {
        opacity: 1;
        transform: translateY(0px);
    }
    .e-box.before-enter:nth-child(2) {
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.6s ease-out;
    }
    .e-box.enter:nth-child(2) {
        opacity: 1;
        transform: translateY(0px);
    }
    .e-wrapper {
        max-width: 1141px;
        width: 100%;
        display: flex;
        align-items: start;
        flex-wrap: wrap;
        justify-content: space-between;

        .e-box {
            max-width: 540px;
            width: 100%;
            margin-bottom: 50px;

            .e-company {
                font-size: 20px;
                font-weight: 600;
                color: var(--tertiary);
                margin-bottom: 5px;
            }

            .e-position {
                font-size: 16px;
                font-weight: 500;
                color: #f59595;
                margin-bottom: 20px;
            }

            p {
                font-size: 16px;
                font-weight: 400;
                color: var(--tertiary);
                margin-bottom: 20px;
                line-height: 27px;
            }

            .e-stacks {
                font-size: 18px;
                font-weight: 600;
                color: var(--tertiary);
                margin-bottom: 10px;
            }

            .e-stacks-wrapper {
                font-size: 14px;
                font-weight: 500;
                color: var(--gray);
                margin-bottom: 5px;
                display: flex;
                column-gap: 10px;
                flex-wrap: wrap;
                row-gap: 10px;

                span {
                    color: var(--tertiary);
                }
            }
        }
    }
}


@media screen and (max-width: 1200px) {
    #experience .e-wrapper {
        max-width: 100%;
        width: 100%;
        align-items: start;
        flex-direction: column;
        row-gap: 60px;
    }

    #experience .e-wrapper .e-box {
        max-width: 100%;
    }
}
</style>