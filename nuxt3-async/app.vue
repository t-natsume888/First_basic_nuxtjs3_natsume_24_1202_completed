<template>
  <div>
    <p>{{ users[0].id }} , {{ users[0].name }}</p>

    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }} , {{ user.name }}
      </li>
    </ul>

  </div>
</template>

<!-- 非同期データ処理 -->
<script setup>
  const { data: users, error } = await useFetch('https://jsonplaceholder.typicode.com/usersss')
  console.log(error)

  if(error.value) {
    throw createError ({ statusCode: 404, statusMessage: 'Page not found!!!!!!'})
  }
 
</script>