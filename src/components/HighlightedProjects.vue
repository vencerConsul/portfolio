<template>
    <section id="projects">
        <h2 class="s-title" v-scrollanimation>highlighted projects</h2>
        <p class="s-sub-title" v-scrollanimation>Sharing my proudest achievements.</p>
        <div class="hp-wrapper">
            <div class="hp-box flex" v-for="hproject in hProjects" :key="hproject.title" v-scrollanimation>
                <div class="col-7 hp-screenshot-box">
                    <img class="hp-screenshot" :src="hproject.thumbnail" :alt="hproject.title" v-scrollanimation>
                </div>
                <div class="col-5 content">
                    <h2 class="hp-title">{{ hproject.title }}</h2>
                    <p>{{ hproject.paragraph }}</p>
                    <div class="hp-actions">
                        <a v-if="hproject.availability" target="_blank" :href="hproject.buttonUrl" class="btn">{{ hproject.buttonText }}</a>
                        <a v-if="!hproject.availability" disabled class="btn">Unavailable</a>
                        <div class="hp-technologies">
                            <img v-for="techonology in hproject.technologiesImg" :src="techonology" :alt="hproject.title">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'HighlightedProjects',
    data() {
        return {
            hProjects: [
                {
                    thumbnail: '/web-guru.png',
                    title: 'Web Guru',
                    paragraph: 'Is an international web development and web design service with a dashboard that tracks quote requests, contacts, and reviews.',
                    buttonText: 'Take a look',
                    availability: false,
                    buttonUrl: 'https://wguru.website/',
                    technologiesImg: ['/icons/laravel.png', '/icons/javascript.png', '/icons/mysql.png', '/icons/php.png']
                },
                {
                    thumbnail: '/pos.png',
                    title: 'POS',
                    paragraph: 'A POS system written in Laravel includes features such as import and export functionality, report generation, sales tracking, and item management.',
                    buttonText: 'Take a look',
                    availability: false,
                    buttonUrl: 'https://pos.up.railway.app/',
                    technologiesImg: ['/icons/laravel.png', '/icons/javascript.png', '/icons/mysql.png', '/icons/php.png']
                },
                {
                    thumbnail: '/timesheet.png',
                    title: 'Time-sheet',
                    paragraph: 'Is a Laravel web app that track the employee time in and time out (Break) in real time using websocket',
                    buttonText: 'Take a look',
                    availability: false,
                    buttonUrl: 'https://timesheet.up.railway.app/',
                    technologiesImg: ['/icons/laravel.png', '/icons/javascript.png', '/icons/mysql.png', '/icons/php.png']
                },
                {
                    thumbnail: '/tes.png',
                    title: 'Teacher Evaluation',
                    paragraph: 'I created a website for a local client. The website features include adding students, HR, teachers, evaluating teachers based on students\' subjects and courses, security questions, one-time passwords, and advanced encryption security.',
                    buttonText: 'Take a look',
                    availability: false,
                    buttonUrl: 'https://teacher-evaluation-system-production.up.railway.app/',
                    technologiesImg: ['/icons/laravel.png', '/icons/javascript.png', '/icons/mysql.png', '/icons/php.png']
                },
                {
                    thumbnail: '/wordpress-plugins.png',
                    title: 'WordPress Plugins',
                    paragraph: 'I implemented several plugins that I created to a single WordPress website. I have provided a screenshot on how to use the plugins. Feel free to visit the website.',
                    buttonText: 'Take a look',
                    availability: false,
                    buttonUrl: 'https://dev-vencer-web-developer.pantheonsite.io/',
                    technologiesImg: ['/icons/wordpress.png', '/icons/javascript.png', '/icons/mysql.png', '/icons/php.png']
                },
            ]
        };
    },
}
</script>
<style lang="scss" scoped>
#projects .hp-wrapper {
    position: relative;
    margin-top: 80px;

    .col-5 {
        flex: 0 0 auto;
        width: 41.6666666667%;
    }

    .col-7 {
        flex: 0 0 auto;
        width: 58.3333333333%;
    }

    .hp-box.before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.5s ease-out;
    }

    .hp-box.enter {
        opacity: 1;
        transform: translateY(0px);
    }

    .hp-box {
        max-width: 1141px;
        width: 100%;
        background: #fbfbfb;
        box-shadow: 0 8px 32px 0 rgba(184, 184, 184, 0.425);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 5px;
        padding: 37px 38px;
        margin-bottom: 80px;

        .hp-screenshot-box {
            text-align: left;
        }

        .hp-screenshot {
            margin-top: -80px;
            box-shadow: var(--img-shadow);
            border-radius: 20px;
        }

        .hp-screenshot.before-enter {
            opacity: 0;
            transform: translateY(100px);
            transition: all 1s ease-out;
        }

        .hp-screenshot.enter {
            opacity: 1;
            transform: translateY(0px);
        }

        .content {
            text-align: left;
            margin-top: auto;
            padding: 10px;

            .hp-title {
                font-size: 30px;
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

            .hp-actions {
                display: flex;
                align-items: center;
            }

            .btn {
                background: var(--tertiary);
                color: var(--white);
                box-shadow: var(--shadow);
            }

            .hp-technologies {
                width: 100%;
                padding: 0 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        &:last-child {
            margin-bottom: unset;
        }
    }
}

@media screen and (max-width: 1180px) {
    #projects .hp-wrapper .hp-box {
        flex-direction: column;
        row-gap: 20px;
        background: none;
        border: 0;
        padding: 10px 30px;

        .hp-screenshot-box {
            width: 90%;
            box-shadow: none;
            margin-top: -50px !important;
            text-align: center;
            margin: 0 auto;
        }

        .hp-screenshot {
            margin-top: unset;
            box-shadow: none;
        }

        .content {
            width: 100%;
            text-align: center;

            .hp-actions {
                align-items: center;
                flex-direction: column-reverse;
                row-gap: 20px;
            }

            .hp-technologies {
                padding: unset;
                align-items: center;
                justify-content: center;
                column-gap: 40px;
            }
        }
    }

}


@media screen and (max-width: 768px) {
    #projects .hp-wrapper .hp-box .content {
        width: 100%;
    }
}
</style>