<template>
    <div id="header">
        <Navbar />
        <Banner />
        <BannerAnimation />
        <div class="wave"></div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import BannerAnimation from '../components/BannerAnimation.vue'

export default {
    name: 'Header',
    components: {
        Navbar, Banner, BannerAnimation
    }
}
</script>

<style scoped>
#header {
    height: auto;
    position: relative;
    overflow: hidden;
    clip-path: polygon(100% 0%, 0% 0% , 0.00% 76.47%, 2.00% 76.53%, 4.00% 76.70%, 6.00% 76.97%, 8.00% 77.35%, 10.00% 77.82%, 12.00% 78.37%, 14.00% 78.98%, 16.00% 79.63%, 18.00% 80.32%, 20.00% 81.02%, 22.00% 81.71%, 24.00% 82.37%, 26.00% 83.00%, 28.00% 83.56%, 30.00% 84.04%, 32.00% 84.44%, 34.00% 84.75%, 36.00% 84.94%, 38.00% 85.02%, 40.00% 84.99%, 42.00% 84.85%, 44.00% 84.60%, 46.00% 84.24%, 48.00% 83.79%, 50.00% 83.26%, 52.00% 82.67%, 54.00% 82.02%, 56.00% 81.34%, 58.00% 80.64%, 60.00% 79.95%, 62.00% 79.27%, 64.00% 78.64%, 66.00% 78.06%, 68.00% 77.56%, 70.00% 77.14%, 72.00% 76.81%, 74.00% 76.59%, 76.00% 76.48%, 78.00% 76.49%, 80.00% 76.60%, 82.00% 76.83%, 84.00% 77.17%, 86.00% 77.59%, 88.00% 78.11%, 90.00% 78.69%, 92.00% 79.32%, 94.00% 80.00%, 96.00% 80.69%, 98.00% 81.39%, 100.00% 82.07%);
}
@media screen and (max-width: 1200px){
    #header{
        height: auto;
    }
}
@media screen and (max-width: 817px){
    #header{
        height: 100vh;
        clip-path: unset;
    }
}
</style>