<template>
  <section class="about-container row">
      
      <div class="col-12 about-photo">
      <img src="https://picsum.photos/1200/400" alt="Picture">
      </div>


      <div class="col-12">
        <div class="about-paragraph w-100">
          <h1>
            { about me }
          </h1>
          <p>I am young, ambitious web developer fascinated by the world of programming. I started learning coding in 2017 and after trying multiple fields( embedded, data science ) I found web development the most interesting one. </p>
        </div>
        <div class="about-paragraph">
          <h1>
            { interests }
          </h1>
                    <p>Apart from programming I also watch a lot of basketball games. I am a huge fan of NBA, one of my dreams is to watch a NBA game live! I also like literature and movies, trying to extend my knowledge in those fields. </p>
        </div>
        <div class="about-paragraph">
          <h1>
            { tech stack }
          </h1>
                    <p>I am a big fan of javascript. For frontend I use VueJS along with SCSS, sometimes a little bit of jQuery. I am using node.js(Express.js) and Laravel(PHP) for backend. </p>
        </div>
        <div class="about-paragraph">
          <h1>
            { experience }
          </h1>
                    <p>I had been working in small web dev studio as fullstack web developer(Laravel/VueJS) for half a year and then I have done multiple freelance projects. Some examples of projects created by me:
                    <ul>
                      <li>Custom CMS system using Laravel and vueJS</li>
                      <li>Website focused on creating and selling articles</li>
                      <li>Website for people looking for job offers abroad</li>
                    </ul></p>
        </div>
        </div>
  </section>
</template>
<script>
  export default{
    name: 'about',

  }
</script>
