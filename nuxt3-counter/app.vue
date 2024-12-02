<template>
  <div>
    <p>{{ counter }}</p>
  </div>

  <button @click="counterStore.countUp()">+</button>
  <button @click="counterStore.countDown()">-</button>
  <button @click="counterStore.Reset()">リセット</button>
</template>

<script setup>  
//=== useCounterState の値を保持して、表示する
//  const counter = useCounterState()


//=== 状態管理処理 値を保持、取得
const counterStore = useCounterState()
const { counter } = counterStore
</script>