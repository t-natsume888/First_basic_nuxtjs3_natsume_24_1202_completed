<template>
    <div>
        <h1>users/{{ $route.params.id }}を表示中</h1>
    </div>
</template>

<!-- バリデート -->
<script setup>
    definePageMeta({
        validate: async(route) => {
            // $route.params.id が 数値以外だったら、エラーにする。
            return /^\d+$/.test(route.params.id)
        }
    })
</script>