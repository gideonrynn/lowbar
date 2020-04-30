<template>

    <div>
        <h1>Your Task Is:</h1>

        <div v-bind:key="task.id" v-for="task in tasks">
            <!-- embed the selected task here -->
            <TaskSelected v-bind:task="task"/>
            <br><br>
        </div>

    </div>

</template>

<script>

import TaskSelected from './TaskSelected.vue'
export default {
    name: "Task",
    components: {
        TaskSelected
    },
    props: ["tasks"]
}
</script>

<style scoped>

</style>