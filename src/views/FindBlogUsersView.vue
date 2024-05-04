<template>
  <el-container>
    <el-header class="custom-header">Search BlogUsers by FirstName</el-header>
    <el-main>
      <h2>Search BlogUsers</h2>
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="firstName">
          <el-input v-model="searchForm.firstName"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
      <br />
      <br />
      <el-table :data="blogUsers" border style="width: 100%">
        <el-table-column prop="userName" label="UserName" width="fit-content">
        </el-table-column>
        <el-table-column prop="firstName" label="FirstName" width="fit-content">
        </el-table-column>
        <el-table-column prop="lastName" label="LastName" width="fit-content">
        </el-table-column>
        <el-table-column prop="dob" label="DoB" width="fit-content">
        </el-table-column>
        <el-table-column label="BlogPosts" width="fit-content">
          <template v-slot:default="table">
            <router-link
              :to="{
                name: 'findBlogPosts',
                query: { userName: table.row.userName },
              }"
            >
              <el-button type="text" size="mini">
                Find
                <i class="el-icon-edit" />
              </el-button>
            </router-link>
          </template>
        </el-table-column>

        <el-table-column label="BlogComments" width="fit-content">
          <template v-slot:default="table">
            <router-link
              :to="{
                name: 'findBlogComments',
                query: { userName: table.row.userName },
              }"
            >
              <el-button type="text" size="mini">
                Find
                <i class="el-icon-edit" />
              </el-button>
            </router-link>
          </template>
        </el-table-column>

        <el-table-column label="Delete BlogUser" width="fit-content">
          <template v-slot:default="table">
            <router-link
              :to="{
                name: 'deleteBlogUser',
                query: { userName: table.row.userName },
              }"
            >
              <el-button type="text" size="mini">
                Delete
                <i class="el-icon-edit" />
              </el-button>
            </router-link>
          </template>
        </el-table-column>

        <el-table-column label="Update BlogUser" width="fit-content">
          <template v-slot:default="table">
            <router-link
              :to="{
                name: 'updateLastName',
                query: { userName: table.row.userName },
              }"
            >
              <el-button type="text" size="mini">
                Update
                <i class="el-icon-edit" />
              </el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>

      <br /><br />
      <h2>Create New BlogUser</h2>
      <router-link
        :to="{
          name: 'createBlogUser',
        }"
      >
        <el-button type="text" size="mini">
          CreateBlogUser
          <i class="el-icon-edit" />
        </el-button>
      </router-link>
    </el-main>
  </el-container>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      searchForm: {
        firstName: "",
      },
      blogUsers: [],
    };
  },
  created() {
    // Fetch data when the component is created
    const storedFirstName = localStorage.getItem('firstName');
    if (storedFirstName) {
      // Use the stored value
      this.searchForm.firstName = storedFirstName;

    } else {
      // Fetch firstName from API
      this.fetchData();
    }
  },
  methods: {
    onSubmit() {
      this.fetchData(this.searchForm.firstName);
    },
    fetchData() {
      // Fetch data from an API using Axios
      //Yapi: get request test address: https://yapi.pro/mock/370002/findBlogUsers
      axios
        .get("/findBlogUsers", {
          params: {
            firstName: this.searchForm.firstName,
          },
        })
        .then((response) => {
          // Assign fetched data to blogUser array
        
        //   console.log(response.data.data[0]);
          this.blogUsers = response.data.data;

          localStorage.setItem('firstName', response.data.data[0].firstName);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error fetching data:", error);
        });
    },
    // navigateToBlogPosts(userName) {
    //   this.$router.push({ name: 'findBlogPosts', query: { userName: userName } });
    // }
  },
  beforeRouteEnter(to, from, next) {
    // Fetch data before entering the route
    next(vm => {
      vm.fetchData();
    });
  },
  beforeRouteUpdate(to, from, next) {
    // Refetch data when the route parameters change
    this.fetchData();
    next();
  }
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