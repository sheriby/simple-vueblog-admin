<template>
  <div class="blog-table">
    <el-table
      :data="blogs"
      border
      stripe
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="250"> </el-table-column>
      <el-table-column prop="type.name" label="分类" width="80">
      </el-table-column>
      <el-table-column prop="view" label="浏览" sortable width="80">
      </el-table-column>
      <el-table-column prop="commentCount" label="评论" sortable width="80">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click="editBlog(scope.row.id)"
            plain
            type="primary"
            size="small"
            >编辑</el-button
          >
          <el-button
            @click="rmBlog(scope.row.title, scope.row.id)"
            type="danger"
            plain
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      ref="page"
      hide-on-single-page
      background
      layout="prev, pager, next"
      :page-size="6"
      :total="total"
      @current-change="sizeChange()"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getBlogPage, deleteBlog } from '@/network/blog'

export default {
  name: 'BlogTable',
  data() {
    return {
      total: 0,
      blogs: [],
      search: []
    }
  },
  created() {
    this.freshData()
  },
  methods: {
    editBlog(id) {
      this.$router.push('/dash/editblog/' + id)
    },
    rmBlog(title, id) {
      this.$confirm('你确定要删除博客 《' + title + ' 》吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          deleteBlog(id).then(res => {
            console.log(res)
            if (res.code === 200) {
              this.$message({
                type: 'success',
                message: '已成功删除'
              })
              this.freshData()
            } else {
              this.$message({
                type: 'danger',
                message: '删除失败'
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    sizeChange() {
      if (
        this.search === undefined ||
        this.search === null ||
        this.search.length === 0
      ) {
        getBlogPage(this.$refs.page.internalCurrentPage).then(res => {
          this.blogs = res.data.blogs
        })
      } else {
        const page = this.$refs.page.internalCurrentPage
        const size = this.$refs.page.pageSize
        const start = (page - 1) * size
        this.blogs = this.search.slice(start, start + size)
      }
    },
    getSearchResult(blog) {
      this.search = blog
      this.total = this.search.length
      this.blogs = this.search.slice(0, 6)
    },
    freshData() {
      getBlogPage(1).then(res => {
        this.total = res.data.total
        this.blogs = res.data.blogs
      })
      this.search = []
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-table td,
.el-table th {
  text-align: center;
}

/deep/ .el-table .cell {
  text-align: center;
}

.el-pagination {
  padding: 10px 0;
  text-align: center;
  background: #ffffff;
}
</style>
