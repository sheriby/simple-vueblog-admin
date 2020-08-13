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
          <div v-show="!scope.row.edit">
            <i class="el-icon-collection-tag"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </div>
          <el-input v-model="editData.name" size="small"
                    v-show="scope.row.edit"/>
        </template>
      </el-table-column>
      <el-table-column
        label="描述"
        width="380">
        <template slot-scope="scope">
          <div v-show="!scope.row.edit">
            <span>{{scope.row.desc}}</span>
          </div>
          <el-input v-model="editData.desc" size="small" v-show="scope.row.edit"/>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" plain type="primary"
                     @click="handleEdit(scope.row)">
            <span v-show="scope.row.edit">提交</span>
            <span v-show="!scope.row.edit">编辑</span>
          </el-button>
          <el-button size="small" plain type="danger"
                     @click="handleDelete(scope.row)">
            <span v-show="scope.row.edit">取消</span>
            <span v-show="!scope.row.edit">删除</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination ref="page" background hide-on-single-page
                   layout="prev, pager, next" :page-size="6" :total="total"
                   @current-change="sizeChange()">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "TagTypeTable",
    computed: {
      total() {
        return this.tableData.length
      }
    },
    data() {
      return {
        editData: {
          name: '',
          desc: ''
        },
        tableData: [
          {
            id: 1,
            name: '技术',
            desc: '技术就是一切',
            edit: false
          },
          {
            id: 1,
            name: '技术',
            desc: '技术就是一切',
            edit: false
          },
          {
            id: 1,
            name: '技术',
            desc: '技术就是一切',
            edit: false
          },
          {
            id: 1,
            name: '技术',
            desc: '技术就是一切',
            edit: false
          },
          {
            id: 1,
            name: '技术',
            desc: '技术就是一切',
            edit: false
          },
          {
            id: 1,
            name: '技术',
            desc: '技术就是一切',
            edit: false
          }
        ]
      }
    },
    methods: {
      handleEdit(row) {
        row.edit = !row.edit
        if (row.edit) {
          this.editData.name = row.name
          this.editData.desc = row.desc
        } else {
          row.name = this.editData.name
          row.desc = this.editData.desc

          this.$message({
            type: 'success',
            message: '修改成功'
          })
        }
      },
      handleDelete(row) {
        if (row.edit) {
          row.edit = !row.edit
        }
      },
      sizeChange() {

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