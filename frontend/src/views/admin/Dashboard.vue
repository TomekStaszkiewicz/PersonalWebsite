<template>
<section class="dashboard-container row">
    
   <table class="col-12">
     <tr>
    <th>
        Email
    </th>
    <th>
        Message
    </th>
    <th>
        Action
    </th>
    </tr>
   <tr v-for="m in messages" v-bind:key="m.id">
        <td><a :href="'mailto:'+m.email">{{m.email}}</a></td><td>{{Stm.content}}</td><td><a class="btn btn-warning" href="javascript:void(0)" @click="deleteMessage(m.id)">Usuń</a></td>
        <hr>
        </tr>
    </table>
    <hr>
    <table class="col-12">
    <tr>
    <th>
        Title
    </th>
    <th>
        Content
    </th>
    <th>
        Action
    </th>
    </tr>
   <tr v-for="p in posts" v-bind:key="p.id" >
        <td v-html="p.title"></td><td v-html="str.substring( p.content, 20)"></td><td><a class="btn btn-warning" href="javascript:void(0)" @click="deletePost(p.id, p.photo)">Delete</a></td>
        <hr>
        </tr>
    </table>
    <a href="/dashboard/post/create" class="btn btn-danger col-12">Dodaj nowy post</a>
</section>

</template>

<script>
    const URLmessages = require('../../router/api.js').adminURLS.allMessages;
    const URLposts = require('../../router/api.js').adminURLS.allPosts;
    const URLvisits = require('../../router/api.js').adminURLS.allVisits;
    const URLdeleteMessage = require('../../router/api.js').adminURLS.deleteMessage;
    const URLdeletePost = require('../../router/api.js').adminURLS.deletePost;
    import axios from 'axios';
    export default{
        name: 'dashboard',
        data(){
            return{
                messages: [],
                visits: 0,
                posts: [],
            }
        },
        mounted(){
            axios.get(URLmessages)
            .then( res => this.messages = res.data)
            .catch( err => console.error(err));

            axios.get(URLvisits)
            .then( res => this.visits = res.data )
            .catch( err => console.error(err));

            
            axios.get(URLposts)
            .then( res => this.posts = res.data )
            .catch( err => console.error(err));
        },
        methods: {
            deleteMessage: function( id ){
                if( confirm("Are you sure?") )
                {
                    axios.delete( URLdeleteMessage + id)
                        .then( res => console.log(res.message))
                            .then(() => {
                                //deleting message from array
                                this.messages.splice( this.messages.indexOf( this.messages.find( el => el.id === id) ), 1 );
                            })
                            .catch( err => console.error( err ));

                }
            },
            deletePost: function( id, photoName ){
                if( confirm("Are you sure?") )
                {
                    axios.delete( URLdeletePost + id + '/' + photoName)
                        .then( res => console.log(res.post))
                        .then(() => {
                                //deleting message from array
                                this.posts.splice( this.posts.indexOf( this.posts.find( el => el.id === id) ), 1 );
                            })
                            .catch( err => console.error( err ));

                }
            }
        }
    }
</script>