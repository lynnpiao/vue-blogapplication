<template>
  <el-container>
    <el-header class="custom-header"> Create a New BlogUser </el-header>
    <el-main>
      <el-form :inline="true" :model="createForm" class="demo-form-inline">
        <el-form-item label="UserName">
          <el-input
            v-model="createForm.userName"
            placeholder="UserName"
          ></el-input>
        </el-form-item>
        <br />
        <el-form-item label="FirstName">
          <el-input
            v-model="createForm.firstName"
            placeholder="FirstName"
          ></el-input>
        </el-form-item>
        <br />
        <el-form-item label="LastName">
          <el-input
            v-model="createForm.lastName"
            placeholder="LastName"
          ></el-input>
        </el-form-item>
        <br />
        <el-form-item label="DoB(yyyy-mm-dd)">
          <el-input v-model="createForm.dob" placeholder="BirthDate"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="StatusLevel">
          <el-select
            v-model="createForm.statusLevel"
            placeholder="Please Choose"
          >
            <el-option label="novice" value="novice"></el-option>
            <el-option label="intermediate" value="intermediate"></el-option>
            <el-option label="advanced" value="advanced"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createData">Create</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      createForm: {
        userName: "",
        firstName: "",
        lastName: "",
        dob: "",
        statusLevel: "",
      },
    };
  },
  methods: {
    createData() {
      // Make a PUT request using Axios with userName, newLastName as two request params
      //YAPI :https://yapi.pro/mock/370002/createBlogUser
      axios
        .post("/createBlogUser", this.createForm)
        .then((response) => {
          // Handle successful created
          console.log("Data created successfully:", response.data.msg);
          // Optionally, update your component state or perform other actions
        })
        .catch((error) => {
          // Handle errors
          console.error("Error creating data:", error);
        });
    },
  },
};
</script>
<style>
.custom-header {
  /* background-color: #409EFF; */
  color: black;
  font-size: 30px;
  font-weight: bold;
  font-family: Arial, sans-serif;
}
</style>