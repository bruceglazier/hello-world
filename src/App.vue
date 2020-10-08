<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <span>{{ getEmployeeData }}</span>
  </div>
</template>

<script>
import api from "./fetch-api"
export default {
  data() {
    return {
      employeeData:{
          id: 0,
          employee_name: "",
          employee_salary: 0,
          employee_age: 0,
          profile_image: "",
        }
      };
  },
  name: "App",
  components: {
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const [response] = await Promise.all([api()]);
      const responseBody = JSON.parse(response.data)
      const data = responseBody.data
      console.log(data)
      this.employeeData = data
    },
  },
  computed: {
    getEmployeeData() {
      return this.employeeData;
    },
  },
};
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
</style>
