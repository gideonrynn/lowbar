<template>
    <div class="task-selected">
        <p class="task-name">{{task.taskName}}</p>
        <b-button size="lg" style="margin: 5px" variant="success" v-on:click="completeTask(task._id)">Complete</b-button>
        <b-button size="lg" style="margin: 5px" variant="info" v-on:click="skipTask">Skip</b-button><br>
        <p class="last-completed">Last Completed on: {{task.lastComplete}}</p>
    </div>

</template>

<script>
import moment from 'moment'
import axios from 'axios';

export default {

    name: "TaskSelected",
    props: ["task"],
    methods: {
        completeTask(id) {
            console.log("this was clicked on " + moment().format('MM/DD/YYYY'));
            // update completed date
            this.task.lastComplete = moment().format('MM/DD/YYYY')
            console.log(id)
            const todaysDate = {
                lastComplete: moment().format('MM/DD/YYYY')
            } 

            axios.put("http://localhost:3001/api/tasks/" + id, todaysDate)
                .then(res => console.log(res))
                .catch(err => console.log(err))

            // show new task
        },
        skipTask() {
            console.log("skip to another task");
            window.location.reload()
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
    line-height: 72px;
    padding-bottom: 18px;
}


</style>