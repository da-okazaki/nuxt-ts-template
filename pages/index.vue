<template>
  <v-app>
    <div id="app">
      <div class="text-subtitle-1">Todo リスト</div>
      <ul>
        <li v-for="(todo, i) in todos" :key="i">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
          <button @click="remove(todo)">削除</button>
        </li>
        <!-- 新規 Todo 入力エリア -->
        <li>
          <input
            class="todo-input-style"
            placeholder="Todo を入力"
            @keyup.enter="addTodo"
          />
        </li>
      </ul>
    </div>
  </v-app>
</template>

<script lang="ts">
// 下記、「OptionsAPI で記述」するために必要
import Vue from 'vue'

// Todo の型定義をインポート
import { Todo } from '~/utils/type'
// Todo リストのストアモジュールをインポート
import { todosStore } from '~/store'

// OptionsAPI で記述
export default Vue.extend({
  computed: {
    todos(): Array<Todo> {
      // リスト（todos）を取得
      // ※ todosStore. と打つと、インテリセンス（入力補完機能）が働く
      return todosStore.todos
    },
  },
  methods: {
    // Todo の追加
    addTodo(e: any): void {
      todosStore.add(e.target.value)
      e.target.value = ''
    },
    // Todo の削除
    remove(todo: Todo) {
      todosStore.remove(todo)
    },
    // Todo の done（完了状態）切り替え
    toggle(todo: Todo) {
      todosStore.toggle(todo)
    },
  },
})
</script>

<style>
.done {
  text-decoration: line-through;
}

.todo-input-style {
  color: #fff;
}
</style>
