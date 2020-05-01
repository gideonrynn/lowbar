<template>
    <div class="task-selected">
        <p class="task-name">{{task.taskName}}</p>
        <b-button size="lg" style="margin: 5px" variant="success" v-on:click="completeTask">Complete</b-button>
        <b-button size="lg" style="margin: 5px" variant="info" v-on:click="skipTask">Skip</b-button><br>
        <p class="last-completed">Last Completed on: {{task.lastComplete}}</p>
    </div>

</template>

<script>
import moment from 'moment'

export default {

    name: "TaskSelected",
    props: ["task"],
    methods: {
        completeTask() {
            console.log("this was clicked on " + moment().format('MM/DD/YYYY'));
            // update completed date
            this.task.lastComplete = moment().format('MM/DD/YYYY')

            // show new task
        },
        skipTask() {
            console.log("skip to another task");
        }
    }
}
</script>

<style scoped>

.last-completed {
    font-size: small
}

.task-name {
    font-size: 70px;
}

.variant {
    margin: 10px;
}

</style>