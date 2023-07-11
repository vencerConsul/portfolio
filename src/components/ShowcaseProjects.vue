<template>
    <section id="shocase_projects">
        <h2 class="s-title" v-scrollanimation>shocase projects</h2>
        <p class="s-sub-title" v-scrollanimation>Additional Projects.</p>
        <div class="sp-wrapper">
            <div class="sp-box" v-for="sProject in sProjects" :key="sProject.title" v-scrollanimation>
                <h2 class="sp-title">{{ sProject.title }}</h2>
                <p>{{ sProject.paragraph }}</p>
                <div class="sp-links">
                    <a target="_blank" :href="spLinks.url" v-for="spLinks in sProject.links">
                        <img :src="spLinks.iconLink" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'ShowcaseProjects',
    data() {
        return {
            sProjects: [
                {
                    title: 'Kwara',
                    paragraph: 'Laravel e-commerce site with AWS (S3) image storage and Selfie Pay Authentication for secure purchases.',
                    links: [
                        {
                            url: 'https://github.com/vencerConsul/kwara',
                            iconLink: '/icons/github.png'
                        }
                    ],
                },
                {
                    title: 'Ifix',
                    paragraph: 'A Laravel website for phone repair that includes an appointment system for scheduling phone repairs.',
                    links: [
                        {
                            url: 'https://github.com/vencerConsul/ifix',
                            iconLink: '/icons/github.png'
                        }
                    ],
                },
                {
                    title: 'Covid tracker',
                    paragraph: 'A COVID tracker featuring integrated map and flag APIs to provide updated case information for every country.',
                    links: [
                        {
                            url: 'https://github.com/vencerConsul/covid-tracker',
                            iconLink: '/icons/github.png'
                        },
                        {
                            url: 'https://v-covid-tracker.netlify.app/',
                            iconLink: '/icons/link.png'
                        },
                    ],
                }
            ]
        };
    },
}
</script>
<style lang="scss" scoped>
#shocase_projects {
    .sp-box.before-enter:nth-child(1) {
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease-out;
    }

    .sp-box.enter:nth-child(1) {
        opacity: 1;
        transform: translateY(0px);
    }
    .sp-box.before-enter:nth-child(2) {
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.6s ease-out;
    }

    .sp-box.enter:nth-child(2) {
        opacity: 1;
        transform: translateY(0px);
    }
    .sp-box.before-enter:nth-child(3) {
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.9s ease-out;
    }

    .sp-box.enter:nth-child(3) {
        opacity: 1;
        transform: translateY(0px);
    }
    .sp-wrapper {
        max-width: 1141px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .sp-box {
            max-width: 364px;
            width: 100%;
            background: #F1F1F1;
            border: 1px solid #D9D9D9;
            border-radius: 5px;
            padding: 32px 40px;

            .sp-title {
                font-size: 25px;
                font-weight: 800;
                color: var(--tertiary);
                text-shadow: var(--shadow);
                margin-bottom: 20px;
            }

            p {
                font-size: 16px;
                color: var(--tertiary);
                font-weight: 400;
                line-height: 27px;
                margin-bottom: 15px;
            }

            .sp-links {
                display: flex;
                column-gap: 20px;

                a {
                    background: var(--tertiary);
                    height: 47px;
                    width: 47px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
}


@media screen and (max-width: 1200px) {
    #shocase_projects .sp-wrapper {
        max-width: 100%;
        justify-content: unset;
        column-gap: 20px;
        flex-wrap: wrap;
        row-gap: 20px;
    }

    #shocase_projects .sp-wrapper .sp-box {
        margin-bottom: unset;
    }
}

@media screen and (max-width: 1024px) {
    #shocase_projects .sp-wrapper .sp-box {
        max-width: 100%;
    }
}
</style>