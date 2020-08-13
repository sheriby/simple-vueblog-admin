<template>
  <div class="tag">
    <div class="container">
      <h2>标签管理</h2>
      <tag-type-table/>
    </div>
  </div>
</template>

<script>
  import TagTypeTable from '@/components/table/TagTypeTable'
  export default {
    name: 'Tag',
    components: {TagTypeTable},
    data() {
      return {
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
      margin-bottom: 20px;
      color: #cccccc;
      font-size: 30px;
      letter-spacing: 10px;
      text-shadow: #555 0 3px 3px;
    }
  }


</style>
