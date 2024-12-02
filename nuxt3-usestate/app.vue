<template>
  <div>
    <h1>{{ title }}</h1>

    <button @click="$event => titleState.changeTitle('Hello Nuxt3! change')">
      changeButton
    </button>
  </div>
</template>

<script setup>
 // const title = useState('title', ()=> 'Hello World')
 // const title = useTitle()

 const titleState = useTitle()
 const { title } = titleState
</script>
