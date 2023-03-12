import { defineStore } from "pinia";

const useScrollTotore = defineStore("scrollTo", {
    state: () => ({
        flag: false,
        path: "",
        currentPath: ""
    }),
})

export default useScrollTotore;