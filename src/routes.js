import SignIn from './components/SignIn.vue'
import GroupPage from './components/GroupPage.vue'
import HomePage from './components/HomePage.vue'
import About from './components/About.vue'
import Profile from './components/Profile.vue'
import CreateGroup from './components/CreateGroup.vue'
import Contact from './components/Contact.vue'
import Register from './components/Register.vue'
import NotSignedIn from './components/NotSignedIn.vue'
import Edit from './components/Edit.vue'


export default [
    {path:"/", component: HomePage, meta:{title:'Home'}},
    {path:'/Sign-In', component: SignIn, meta:{title:'Sign In'}},
    {path: "/Group-Page", component: GroupPage, meta:{title:'Join Group', requiresAuth: true}},
    {path: "/Home-Page", component: HomePage, meta:{title:'Home'}},
    {path: "/About", component: About, meta:{title:'About'}},
    {path: "/users/:userId",name:'profile', component: Profile, props: true, meta : {title:'Profile', requiresAuth: true}},
    {path: "/Create-Group", component: CreateGroup, meta:{title:'Create Group', requiresAuth: true}},
    {path: "/Contact", component: Contact, meta:{title:'Contact Us'}},
    {path: "/Register", component: Register, meta:{title:'Register'}},
    {path:'/Not-Signed-In', component: NotSignedIn, meta:{title:'Please sign in'}},
    {path:'/Edit-Details', component: Edit, meta:{title:'Edit Details'}}
]
