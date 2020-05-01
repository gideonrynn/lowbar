<template>

    <div class="task-section" :style="taskStyle" id="body">
        <p class="mission"> <em>Your mission, should you <br>choose to accept it:</em></p>

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
                width: "600px",
                height: "380px",
                margin: "auto",
                padding: "25px"
            }
        }
    },
    props: ["tasks"]
}
</script>

<style scoped>

.mission {
    font-size: 20px;
    padding-bottom: 10px
}

</style>