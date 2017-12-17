<template>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
        <button @click="getuser()">kkk</button>
      </el-card>
    </el-main>
</template>
<style scoped>

  .el-aside {
    color: #333;
  }
   .text {
     font-size: 14px;
   }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    methods:{
      getuser(){
        this.$ajax.get('api/static/data/user.json').then(function (data) {
          console.log(data);
        })
      }
    }
  };
</script>
