<template>
    <h1>Task Detail</h1>

    <form @submit.prevent="handleUpdate()">

        <input type="text"  >

        <textarea rows="3"></textarea>

        <button>Actualizar</button>

    </form>

        <button @click="handleDelete()">Eliminar</button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getTask, updateTask, deleteTask } from '../services/TaskService';
import { Task } from '../models/Task';

export default defineComponent({
    name: "task",
    data() {
        return {
            currentTask: {

            } as Task,
        }
    },
    methods: {
    async loadTask(id: number) {
        try {
        const { data } = await getTask(id);
        this.currentTask = data;
        } catch (error) {
        console.error(error);
         }
    },
    async handleUpdate() {
        
          await updateTask(this.$route.params.id, this.currentTask);
          this.$router.push("/");
        
     
    },
    async handleDelete() {
    
          deleteTask(this.$route.params.id);
          this.$router.push("/");
        }
      
  },
        
    mounted(){
        if (typeof this.$route.params.id === 'string') {
            this.loadTask(this.$route.params.id);
        }
    },

});

</script>