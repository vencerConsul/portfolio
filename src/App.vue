<template>
  <Header />
  <About />
  <HighlightedProjects />
  <ShowcaseProjects />
  <Experience />
  <Contact />
  <Footer />
</template>

<script>
import Header from './snippets/Header.vue'
import Footer from './snippets/Footer.vue'
import About from './components/About.vue'
import HighlightedProjects from './components/HighlightedProjects.vue';
import ShowcaseProjects from './components/ShowcaseProjects.vue';
import Experience from './components/Experience.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    About,
    HighlightedProjects,
    ShowcaseProjects,
    Experience,
    Contact
  }
}
</script>