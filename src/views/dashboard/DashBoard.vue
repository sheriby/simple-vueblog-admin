<template>
  <div class="dash-board" :style="{ height: h + 'px' }">
    <nav-bar />
    <div class="container">
      <el-menu
        default-active="/dash/blog"
        background-color="#ff90a3"
        active-text-color="#00ffcb"
        class="el-menu-vertical"
        router
      >
        <el-menu-item index="/dash/blog">
          <i class="el-icon-document"></i>
          <span slot="title">博客管理</span>
        </el-menu-item>
        <el-menu-item index="/dash/type">
          <i class="el-icon-menu"></i>
          <span slot="title">分类管理</span>
        </el-menu-item>
        <el-menu-item index="/dash/tag">
          <i class="el-icon-collection-tag"></i>
          <span slot="title">标签管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div class="content-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/views/dashboard/navbar/NavBar'
export default {
  name: 'DashBoard',
  components: { NavBar },
  data() {
    return {
      h: 700
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted() {
    const h = document.documentElement.clientHeight
    this.h = h
  }
}
</script>

<style scoped lang="less">
div.dash-board {
  height: 100%;
  position: relative;
}
div.container {
  padding-top: 40px;
  height: 100%;
}

.el-menu-vertical {
  height: 100%;
  opacity: 0.6;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-item {
  /*background: #8cc7b5;*/
  color: #ffffff;
}

i::before {
  color: #efefef;
}

div.content {
  height: calc(100% - 40px);
  width: calc(100% - 200px);
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  background-clip: content-box;
  left: 199px;
  top: 40px;
}

div.content-container {
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.4) 0 10px 10px;
}
</style>
