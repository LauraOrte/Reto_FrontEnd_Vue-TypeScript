<template>
    <nav>
        <ul>
            <li>
                <a href="">tasks</a>
            </li>
            <li>
                <a href="/tasks/new">create task</a>
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