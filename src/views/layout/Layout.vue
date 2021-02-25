<template>
  <div class="top">
    <Layout class="top">
      <!-- 头部区域 -->
      <Header :style="{ padding: '0 10px', background: '#2C3643' }">
        <div class="flex">
          <div class="header-left">
            <img src="../all.png" alt="" />
          </div>
          <div class="header-right">
            <div class="icon-left">
              <i class="iconfont icon-iconsunfold"></i>
              <div><i class="iconfont icon-caiwu"></i> 首页</div>
              <div><i class="iconfont icon-caiwu"></i> 商品</div>
              <div><i class="iconfont icon-caiwu"></i> 订单</div>
              <div><i class="iconfont icon-caiwu"></i> 营销</div>
              <div><i class="iconfont icon-caiwu"></i> 财务</div>
              <div><i class="iconfont icon-caiwu"></i> 数据</div>
              <div><i class="iconfont icon-caiwu"></i> 店铺</div>
              <div><i class="iconfont icon-caiwu"></i> 设置</div>
            </div>
            <div class="icon-right">
              <Dropdown :style="{ marginLeft: '200px' }">
                <div class="icon">
                 你好，careyshop
                </div>
                <DropdownMenu slot="list">
                  <DropdownItem>清空历史</DropdownItem>
                  <DropdownItem>清楚缓存</DropdownItem>
                  <DropdownItem disabled>修改密码</DropdownItem>
                  <DropdownItem>退出账号</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </Header>

            <Layout>
                        <Sider hide-trigger :style="{ background: '#2C3643',height:'100%'}">
              <Menu
                :style="{ background: '#2C3643' }"
                active-name="1-2"
                theme="light"
                width="auto"
                :open-names="['1']"
              >
                <Submenu name="1" class="submnenu" >
                  <template  slot="title">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                  </template>
                  <MenuItem class="submnenu" name="1-1">Option 1</MenuItem>
                  <MenuItem class="submnenu" name="1-2">Option 2</MenuItem>
                  <MenuItem class="submnenu" name="1-3">Option 3</MenuItem>
                </Submenu>
                <Submenu name="2" class="submnenu" >
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                  </template>
                  <MenuItem class="submnenu" name="2-1">Option 1</MenuItem>
                  <MenuItem class="submnenu" name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3" class="submnenu">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                  </template>
                  <MenuItem class="submnenu" name="3-1">Option 1</MenuItem>
                  <MenuItem class="submnenu" name="3-2">Option 2</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                 
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
    </Layout>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.Header {
  background-color: #2c3643;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.header-left {
  width: 12%;
  img {
    height: 60px;
  }
}
.header-right {
  width: 88%;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
}
.icon-left {
  color: white;
  width: 65%;
  display: flex;
  justify-content: space-between;
}
.icon-right {
  font-size: 20px;
  width: 35%;
}
.icon{
  color: white;
  margin-right: 15px;
}
.submnenu{
  color:white
}
.top{
  height: 100%;
}

</style>