import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ScrollAnimation from './directives/scrollanimation';

createApp(App).directive('scrollanimation', ScrollAnimation).mount('#app');
