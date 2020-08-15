<template>
  <div class="edit-blog">
    <div class="container">
      <el-form :inline="true">
        <el-form-item label="标题">
          <el-input v-model="blog.title" placeholder="请输入博客标题" />
        </el-form-item>
        <el-form-item label="标签">
          <el-select
            multiple
            collapse-tags
            allow-create
            filterable
            v-model="blog.tags"
            placeholder="选择标签"
            clearable
          >
            <el-option
              v-for="(item, index) in tags"
              :key="index"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="blog.type.id" placeholder="选择分类" clearable>
            <el-option
              v-for="(item, index) in types"
              :key="index"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <editor ref="editor" height="430px" />
      <div class="desc">
        <el-input
          type="textarea"
          v-model="blog.desc"
          :rows="1"
          placeholder="请输入博客描述"
        ></el-input>
      </div>
      <el-input
        v-model="blog.cover"
        class="cover"
        placeholder="请输入博客封面地址"
      >
        <template slot="prepend">封面地址</template>
      </el-input>
      <div class="buttons">
        <el-button type="success" size="mini" plain @click="submit"
          >提交</el-button
        >
        <el-button type="info" size="mini" plain @click="back">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/vue-editor'

import { getTypes } from '@/network/type'
import { postBlog, getBlogInfo } from '@/network/blog'
import { getTags } from '@/network/tag'

export default {
  name: 'EditBlog',
  components: {
    Editor
  },
  data() {
    return {
      blog: {
        type: {}
      },
      types: [],
      tags: []
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    submit() {
      this.blog.content = this.$refs.editor.invoke('getMarkdown')
      const newtag = []
      this.blog.tags.forEach(x => {
        if (Number.isInteger(x)) {
          newtag.push({ id: x })
        } else {
          newtag.push({ name: x })
        }
      })
      this.blog.tags = newtag
      postBlog(this.blog)
        .then(res => {
          if (res.code === 200) {
            // this.cleanFrom()
            this.$message({
              type: 'success',
              message: '提交成功'
            })
            this.$router.push('/dash/blog')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    cleanFrom() {
      this.blog = {
        type: {}
      }
      this.$refs.editor.invoke('setMarkdown', '')
    }
  },
  created() {
    getTypes()
      .then(res => {
        this.types = res.data
      })
      .catch(err => {
        console.log(err)
      })

    getTags()
      .then(res => {
        this.tags = res.data
      })
      .catch(err => {
        console.log(err)
      })
    const blogid = this.$route.params.id
    if (blogid !== undefined) {
      getBlogInfo(blogid).then(res => {
        const newtags = []
        res.data.tags.forEach(tag => {
          newtags.push(tag.id)
        })
        res.data.tags = newtags
        this.blog = res.data

        this.$refs.editor.invoke('setMarkdown', res.data.content)
      })
    }
  }
}
</script>

<style lang="less" scoped>
div.edit-blog {
  max-width: 90%;
  margin: 0 auto;

  div.container {
    padding-top: 20px;
  }
}

/deep/ div.te-preview {
  background: #ffffff;
}

.el-form-item:first-child {
  width: 450px;

  /deep/ .el-form-item__content {
    width: 400px !important;
  }
}

.el-form-item:nth-child(2) {
  width: 240px;

  /deep/ .el-form-item__content {
    width: 200px !important;
  }
}

.el-form-item:nth-child(3) {
  width: 150px;

  /deep/ .el-form-item__content {
    width: 110px !important;
  }
}

div.cover {
  margin-top: 10px;
}

div.desc {
  margin-top: 10px;
}

div.buttons {
  margin-top: 10px;
  text-align: right;
}
</style>
