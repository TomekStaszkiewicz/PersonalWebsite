<template>
<section class="dashboard-create-page">
<a href="/dashboard" class="btn btn-warning">Powrót</a>
    <b-form @submit.prevent="onSubmit">
     <b-form-group id="input-group-image" label="Dodaj zdjęcie:" label-for="image">
        <b-form-file
          id="image"
          v-model="image"
          required
          @change="handleFileUpload"
          accept="image/*"
        ></b-form-file>
      </b-form-group>

         <b-form-group id="input-group-title" label="Tytuł:" label-for="title">
        <b-form-input
          id="title"
          v-model="post.title"
          required
          placeholder="Tytuł"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-content" label="Treść:" label-for="content">
        <tinymce-editor id="content" v-model="post.content"></tinymce-editor>
</b-form-group>

      <b-button type="submit" variant="primary">Stwórz post</b-button>

    </b-form>
</section>
</template>


<script>
    const URL = require('../../router/api.js').adminURLS.postCreate;
    import Editor from '@tinymce/tinymce-vue';
   
    export default{
        name: 'PostCreate',
        components: {
            'tinymce-editor': Editor,
        },
        data(){
            return{
                post: {
                    title: '',
                    content: '',
                    date: '',
                    photo: '',
                },
                image: null,
            }
        },

        methods: {
            onSubmit: function(){
            //    this.post.photo = this.image.name;
               let fd = new FormData();
               fd.append('image', this.image, this.image.name );
               fd.append('title', this.post.title );
               fd.append('content', this.post.content);
            //    fd.append('photo', this.post.photo );
                const config = {
                    method: 'post',
                    body: fd,
                                };
           

                console.log( fd );
                fetch(URL, 
                config,
                )
                .then( res => res.json() )
                    .then( console.log("Success!") )
                        .catch( err => console.error(err));
            },
            handleFileUpload: function(event){
            this.image = event.target.files[0];
            this.post.photo = this.image.name; 
            console.log( this.image.name, this.post.photo)
        }
        },
    }

</script>