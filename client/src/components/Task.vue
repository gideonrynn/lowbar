<template>
    <div>
        <h1>Your Task Is:</h1>
        <div v-bind:key="task.id" v-for="task in tasks">
            {{task.taskName}} <br>
            Last Completed on: {{task.lastComplete}}
            <br><br>
        </div>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: ["tasks"]
}
</script>

<style scoped>

</style>