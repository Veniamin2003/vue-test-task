import {createStore} from "vuex";
import {usersModule} from "@/vuex/usersModule";

export default createStore({
    modules: {
        users: usersModule
    }
})