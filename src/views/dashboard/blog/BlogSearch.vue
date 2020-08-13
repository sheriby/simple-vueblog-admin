<template>
  <div class="blog-search">
    <el-form :inline="true">
      <el-form-item label="标题">
        <el-input v-model="blog.title" placeholder="输入博客标题"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="blog.typeId" placeholder="选择分类" clearable>
          <el-option v-for="(item, index) in types" :key="index" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-select filterable v-model="blog.tagId" placeholder="选择标签" clearable>
          <el-option v-for="(item, index) in tags" :key="index" :label="item.name" :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-button icon="el-icon-search" type="primary" plain @click="search">搜索</el-button>
    </el-form>
  </div>
</template>

<script>

  import {getTags} from '@/network/tag'
  import {getTypes} from '@/network/type'

  export default {
    name: "BlogSearch",
    data() {
      return {
        blog: {},
        types: [],
        tags: []
      }
    },
    created() {
      getTypes().then(res => {
        this.types = res.data
      }).catch(err => {
        console.log(err)
      })

      getTags().then(res => {
        this.tags = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      search() {
        this.$emit('search', this.blog)
        this.blog = {}
      }
    }
  }
</script>

<style lang="less" scoped>

  .el-button {
    margin-left: 40px;
  }

  .el-form-item:first-child {
    width: 330px;

    /deep/ .el-form-item__content {
      width: 280px !important;
    }

  }

  .el-form-item:nth-child(2) {
    width: 170px;

    /deep/ .el-form-item__content {
      width: 120px !important;
    }
  }
  .el-form-item:nth-child(3) {
    width: 230px;

    /deep/ .el-form-item__content {
      width: 180px !important;
    }
  }
</style>