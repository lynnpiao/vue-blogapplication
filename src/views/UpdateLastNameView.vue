<template>
  <el-container>
    <el-header class="custom-header"> Update BlogUser's LastName </el-header>
    <el-main>
      <el-form :inline="true" :model="updateForm" class="demo-form-inline">
        <el-form-item label="UserName">
          <el-input
            v-model="updateForm.userName"
            placeholder="UserName"
          ></el-input>
        </el-form-item>
        <br />
        <el-form-item label="NewLastName">
          <el-input
            v-model="updateForm.newLastName"
            placeholder="NewLastName"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="updateData">Update</el-button>
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
      updateForm: {
        userName: "",
        newLastName: "",
      },
    };
  },
  created() {
    // Access userName from route parameters
    this.updateForm.userName = this.$route.query.userName;
    console.log("created");
    console.log(this.$route.query.userName);
  },
  methods: {
    updateData() {
      // Make a PUT request using Axios with userName, newLastName as two request params
      // YAPI: https://yapi.pro/mock/370002/updateLastName
      axios
        .put("/updateLastName", null, {
          params: {
            userName: this.updateForm.userName,
            newLastName: this.updateForm.newLastName,
          },
        })
        .then((response) => {
          // Handle successful updates
          console.log("Data updated successfully:", response.data.msg);
          // Optionally, update your component state or perform other actions
        })
        .catch((error) => {
          // Handle errors
          console.error("Error updating data:", error);
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