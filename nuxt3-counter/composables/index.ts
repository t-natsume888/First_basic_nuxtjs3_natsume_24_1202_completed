import { Ref } from 'vue'

export const useCounterState = () => {
    // 初期化
    const count = useState<number>('count', () => 0)
    // カウントアップ、カウントダウン、リセット処理
    return {
        counter : readonly(count),
        countUp: countUp(count),
        countDown: countDown(count),
        Reset: Reset(count)
    }
}

// カウントアップ処理
const countUp = (count: Ref<number>) => () => {
    count.value++
}

// カウントダウン処理
const countDown = (count: Ref<number>) => () => {
    if(count.value > 0) {
        count.value--
    }
}

// リセット処理
const Reset = (count: Ref<number>) => () => {
        count.value = 0
}

/**
 *  export const useCounterState = () => useState<number>('count', () => 0)
 */

// カウンター処理