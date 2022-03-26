<template>
  <div id="app">
    <!-- <Nav /> -->
    <Tasks v-bind:tasks="tasks" />
  </div>
</template>

<script>
// import Nav from './components/layout/Nav'
import Tasks from './components/Tasks.vue'
import moment from 'moment'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    // Nav,
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    // axios.get('http://localhost:3001/api/tasks')
    axios.get('tasks.json')
      .then(res => {

        let randomAll = res.data;
        console.log("All random tasks: ", randomAll);

        // let randomTaskFromAll = [res.data[Math.floor(Math.random() * res.data.length)]];
        // console.log(randomTaskFromAll);
        
        let todaysDate = moment().format('MM/DD/YYYY');
        console.log("Today: ", todaysDate);

        let filteredTasks = randomAll.filter(randomAll => { 
          return randomAll.lastComplete <= todaysDate || randomAll.lastComplete === ""
          });
          
        console.log("Tasks that have a lastComplete date earlier than today: ", filteredTasks);

        let nonFilteredTasks = randomAll.filter(randomAll => { 
          return randomAll.lastComplete >= todaysDate
          });
  
        console.log("Tasks that have a lastComplete date more recent than today: ", nonFilteredTasks);
        
        let randomTask = [randomAll[Math.floor(Math.random() * randomAll.length)]]
        console.log("Selected random task: ", randomTask);
        this.tasks = randomTask;
      })
      .catch(err => console.log(err))
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
body {
  background-image: url('assets/giftly.png')
}
</style>
