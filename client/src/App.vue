<template>
  <div id="app">
    <!-- <Nav /> -->
    <Tasks
      @newTasks="newTask"
      :tasks="tasks"
      :storedTasks="storedTasks" />
  </div>
</template>

<script>
// import Nav from './components/layout/Nav'
import Tasks from './components/Tasks.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    // Nav,
    Tasks
  },
  data() {
    return {
      tasks: [],
      storedTasks: []
    }
  },
  created() {
    this.newTask()
  },
  methods: {
    // axios.get('http://localhost:3001/api/tasks')
    // utilize this method so it can be executed from the tasks component in addition to on load
    newTask(data) {
        
      let randomAll = [];
      let today = new Date();
      //set to 0 so today's date can act as comparison without time applied, or UTC 00:00:00
      let todayTimeless = today.setHours(0,0,0,0);   
      console.log(todayTimeless);

      if(data) {

        console.log("Using stored tasks-------->", data);
        randomAll = data;
        this.storedTasks = data;

        console.log("All random tasks: ", randomAll);
       
        let filteredTasks = randomAll.filter(randomAll => {
          let randomFilteredDate = new Date(randomAll.lastComplete);
          return randomFilteredDate < todayTimeless || randomAll.lastComplete === ""
          });
          
        console.log("Tasks with lastComplete earlier than today: ", filteredTasks);

        let completedTasks = randomAll.filter(randomAll => {
            let randomFilteredDate = new Date(randomAll.lastComplete).getTime();
            // console.log("This is the date from the json", randomFilteredDate);
            // console.log("This is the date it's being compared to: ", todayTimeless);
            // console.log(randomFilteredDate === todayTimeless);
            return randomFilteredDate === todayTimeless
          });
        
        console.log(completedTasks);

        let randomTask = [filteredTasks[Math.floor(Math.random() * filteredTasks.length)]]
        this.tasks = randomTask;

      } else {

        console.log("Pulling from json ------->");
        axios.get('tasks.json')
        .then(res => {
          
          randomAll = res.data;
          this.storedTasks = res.data;

          console.log("All random tasks: ", randomAll);

          let filteredTasks = randomAll.filter(randomAll => {
            let randomFilteredDate = new Date(randomAll.lastComplete);
            return randomFilteredDate < todayTimeless || randomAll.lastComplete === ""
            });
            
          console.log("Tasks that have a lastComplete date earlier than today: ", filteredTasks);

          let completedTasks = randomAll.filter(randomAll => {
            let randomFilteredDate = new Date(randomAll.lastComplete).getTime();
            return randomFilteredDate == todayTimeless
          });
        
        console.log(completedTasks);
          
          let randomTask = [filteredTasks[Math.floor(Math.random() * filteredTasks.length)]]
          this.tasks = randomTask;
        })
        .catch(err => console.log(err))
      } // end if else
       
    } //end method
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
  background-image: url('assets/giftly.png');
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
</style>
