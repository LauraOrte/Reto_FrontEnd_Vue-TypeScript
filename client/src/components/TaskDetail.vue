<template>
    <h1>Task Detail</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getTask } from '../services/TaskService';


export default defineComponent({
    methods: {
        async loadTask(id: string) {
           const res = await getTask(id);
           console.log(res);
           
        
        },
    },
    mounted(){
        if (typeof this.$route.params.id === 'string') {
            this.loadTask(this.$route.params.id);
        }
    },

});

</script>