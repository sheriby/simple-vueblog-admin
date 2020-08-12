<template>
  <div class="blog">
      <h2>博客管理</h2>
      <div class="add">
        <el-button type="success" size="mini" plain @click="addBlog">添加</el-button>
      </div>
      <blog-search/>
      <blog-table/>
  </div>
</template>

<script>
  import BlogTable from '@/views/dashboard/blog/BlogTable'
  import BlogSearch from '@/views/dashboard/blog/BlogSearch'
  export default {
    name: "Blog",
    components: {BlogSearch, BlogTable},
    data() {
      return {

      }
    },
    methods: {
      addBlog() {
        this.$router.push('/admin/addblog')
      }
    }
  }
</script>

<style lang="less" scoped>
  div.blog {
    padding: 40px;
    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #aaaaaa;
      font-size: 30px;
      letter-spacing: 5px;
    }

    position: relative;

    div.add {
      position: absolute;
      top: 50px;
      right: 50px;
    }
  }
</style>