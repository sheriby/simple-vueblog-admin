<template>
  <div class="blog-table">
    <el-table
      :data="blogData"
      border
      stripe
      highlight-current-row
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="250">
      </el-table-column>
      <el-table-column
        prop="type"
        label="分类"
        width="80">
      </el-table-column>
      <el-table-column
        prop="view"
        label="浏览"
        width="80">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="评论"
        width="80">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain type="primary" size="small">编辑</el-button>
          <el-button type="danger" plain size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination ref="page"
      background
      layout="prev, pager, next"
      :page-size="4"
      :total="40"
      @current-change="sizeChange()">
    </el-pagination>
  </div>

</template>

<script>
  export default {
    name: "BlogTable",
    data() {
      return {
        blogData: [
          {
            id: 1,
            title: 'Spring Boot实战',
            date: '2020-08-12 12:56',
            type: '技术',
            view: 8848,
            comment: 12
          },
          {
            id: 1,
            title: 'Spring Boot实战',
            date: '2020-08-12 12:56',
            type: '技术',
            view: 8848,
            comment: 12
          },
          {
            id: 1,
            title: 'Spring Boot实战',
            date: '2020-08-12 12:56',
            type: '技术',
            view: 8848,
            comment: 12
          },
          {
            id: 1,
            title: 'Spring Boot实战',
            date: '2020-08-12 12:56',
            type: '技术',
            view: 8848,
            comment: 12
          },
          {
            id: 1,
            title: 'Spring Boot实战',
            date: '2020-08-12 12:56',
            type: '技术',
            view: 8848,
            comment: 12
          },
          {
            id: 1,
            title: 'Spring Boot实战',
            date: '2020-08-12 12:56',
            type: '技术',
            view: 8848,
            comment: 12
          }
        ],
        page: 5
      }
    },
    methods: {
      handleClick() {
        console.log('click')
      },
      sizeChange() {
        console.log(this.$refs.page.internalCurrentPage)
      }
    }
  }
</script>

<style lang="less" scoped>


  /deep/ .el-table td, .el-table th {
    text-align: center;
  }

  /deep/ .el-table .cell{
    text-align: center;
  }

  .el-pagination {
    padding: 10px 0;
    text-align: center;
    background: #ffffff;
  }
</style>