<template>
  <section class="contact-page row">
    <div class="col-12 col-md-6 offset-md-3">
        <section>

          <header>
            <h3><a href="mailto:staszkiewicztoma@gmail.com" class="contact-email-link" title="staszkiewicztoma@gmail.com">Send an email</a> or leave your message here!
            </h3>
          </header>
          <b-form @submit="onSubmit">

            <b-form-group
              id="email-input-group"
              label="Email"
              label-for="email"
              description="It will be visible just for me :)"
            >
            <b-form-input
            id="email"
            v-model="message.email"
            type="email"
            required
            placeholder="Your email addres"
            >
            </b-form-input>
            </b-form-group>


            <b-form-group
              id="content-input-group"
              label="Your message"
              label-for="content"
            >
              <b-form-textarea
              id="content"
              v-model="message.content"
              required
              placeholder="Your message"
              >
              </b-form-textarea>
            </b-form-group>

          <b-button type="submit">Send!</b-button>
          </b-form>
        </section>
    </div>
  </section>
</template>

<script>

  const axios = require('axios');
  const contactURL = require('../router/api.js').publicURLS.contact;

export default {
  name: 'contact',
  data(){
    return{
      message: {
        email: '',
        content: ''
      }
    }
  },
   methods: {
    onSubmit(){
        axios.post(contactURL, 
        {
         message: this.message,
         }
          )
          .then( alert('Wiadomość wysłana!'))
        .catch( err => console.error(err));
    },
  }
}
</script>
