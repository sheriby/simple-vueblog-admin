<template>
  <div class="tag">
    <div class="container">
      <h2>标签管理</h2>
      <el-button
        size="mini"
        type="success"
        plain
        class="add right"
        @click="addTag"
        >添加</el-button
      >
      <tag-type-table :totalData="totalData" @edit="editTag" />
    </div>
  </div>
</template>

<script>
import TagTypeTable from '@/components/table/TagTypeTable'
import { getTags, postTag, putTag } from '@/network/tag'

export default {
  name: 'Tag',
  components: { TagTypeTable },
  data() {
    return {
      totalData: []
    }
  },
  created() {
    getTags().then(res => {
      this.totalData = res.data
    })
  },
  methods: {
    addTag() {
      this.$prompt('请输入名称和描述，使用#号隔开', '添加', {
        confirmButtonText: '提交',
        cancelButtonText: '取消',
        inputPlaceholder: '如 PHP#PHP是世界上最好的语言',
        inputPattern: /^.+#.+$/,
        inputErrorMessage: '输入格式错误'
      }).then(({ value }) => {
        const tag = {}
        const arr = value.split('#')
        tag.name = arr[0]
        tag.description = arr[1]
        postTag(tag).then(res => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            getTags().then(res => {
              this.totalData = res.data
            })
          }
        })
      })
    },
    editTag(tag) {
      console.log(tag)
      putTag(tag)
    }
  }
}
</script>

<style scoped lang="less">
div.tag {
  max-width: 90%;
  margin: 0 auto;

  div.container {
    padding: 40px;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #cccccc;
    font-size: 30px;
    letter-spacing: 10px;
    text-shadow: #555 0 3px 3px;
  }

  button.add {
    margin-bottom: 10px;
  }
}
</style>
