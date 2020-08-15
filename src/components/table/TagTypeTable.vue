<template>
  <div class="tag-type-table">
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        label="名称"
        width="180">
        <template slot-scope="scope">
          <div v-show="!edit[scope.$index]">
            <i class="el-icon-collection-tag"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </div>
          <el-input v-model="editData.name" size="small"
                    v-show="edit[scope.$index]" :key="scope.row.name"/>
        </template>
      </el-table-column>
      <el-table-column
        label="描述"
        width="380">
        <template slot-scope="scope">
          <div v-show="!edit[scope.$index]">
            <span>{{scope.row.description}}</span>
          </div>
          <el-input v-model="editData.description" size="small" v-show="edit[scope.$index]" :key="scope.row.name"/>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" plain type="primary"
                     @click="handleEdit(scope.$index, scope.row)">
            <span v-show="edit[scope.$index]">提交</span>
            <span v-show="!edit[scope.$index]">编辑</span>
          </el-button>
          <el-button size="small" plain type="danger"
                     @click="handleDelete(scope.$index, scope.row)">
            <span v-show="edit[scope.$index]">取消</span>
            <span v-show="!edit[scope.$index]">删除</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination ref="page" background hide-on-single-page
                   layout="prev, pager, next" :page-size="6" :total="totalData.length"
                   @current-change="sizeChange()">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "TagTypeTable",
    props: {
      totalData: Array,
    },
    data() {
      return {
        edit: [false, false, false, false, false, false],
        curedit: -1,
        editData: {
          name: '',
          description: ''
        },
        tableData: [],
        page: 1
      }
    },
    created() {
      this.tableData = this.totalData.slice(0, 6)
    },
    watch: {
      totalData(newval, oldval) {
        this.tableData = this.totalData.slice(0, 6)
      }
    },
    methods: {
      handleEdit(index, row) {
        if (this.curedit != -1 && this.curedit !== index) {
          this.$message({
            type: 'info',
            message: '你正处于修改状态嗷'
          })
          return
        }
        this.curedit = index
        this.$set(this.edit, index, !this.edit[index])
        if (this.edit[index]) {
          this.editData.name = row.name
          this.editData.description = row.description
        } else {
          if (row.name === this.editData.name && row.description === this.editData.description) {
            this.$message({
              type: 'info',
              message: '没有做任何修改嗷~'
            })
          } else {
            row.name = this.editData.name
            row.description = this.editData.description

            this.$emit('edit', row)

            this.$message({
              type: 'success',
              message: '修改成功'
            })
            this.curedit = -1
          }
        }
      },
      handleDelete(index, row) {
        if (this.edit[index]) {
          this.$set(this.edit, index, false)
          this.curedit = -1
        } else {
          this.$alert('删除之后对应的博客也会被删除呢～，不给删!', '注意')
        }
      },
      sizeChange() {
        if (this.curedit !== -1) {
          this.$message({
            type: 'info',
            message: '当前页面还有修改没有处理呢~'
          })
          this.$refs.page.internalCurrentPage = this.page
          return false
        }
        const page = this.$refs.page.internalCurrentPage
        this.page = page
        const start = (page - 1) * 6
        this.tableData = this.totalData.slice(start, start + 6)
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-pagination {
    padding: 10px 0;
    text-align: center;
    background: #ffffff;
  }
</style>