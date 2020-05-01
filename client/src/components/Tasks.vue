<template>

    <div class="task-section" :style="taskStyle" id="body">
        <h4><em>Your mission, should you <br>choose to accept it:</em></h4>

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
    data () {
        return {
            taskStyle: {
                backgroundColor: "#FFFFFF",
                width: "500px",
                height: "330px",
                margin: "auto",
                padding: "40px"
            }
        }
    },
    props: ["tasks"]
}
</script>

<style scoped>

</style>