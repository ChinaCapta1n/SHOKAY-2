import { defineStore } from "pinia";

const useTestStore = defineStore("test", {
    state: () => ({
        test: "test"
    }),
    actions: {

    }
})

export default useTestStore;