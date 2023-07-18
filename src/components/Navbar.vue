<template>
    <div id="navbar">
        <nav>
            <div class="flex">
                <h1 class="navbar-brand" v-scrollanimation>
                    Vencer
                </h1>
                <ul>
                    <li v-for="route in routes" :key="route.name" v-scrollanimation>
                        <a :href="route.path">{{ route.name }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
  
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            routes: [
                { name: 'home', path: 'home' },
                { name: 'about', path: '#about' },
                { name: 'projects', path: '#projects' },
                { name: 'experiences', path: '#experience' },
                { name: 'contact', path: '#contact' },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
#navbar {
    position: relative;
    z-index: 3;
    padding: 0 50px;

    nav {
        .flex {
            display: flex;
            padding-top: clamp(0.75rem, 0.75rem + 1.3542vw, 2.375rem);
            max-width: 1306px;
            width: 100%;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
        }

        .navbar-brand {
            font-size: clamp(1.5rem, 1.5rem + 0.8333vw, 2.5rem);
            font-weight: 800;
            color: var(--tertiary);
        }

        .navbar-brand.before-enter {
            opacity: 0;
            transform: translateY(-100%);
            transition: all 0.3s ease-out;
        }

        .navbar-brand.enter {
            opacity: 1;
            transform: translateY(0%);
        }

        ul {
            display: flex;
            justify-content: space-between;
            max-width: 457px;
            width: 100%;
            font-weight: 600;
            font-size: clamp(0.875rem, 0.875rem + 0.1042vw, 1rem);

            li.before-enter:nth-child(1) {
                opacity: 0;
                transform: translateY(-400%);
                transition: all 0.2s ease-out;
            }

            li.before-enter:nth-child(2) {
                opacity: 0;
                transform: translateY(-400%);
                transition: all 0.4s ease-out;
            }

            li.before-enter:nth-child(3) {
                opacity: 0;
                transform: translateY(-400%);
                transition: all 0.6s ease-out;
            }

            li.before-enter:nth-child(4) {
                opacity: 0;
                transform: translateY(-400%);
                transition: all 0.8s ease-out;
            }

            li.before-enter:nth-child(5) {
                opacity: 0;
                transform: translateY(-400%);
                transition: all 1s ease-out;
            }

            li.enter:nth-child(1) {
                opacity: 1;
                transform: translateY(0%);
            }

            li.enter:nth-child(2) {
                opacity: 1;
                transform: translateY(0%);
            }

            li.enter:nth-child(3) {
                opacity: 1;
                transform: translateY(0%);
            }

            li.enter:nth-child(4) {
                opacity: 1;
                transform: translateY(0%);
            }

            li.enter:nth-child(5) {
                opacity: 1;
                transform: translateY(0%);
            }
        }
    }
}

@media screen and (max-width: 665px) {
    #navbar {
        .flex {
            justify-content: center !important;
            margin-top: 20px !important;

            .navbar-brand {
                display: none !important;
            }
        }
    }
}
</style>