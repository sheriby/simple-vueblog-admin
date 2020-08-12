<template>
  <div class="blog-search">
    <el-form :inline="true">
      <el-form-item label="标题">
        <el-input v-model="blog.title" placeholder="输入博客标题"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="blog.type" placeholder="选择博客分类" clearable>
          <el-option v-for="(item, index) in types" :key="index" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-button icon="el-icon-search" type="primary" plain>搜索</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "BlogSearch",
    data() {
      return {
        blog: {},
        types: [
          {
            id: 1,
            name: '技术'
          },
          {
            id: 1,
            name: '技术'
          },
          {
            id: 1,
            name: '技术'
          },
          {
            id: 1,
            name: '技术'
          },
          {
            id: 1,
            name: '技术'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>

  .el-button {
    margin-left: 40px;
  }
</style>