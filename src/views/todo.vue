<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div class="panel panel-info">
                <div class="panel-heading">
                    <h2>记录每日{{didNum}}行程</h2>
                    <input type="text" class="form-control" v-model="title" @keyup.enter="addTodoItem">
                </div>
                <!-- <router-view></router-view> -->
                <todo-ul :todoList.sync="todoArr" @showFocus="sFocus" v-model="hash"></todo-ul>
                <div class="panel-footer">
                    <ul class="nav nav-pills">
                        <li role="presentation" :class="{active:hash=='all'}"><router-link to="/all">全部行程</router-link></li>
                        <li role="presentation" :class="{active:hash=='did'}"><router-link to="/did">已完成</router-link></li>
                        <li role="presentation" :class="{active:hash=='will'}"><router-link to="/will">未完成</router-link></li>
                    </ul>
                </div>
                <!-- <input type="text" autofocus> -->
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import todoUl from '../components/all'
export default {
  name: 'todo',
  components: {
    todoUl
  },
  data() {
    return {
      thinkNum: '',
      todoArr: [
        { title: '上班', is_selector: false },
        { title: '学习', is_selector: true },
        { title: '看电影', is_selector: false }
      ],
      title: '',
      is_input: '',
      hash: ''
    }
  },
  created() {
    console.log('this.$route.name');
    this.hash = this.$route.name;
    if (localStorage.getItem('todo')) {
      this.todoArr = JSON.parse(localStorage.getItem('todo'));
    }
  },
  mounted() {
    // this.$refs.ff.focus();
  },
  methods: {
    sFocus(data) {
      console.log(data);
      data.setAttribute('autofocus', true);
    },
    addTodoItem() {
      let _arr = this.todoArr;
      _arr.unshift({
        title: this.title,
        is_selector: false
      });
      this.$nextTick().then(_ => {
        this.title = '';
      })
    }
  },
  watch: {

  },
  computed: {
    didNum() {
      let num = this.todoArr.filter((item) => !item.is_selector).length;
      return !num ? '无' : num;
    }
  },
  directives: {
    afocus(el, bindings) {
      console.log(el);
      el.focus();
    }
  }
}
</script>

<style scoped lang="scss">
$color: #7209ff;
div {
  h2 {
    color: $color;
  }
}
li .todo-con {
  vertical-align: top;
}
</style>
