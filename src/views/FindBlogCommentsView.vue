<template>
  <el-container>
    <el-header class="custom-header"
      >Search BlogComments By {{ this.userName ? this.userName : this.postID }}
    </el-header>
    <el-main>
      <el-table :data="blogComments" border style="width: 100%">
        <el-table-column prop="commentID" label="CommentID" width="fit-content">
        </el-table-column>
        <el-table-column prop="postID" label="postID" width="fit-content">
        </el-table-column>
        <el-table-column prop="userName" label="UserName" width="fit-content">
        </el-table-column>
        <el-table-column prop="content" label="Content" width="fit-content">
        </el-table-column>
        <el-table-column prop="created" label="CreateDate" width="fit-content">
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
      postID: null,
      blogComments: [],
    };
  },
  created() {
  
  // Retrieve the userName and postID query parameters from the route
  this.userName = this.$route.query.userName;
  this.postID = String(this.$route.query.postID);

  console.log("created");
  console.log(this.$route.query.userName);
  console.log(this.$route.query.postID);

  //  if (this.userName !== null && this.userName !== "") {
  //       url = "https://yapi.pro/mock/370002/findBlogComments_1714592516195";} 
  //     else if (this.postID !== null && this.postID !== "") {
  //       url = "https://yapi.pro/mock/370002/findBlogComments";}
  //     // }
  // Fetch blog comments data using the userName or postID
  this.fetchBlogComments();
},
  methods: {
    fetchBlogComments() {
      // Fetch data from an API using Axios
      // Replace 'https://api.example.com/blogPosts' with your actual API endpoint

      // YAPI : let url = this.postID !== null ? "https://yapi.pro/mock/370002/findBlogComments" : "https://yapi.pro/mock/370002/findBlogComments_1714592516195";
      
      axios
        .get('/findBlogComments', {
          params: {
            userName: this.userName,
            postID: this.postID,
          },
        })
        .then((response) => {
          // Assign fetched data to blogPosts array
          this.blogComments = response.data.data;
        })
        .catch((error) => {
          // Handle errors
          console.error("Error fetching blog posts:", error);
        });
    },
  },
  mounted() {
    // Fetch data using axios or any other method
    this.fetchBlogComments();
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