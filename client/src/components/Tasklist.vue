<template>
    <ul>
        <li v-for="(task, index) in tasks" 
        :key="index" 
        @click= "this.$router.push(`/tasks/${task.id}`)">
            {{ task.title }}

        </li>
    </ul>
</template>


<script lang="ts">
import {Task} from '../interfaces/Task';
import {defineComponent} from 'vue'
import { getTasks } from '../services/TaskService'


export default defineComponent({
    data() {
        return {
           tasks: [] as Task [] 
    };
    },

    methods:{
        async loadTasks(){
            const res = await getTasks();
            this.tasks = res.data
            
        },
    },

    mounted(){
        this.loadTasks();

    },

});

</script>