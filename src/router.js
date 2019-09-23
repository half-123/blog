import addNote from './components/addNote'
import articlItem from './components/articlItem'
import items from './components/items.vue'
import sideBar from "./components/sideBar";
export default[
    {
        path: '/',
        components: {
            default: items,
            sidebar: sideBar,
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
        }
    },


]