<template>

    <div class="task-section" id="body">
        <p class="mission"> <em>Your mission, should you <br>choose to accept it:</em></p>
        
        <div v-bind:key="task.id" v-for="task in tasks">
            <div v-bind:task="task" class="task-selected">
                <p class="task-name">{{task.taskName}}</p>
                <b-button size="lg" style="margin: 5px" variant="success" v-on:click="completeTask(task.id)">Complete</b-button>
                <b-button size="lg" style="margin: 5px" variant="info" v-on:click="skipTask()">Skip</b-button><br>
                <p class="last-completed">Last Completed on: {{task.lastComplete}}</p>
                <br><br>
            </div>
        </div>
    </div>

</template>

<script>
// import axios from 'axios';
export default {
    name: "Task",
    props: {
        tasks: {
            type: Array
        },
        storedTasks: {
            type: Array
        }
    }
    ,
    methods: {
        completeTask(id) {
            let today = new Date();
            let storedDate = today.toLocaleDateString();

            console.log("this was clicked on " + storedDate);
            console.log(id);

            console.log("Current value of tasks's last complete: ", this.tasks[0].lastComplete);

            let storedTasks = this.storedTasks;
            console.log("Stored tasks: ", storedTasks);

            //update completed date on page
            this.tasks[0].lastComplete = storedDate;
            console.log("Updated lastComplete date: ", this.tasks[0].lastComplete);

            // update completed date
            // const todaysDate = {
            //     lastComplete: storedDate
            // };
            // console.log(todaysDate);

            let newArr = storedTasks.map(obj => {
            if (obj.id === 1) {
                return {...obj, lastComplete: storedDate};
            }
            return obj;
            });

            console.log(newArr);
            this.$emit('newTasks', newArr);

            // axios.put("http://localhost:3001/api/tasks/" + id, todaysDate)
            // axios.put('tasks.json'+ "/0", todaysDate)
            //     .then(res => {
            //         console.log(res)
            //         this.$emit('newTasks');
            //         })
            //     .catch(err => console.log(err))

            // show new task
        },
        skipTask() {
            console.log("skip to another task");
            this.$emit('newTasks', this.storedTasks);
        }
    }
}
</script>

<style scoped>

.mission {
    font-size: 20px;
    padding: 20px;
}

.task-section {
    border-radius: 1% 2% / 1% 2%;
    background-color: whitesmoke;
    width: "600px";
}
.last-completed {
    font-size: small;
}

.task-name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 200px;
    font-size: 70px;
    line-height: 72px;
    padding: 18px;
}

</style>