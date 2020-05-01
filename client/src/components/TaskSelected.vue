<template>
    <div>
        
        {{task.taskName}} <br>
        <b-button variant="success" v-on:click="completeTask">Complete</b-button>
        <b-button variant="info" v-on:click="skipTask">Skip</b-button><br>
        Last Completed on: {{task.lastComplete}}
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
body {
    background: lightskyblue;
}

</style>