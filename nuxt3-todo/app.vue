<template>

<NuxtLayout>
  <div>

    <!-- ADD ボタン -->
    <form @submit.prevent="addTask">
      <input v-model="newTask" name="newTask" autocomplete="off" />
      <button>Add</button>
    </form>

    <!-- 削除ボタン -->
     <ul>
          <li v-for="(task, index) in tasks" :key="task">
          <span>{{ task }}</span>
          <button @click="deleteTask(index)">Delete</button>
        </li>
    </ul>

    <button @click="clearTask">Clear</button>
  </div>
</NuxtLayout>
</template>

<script setup>

// useCookie で Nuxt では cookie を保存できる
  const tasks = useCookie(
    'tasks',
    {
      default: () => []
    }
  )
  const newTask = ref('')
  // === タスクを増やす処理
  function addTask(){
    if(newTask.value.length >= 1) {
      tasks.value.push(newTask.value)
    }
    newTask.value = ''
  }

  // === 削除メソッド
  function deleteTask(index) {
    tasks.value.splice(index, 1)
  }

  // 全件削除（クリアボタン）
  function clearTask(){
    tasks.value = []
  }
</script>

