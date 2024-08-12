import { createRouter,createWebHistory } from "vue-router";
import HomeView from '@/views/HomeVue.vue'
import JobsView from "@/views/JobsView.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView
        },
        {
            path:'/jobs/:id',
            name:'Job',
            component:JobView
        },
        {
            path:'/:catchAll(.*)',
            name:'Not-Found',
            component:NotFound
        },
        {
            path:'/jobs/add',
            name:'add jobs',
            component:AddJobView
        },
        {
            path:'/jobs/edit/:id',
            name:'edit jobs',
            component:EditJobView
        }

    ]
})
export default router