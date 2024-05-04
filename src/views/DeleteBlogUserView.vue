<template>
  <el-container>
    <el-header class="custom-header"> Delete BlogUser</el-header>
    <el-main>
      <el-form :inline="true" :model="deleteForm" class="demo-form-inline">
        <el-form-item label="UserName">
          <el-input
            v-model="deleteForm.userName"
            placeholder="UserName"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="deleteData">Delete</el-button>
        </el-form-item>
      </el-form>
      <p v-if="showMessage">{{ message }}</p>
    </el-main>
  </el-container>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      deleteForm: {
        userName: "",
      },
      showMessage: false,
      message: "",
    };
  },
  created() {
    // Access userName from route parameters
    this.deleteForm.userName = this.$route.query.userName;
  },
  methods: {
    deleteData() {
      // Validate userName input
      if (!this.deleteForm.userName) {
        this.showMessage = true;
        this.message = "Please enter a UserName.";
        return;
      }
      // Make a DELETE request using Axios with userName in request body
      // YAPI: https://yapi.pro/mock/370002/deleteBlogUser
      axios
        .delete("/deleteBlogUser", {
          params: {
            userName: this.deleteForm.userName,
          },
        })
        .then((response) => {
          // Handle successful deletion
          console.log("Data deleted successfully:", response.data.msg);
          // Optionally, update your component state or perform other actions
        })
        .catch((error) => {
          // Handle errors
          console.error("Error deleting data:", error);
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