<template>
  <div id="app">
    <Nav />
    <Tasks v-bind:tasks="tasks" />
  </div>
</template>

<script>
import Nav from './components/layout/Nav'
import Tasks from './components/Tasks.vue'
import moment from 'moment'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    Nav,
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    axios.get('http://localhost:3001/api/tasks')
      .then(res => {

        let randomAll = res.data;
        console.log(randomAll);

        // let randomTaskFromAll = [res.data[Math.floor(Math.random() * res.data.length)]];
        // console.log(randomTaskFromAll);
        
        let todaysDate = moment().format('MM/DD/YYYY')

        let filteredTasks = randomAll.filter(randomAll => { 
          return randomAll.lastComplete < todaysDate || randomAll.lastComplete == ""
          });

        console.log(filteredTasks);
        
        let randomTask = [filteredTasks[Math.floor(Math.random() * filteredTasks.length)]]

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
