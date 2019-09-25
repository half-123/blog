import addNote from './components/addNote'
import articlItem from './components/articlItem'
import items from './components/items.vue'
import sideBar from "./components/sideBar"
import login from './components/login.vue'
export default[
    {
        path: '/',
        components: {
            default: items,
            sidebar: sideBar,
            login :login
        }

    },
    {
        path: '/items/:type',
        components: {
            default: items,
            sidebar: sideBar,
        }

    },
    {
        path:"/item",
        components: {
            default: articlItem,
            sidebar: sideBar
        }
    },
    {
        path:"/add",
        components: {
            default: addNote,
            sidebar: null
        },
        meta: {
            title: '',
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
    },


]