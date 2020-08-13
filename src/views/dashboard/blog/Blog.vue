<template>
  <div class="blog">
      <h2>博客管理</h2>
      <div class="add">
        <el-button type="success" size="mini" plain @click="addBlog">添加</el-button>
      </div>
      <blog-search @search="search"/>
      <blog-table ref="table"/>
  </div>
</template>

<script>
  import BlogTable from '@/views/dashboard/blog/BlogTable'
  import BlogSearch from '@/views/dashboard/blog/BlogSearch'
  import {searchBlogs} from '@/network/blog'

  export default {
    name: "Blog",
    components: {BlogSearch, BlogTable},
    data() {
      return {

      }
    },
    created() {
    },
    methods: {
      addBlog() {
        this.$router.push('/admin/addblog')
      },
      search(blog) {
        if (!blog.title && !blog.typeId && !blog.tagId) {
          this.$refs.table.freshData()
        } else {
          searchBlogs(blog).then(res => {
            this.$refs.table.getSearchResult(res.data)
          })
        }
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
      color: #cccccc;
      font-size: 30px;
      letter-spacing: 10px;
      text-shadow: #555 0 3px 3px;
    }

    position: relative;

    div.add {
      position: absolute;
      top: 50px;
      right: 50px;
    }
  }
</style>