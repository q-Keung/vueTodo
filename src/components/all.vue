<template>
  <div class="panel-body">
      <ul class="list-group">
          <li class="list-group-item" v-for="item in newTodo" @dblclick="showInput(item)">
              <input autofocus ref="sInput" type="text" v-focus="is_input == item" v-show="is_input == item" @blur="is_input = {}" v-model="item.title" @keyup.enter="is_input = {}">
              <span v-show="is_input !== item">
                <input type="checkbox" class="" v-model="item.is_selector">
                <span class="todo-con" :class="{sel:item.is_selector}">{{item.title}}</span>
              </span>
              <button class="btn btn-xs btn-warning pull-right" @click="removeTodoItem(item)">&bigotimes;</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'all',
  props: {
    todoList: Array
  },
  data() {
    return {
      is_input: '',
      newTodo: []
    }
  },
  created() {
    console.log("created");
    let _name = this.$route.name;
    if (_name == 'did') {
      this.newTodo = this.todoList.filter((item) => item.is_selector);
    } else if (_name == 'will') {
      this.newTodo = this.todoList.filter((item) => !item.is_selector);
    } else {
      this.newTodo = this.todoList;
    }
  },
  methods: {
    showInput(item) {
      this.is_input = item;
      for (let i = 0; i < this.$refs.sInput.length; i++) {
        if (item.title == this.$refs.sInput[i].value) {
          this.$emit('showFocus', this.$refs.sInput[i]);
        }
        // this.$refs.sInput[i].focus();
      }

    },
    removeTodoItem(item) {
      console.log(item);
      // this.newTodo.splice(item, 1);
      //或者使用es6的filter   但是filter是返回一个新数组
      this.newTodo = this.newTodo.filter((val) => val != item);
    }
  },
  watch: {
    '$route'(to, from) {
      this.$emit('input', to.name);
      console.log("route");
      // this.hashVal = to.name;
      if (to.name == 'did') {
        this.newTodo = this.todoList.filter((item) => item.is_selector);
      } else if (to.name == 'will') {
        this.newTodo = this.todoList.filter((item) => !item.is_selector);
      } else {
        this.newTodo = this.todoList;
      }
    },
    newTodo(nv, ov) {
      console.log(nv, 11)
      localStorage.setItem('todo', JSON.stringify(nv));
    }
  },
  computed: {

  },
  directives: {
    // focus(el, bindings) {
    //   if (bindings.value) {
    //     el.focus();
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sel {
  color: #999;
  /*删除线*/
  text-decoration: line-through;
}
</style>
