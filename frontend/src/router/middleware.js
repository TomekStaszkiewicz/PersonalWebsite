import store from '../store.js';

export default function ifAuthenticated( {next, router } ){
  if( !store.getters.isAuthenticated){
    return router.push({name: 'home'});
   }
   else{
     return next();
   }
}


