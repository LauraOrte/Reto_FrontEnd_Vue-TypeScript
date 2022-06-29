<template>
    <form @submit.prevent="saveTask">
        <input type="text" placeholder="Escribe el título" v-model="task.title">

        <textarea rows="3" placeholder="Escribe la descripción" v-model="task.description"></textarea>

        <button>Guardar</button>
    </form>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import {Task} from '../interfaces/Task';
import {createTask} from '../services/TaskService';

export default defineComponent({
    data() {
        return {
            task: {} as Task
        };
    },

    methods: {
        async saveTask() {
            const res = await createTask(this.task);
            console.log(res);
            this.$router.push({name: 'tasks'});        
        }
    }

})


</script>