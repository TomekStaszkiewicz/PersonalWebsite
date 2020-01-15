<template>
<section>
    
   <b-table striped hover :items="messages"></b-table>
    <h2>Visits: {{visits}}</h2>
    <a href="/dashboard/post/create" class="btn btn-danger">Dodaj nowy post</a>
</section>

</template>

<script>
    const URLmessages = require('../../router/api.js').adminURLS.allMessages;
    const URLvisits = require('../../router/api.js').adminURLS.allVisits;

    import axios from 'axios';
    export default{
        name: 'dashboard',
        data(){
            return{
                messages: [],
                visits: 0,
            }
        },
        mounted(){
            axios.get(URLmessages)
            .then( res => this.messages = res.data)
            .catch( err => console.error(err));

            axios.get(URLvisits)
            .then( res => this.visits = res.data )
            .catch( err => console.error(err));
        },
    }
</script>