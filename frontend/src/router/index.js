import Vue from 'vue'
import VueRouter from 'vue-router'
//router components
import Home from          '../views/Home.vue'
import About from         '../views/About.vue'
import Blog from          '../views/Blog.vue'
import Contact from       '../views/Contact.vue'
import Portfolio from     '../views/Portfolio.vue'
import Post from          '../views/Post.vue'
import Login from         '../views/Login.vue'
import E404 from          '../views/E404.vue'

////admin
import Dashboard from     '../views/admin/Dashboard.vue';
import PostCreate from    '../views/admin/PostCreate.vue';  


//middleware
import ifAuthenticated from './middleware.js';


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    props: true,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
   {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      middleware: ifAuthenticated,
    }
   },
   {
    path: '/dashboard/post/create',
    name: 'postCreate',
    component: PostCreate,
    meta: {
      middleware: ifAuthenticated,
    }
   },
  {
    path: '/*',
    component: E404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//middleware handlers

function nextFactory( context, middleware, index ){
  const subsequentMiddleware = middleware[index];
  if( !subsequentMiddleware)return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory( context, middleware, index+1);
    subsequentMiddleware({...context, next: nextMiddleware});
  }
}

router.beforeEach( (to, from, next) => {
  if( to.meta.middleware){
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
  
  const context = {
    from, 
    next, 
    router, 
    to,
  }
  const nextMiddleware = nextFactory(context, middleware, 1);
  
  return middleware[0]({...context, next: nextMiddleware });
  }
  return next();
})



export default router
