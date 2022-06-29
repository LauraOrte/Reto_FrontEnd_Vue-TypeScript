<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">tasks</router-link>
            </li>
            <li>
                <router-link to="/tasks/new">create task</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent} from 'vue';

export default defineComponent({
    name: "Navbar",
});
</script>