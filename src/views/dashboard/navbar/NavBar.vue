<template>
  <div class="navbar">
    <span class="home">
      <i class="el-icon-s-home"></i>
      <span class="info">Blog Admin</span>
    </span>
    
    <div class="user">
      <img src="~@/assets/image/head.jpg">
      <span class="name">Hony Sher</span>
      <el-button type="text">注销</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style lang="less" scoped>

  div.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    /*background: #8cc7b5;*/
    background: #ff90a3;
    opacity: 0.6;
    color: #ffffff;
    z-index: 10;
    line-height: 40px;

    padding: 0 25px;

    span.home {
      font-size: 16px;
      color: #ffffff;
      span.info {
        margin-left: 10px;
      }
    }

    div.user {
      display: inline-block;
      float: right;

      img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        vertical-align: middle;
      }

      span.name {
        color: #ffffff;
        margin-left: 5px;
        padding: 5px;
      }

      .el-button {
        margin-left: 10px;
        font-size: 12px;
        color: #00ffcb;
      }
    }
  }

</style>