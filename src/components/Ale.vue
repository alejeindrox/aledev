<template>
  <div v-if="info.contact">
    <!-- Main Content -->
    <section id="body" class="">
      <div class="container">

        <!-- MAIN MENU -->
        <div class="main-menu" id="main-menu">
          <ul class="main-menu-list">
            <li><a href="#page-home" class="link-home">{{ info.menu.home}}</a></li>
            <li><a href="#page-resume" class="link-page">{{ info.menu.resume}}</a></li>
            <li><a href="#page-skills" class="link-page">{{ info.menu.skill}}</a></li>
            <li><a href="#page-portfolio" class="link-page">{{ info.menu.portfolio}}</a></li>
            <li><a href="#page-contact" class="link-page">{{ info.menu.contact}}</a></li>
            <li>
              <img v-if="len" class="lang-page" @click="enProfile" src="/static/img/flags/england.png">
              <img v-if="lsp" class="lang-page" @click="esProfile" src="/static/img/flags/spain.png">
              <img v-if="lfr" class="lang-page" @click="frProfile" src="/static/img/flags/france.png">
            </li>
          </ul>
        </div>
        <!-- /MAIN MENU -->

        <!-- SECTION: vCard Body  -->
        <div class="section-vcardbody section-home" id="section-home">
          <div class="vcard-profile-pic">
            <img :src="info.extra.image_one" id="profile1" class="profileActive" alt="" />
            <img :src="info.extra.image_two" id="profile2" alt="" />
          </div>
          <div class="vcard-profile-description">
            <h1 class="profile-title">{{ info.information.hello }} <span class="color1">{{ info.extra.name }}</span></h1>
            <h2 class="profile-subtitle">{{ info.extra.carrer }}</h2>
            <hr class="hr1">
            <div class="vcard-profile-description-text">
              <p>{{ info.information.description }}</p>
            </div>
            <div class="vcard-profile-description-feature">
              <div class="vcard-profile-description-ft-item">
                <p>{{ info.information.mail }}: {{ info.extra.email }} / {{ info.information.Phone }} {{ info.extra.phone }}</p>
              </div>
            </div>
          </div>
          <div class="vcard-footer">
            <div class="footer-social-icons">
              <a href="https://github.com/alejeindrox"><i class="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/alejandro-r-lopez"><i class="fa fa-linkedin"></i></a>
              <a href="https://www.instagram.com/alejeindrox"><i class="fa fa-instagram"></i></a>
              <a href="https://www.npmjs.com/~alejeindrox"><i class="fa fa-terminal"></i></a>
            </div>
          </div>
        </div>
        <!-- /SECTION: vCard Body  -->

        <!-- PAGE: RESUME -->
        <div class="section-vcardbody section-page" id="page-resume">
          <div class="section-education">
            <h2 class="section-title">{{ info.resume.title }}</h2>
            <div class="resume-buttons header-page-buttons">
              <a href="#" class="btn btn-default btn-default2"><i class="fa fa-download"></i>&nbsp; {{ info.resume.button }}</a>
              <a href="#" class="btn btn-default btn-default2 link-page"><i class="fa fa-download"></i>&nbsp;  {{ info.resume.button_two }}</a>
            </div>
            <h2 class="section-title2"><i class="fa fa-university"></i>&nbsp; {{ info.resume.education.title }}</h2>
            <div class="resume-item" v-for="education in info.resume.education.content">
              <h3 class="section-item-title-1">{{ education.certificate }}</h3>
              <h4 class="graduation-time">{{ education.institution }} ({{ education.time }}) - <span class="graduation-date">{{ education.graduate }}</span></h4>
              <div class="graduation-description">
                <p>{{ education.description }}</p>
              </div>
            </div>
          </div>
          <div class="section-education">
            <h2 class="section-title2"><i class="fa fa-flag"></i>&nbsp; {{ info.resume.job.title }}</h2>
            <div class="resume-item" v-for="job in jobs">
              <h3 class="section-item-title-1">{{ job.company }}</h3>
              <h4 class="job">{{ job.position }} - <span class="job-date">{{ job.date }}</span></h4>
              <div class="graduation-description">
                <p>{{ job.description }}</p>
              </div>
            </div>
          </div>
          <h2 class="section-title2"><i class="fa fa-commenting"></i>&nbsp; {{ info.resume.testimonial_title }}</h2>
          <div class="testimonials">
            <div class="testimonial-slides" id="testimonial-carousel">
              <div class="testimonial-item" v-for="testimonial in info.resume.testimonial">
                <div class="testimonial-content">
                  <p>"{{ testimonial.description }}"</p>
                </div>
                <div class="testimonial-credits">
                  <div class="testimonial-picture">
                    <img :src="testimonial.image" alt="" />
                  </div>
                  <p class="testimonial-author">{{ testimonial.boss }}</p>
                  <p class="testimonial-firm">{{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="page-footer">
            <div class="resume-buttons">
              <a href="#" class="btn btn-default btn-default2"><i class="fa fa-download"></i>&nbsp; {{ info.resume.button }}</a>
              <a href="#" class="btn btn-default btn-default2 link-page"><i class="fa fa-download"></i>&nbsp;  {{ info.resume.button_two }}</a>
            </div>
            <p class="footer-quote">"{{ info.resume.quote.extract }}" <br/><i>{{ info.resume.quote.name }}</i></p>
          </div>
        </div>
        <!-- /PAGE: RESUME  -->

        <!-- SECTION: SKILLS-->
        <div class="section-vcardbody section-page" id="page-skills">
          <div class="section-skills">
            <h2 class="section-title">{{ info.skills.title }}</h2>
            <h3 class="section-item-title-2"><i class="fa fa-users"></i>&nbsp;&nbsp; {{ info.skills.profesional.title }}</h3>
            <ul class="skills-list">
              <li v-for="(pro, index) in info.skills.profesional.content">
                <div class="progress" title="Doing my best!">
                  <div class="progress-bar" :class="{'progress-bar-2': index == 1, 'progress-bar-3': index == 2}" role="progressbar" :style="{width: pro.rate}">
                    <span class="sr-only">{{ pro.complete }}</span>
                  </div>
                  <span class="progress-type">{{ pro.name }}</span>
                  <span class="progress-completed">{{ pro.percentage }}</span>
                </div>
              </li>
            </ul>
            <h3 class="section-item-title-2"><i class="fa fa-empire"></i>&nbsp;&nbsp; {{ info.skills.best.title }}</h3>
            <ul class="skills-list">
              <li v-for="(best, index) in info.skills.best.content">
                <div class="progress" title="top works!">
                  <div class="progress-bar" :class="{'progress-bar-2': index == 1, 'progress-bar-3': index == 2}" role="progressbar" :style="{width: best.rate}">
                    <span class="sr-only">{{ best.complete }}</span>
                  </div>
                  <span class="progress-type">{{ best.name }}</span>
                  <span class="progress-completed">{{ best.percentage }}</span>
                </div>
              </li>
            </ul>
            <h3 class="section-item-title-2"><i class="fa fa-code"></i>&nbsp;&nbsp; {{ info.skills.code.title }}</h3>
            <ul class="skills-list">
              <li v-for="(codes, index) in info.skills.code.content">
                <div class="progress">
                  <div class="progress-bar" :class="{'progress-bar-2': index == 1, 'progress-bar-3': index == 2}" role="progressbar" :style="{width: codes.rate}">
                    <span class="sr-only">{{ codes.complete }}</span>
                  </div>
                  <span class="progress-type">{{ codes.name }}</span>
                  <span class="progress-completed">{{ codes.percentage }}</span>
                </div>
              </li>
            </ul>
            <h3 class="section-item-title-2"><i class="fa fa-laptop"></i>&nbsp;&nbsp; {{ info.skills.framework.title }}</h3>
            <ul class="skills-list">
              <li v-for="(framework, index) in info.skills.framework.content">
                <div class="progress">
                  <div class="progress-bar" :class="{'progress-bar-2': index == 1, 'progress-bar-3': index == 2}" role="progressbar" :style="{width: framework.rate}">
                    <span class="sr-only">{{ framework.complete }}</span>
                  </div>
                  <span class="progress-type">{{ framework.name }}</span>
                  <span class="progress-completed">{{ framework.percentage }}</span>
                </div>
              </li>
            </ul>
            <h3 class="section-item-title-2"><i class="fa fa-comments"></i>&nbsp;&nbsp; {{ info.skills.language.title }}</h3>
            <ul class="skills-list">
              <li v-for="(language, index) in info.skills.language.content">
                <div class="progress">
                  <div class="progress-bar" :class="{'progress-bar-2': index == 1, 'progress-bar-3': index == 2}" role="progressbar" :style="{width: language.rate}">
                    <span class="sr-only">{{ language.complete }}</span>
                  </div>
                  <span class="progress-type">{{ language.name }}</span>
                  <span class="progress-completed">{{ language.percentage }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- /SECTION: SKILLS  -->

        <!-- SECTION: PORTFOLIO-->
        <div class="section-vcardbody section-page" id="page-portfolio">
          <div class="section-portfolio">
            <h2 class="section-title">{{ info.portfolio.title }}</h2>
            <div class="projects-list">
              <div class="project-item" v-for="portfolio in portfolios">
                <a :href="portfolio.link" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" :style="{ backgroundImage: 'url('+portfolio.image+')'}" target="_blank">
                  <div class="project-description-wrapper">
                    <div class="project-description">
                      <h2 class="project-title">{{ portfolio.company }}</h2>
                      <span class="see-more">{{ portfolio.description }}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- /SECTION: PORTFOLIO  -->

        <!-- SECTION: CONTACT-->
        <div class="section-vcardbody section-page" id="page-contact">
          <div class="section-contact">
            <h2 class="section-title">{{ info.contact.title }}</h2>
            <div class="map">
              <div class="map-overlay"></div>
              <iframe :src="info.contact.map" height="250" style="border:0" allowfullscreen></iframe>
            </div>
            <div class="contact-infos">
              <h4 class="contact-subtitle-1"><i class="fa fa-map"></i>&nbsp;   {{ info.contact.address.title }}</h4>
              <p>{{ info.contact.address.description }}</p>
              <h4 class="contact-subtitle-1"><i class="fa fa-phone-square"></i>&nbsp; {{ info.contact.phone.title }}</h4>
              <p>{{ info.contact.phone.description }}</p>
              <h4 class="contact-subtitle-1"><i class="fa fa-envelope"></i>&nbsp; {{ info.contact.email.title }}</h4>
              <p>{{ info.contact.email.description }}</p>
            </div>
          </div>
        </div>
        <!-- /SECTION: CONTACT  -->
      </div>
    </section>

    <!-- /Main Content -->
  </div>
</template>

<script>

import { db } from '../main'

export default {
  name: 'Ale',

  data () {
    return {
      profiles: [],
      len: false,
      lsp: false,
      lfr: false,
      info: []
    }
  },

  mounted() {
    setTimeout(() => {
      this.enProfile()
    }, 5000)

    setTimeout(() => {
      this.jsStyle()
    }, 6000)
  },

  firestore () {
    return {
      profiles: db.collection('profiles')
    }
  },

  methods: {
    enProfile() {
      this.info = this.profiles[0]
      this.len = false
      this.lsp = true
      this.lfr = true
    },

    esProfile() {
      this.info = this.profiles[1]
      this.len = true
      this.lsp = false
      this.lfr = true
    },

    frProfile() {
      this.info = this.profiles[2]
      this.len = true
      this.lsp = true
      this.lfr = false
    },

    jsStyle() {
      (function($) {
        "use strict";

        $(document).ready(function(){

          $("#testimonial-carousel").owlCarousel({
            navigation : false,
            slideSpeed : 300,
            paginationSpeed : 400,
            responsiveRefreshRate : 200,
            responsiveBaseWidth: window,
            pagination: true,
            singleItem: true,
            navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
          });

          $('.map').on('click', function(){
            $('.map-overlay').hide();
          });

          $('.map').on('mouseleave', function(){
            $('.map-overlay').show();
          });

          $('a.nivobox').nivoLightbox({ effect: 'fade' });

          $('.section-vcardbody').perfectScrollbar({
            wheelSpeed: 0.9
          });

          var linkHome = 0;
          var linkPage = '';

          function pageOn(){
            $('#main-menu').addClass('main-menu-pgactive');
            $('#section-home').addClass('section-vcardbody-pgactive');
            $('.profileActive').removeClass('profileActive');
            $('#profile2').addClass('profileActive');
            linkHome = 1;
          }

          function pageOff(){
            $('.section-page-active').removeClass('section-page-active');
            $('#main-menu').removeClass('main-menu-pgactive');
            $('#section-home').removeClass('section-vcardbody-pgactive');
            $('.profileActive').removeClass('profileActive');
            $('#profile1').addClass('profileActive');
            linkHome = 0;
          }

          $(".link-page").on('click', function(event){
            event.preventDefault();
            $('.menuActive').removeClass('menuActive');
            $(this).addClass('menuActive');
            linkPage = $(this).attr('href');
            $('.section-page-active').removeClass('section-page-active');
            $(linkPage).addClass('section-page-active');
            pageOn();
          });

          $(".link-home").on('click', function(event){
            event.preventDefault();
            if (linkHome == 0) {
            }
            else if (linkHome == 1) {
              $('.menuActive').removeClass('menuActive');
              $(this).addClass('menuActive');
              pageOff();
            }
          });
        });
      })(jQuery);
    }
  },

  computed: {
    portfolios() {
      return this.info.portfolio.content.reverse()
    },

    jobs() {
      return this.info.resume.job.content.reverse()
    }

  }
}
</script>

<style>

</style>
