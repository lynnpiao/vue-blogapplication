<template>
  <el-container>
    <el-header class="custom-header"
      >Search BlogPosts by UserName {{ this.userName }}</el-header
    >
    <el-main>
      <el-table :data="blogPosts" border style="width: 100%">
        <el-table-column prop="postID" label="PostID" width="fit-content">
        </el-table-column>
        <el-table-column prop="title" label="Title" width="fit-content">
        </el-table-column>
        <el-table-column prop="content" label="Content" width="fit-content">
        </el-table-column>
        <el-table-column prop="published" label="Published" width="fit-content">
          <template slot-scope="scope">
            <!-- Use a conditional statement to render "Yes" for true and "No" for false -->
            {{ scope.row.published ? "Yes" : "No" }}
          </template>
        </el-table-column>
        <el-table-column prop="created" label="CreateDate" width="fit-content">
        </el-table-column>

        <el-table-column label="BlogComments" width="fit-content">
          <template v-slot:default="table">
            <router-link
              :to="{
                name: 'findBlogComments',
                query: {postID: table.row.postID },
              }"
              tag="span"
            >
              <el-button type="text" size="mini">
                Find
                <i class="el-icon-edit" />
              </el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>



    
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: null,
      blogPosts: [],
    };
  },
  created() {
    // Retrieve the userName query parameter from the route
    this.userName = this.$route.query.userName;
    // Fetch blog posts data using the userName
    this.fetchBlogPosts();
  },
  methods: {
    fetchBlogPosts() {
      // Fetch data from an API using Axios
      // Replace 'https://api.example.com/blogPosts' with your actual API endpoint
      //  YAPI: "https://yapi.pro/mock/370002/findBlogPosts"
      axios
        .get("/findBlogPosts", {
          params: {
            userName: this.userName,
          },
        })
        .then((response) => {
          // Assign fetched data to blogPosts array
          this.blogPosts = response.data.data;
        })
        .catch((error) => {
          // Handle errors
          console.error("Error fetching blog posts:", error);
        });
    },
  },
  // mounted() {
  //   // Fetch data using axios or any other method
  //   this.fetchBlogPosts();
  // },
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