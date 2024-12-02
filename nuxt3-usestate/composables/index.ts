import {Ref} from 'vue'

export const useTitle = () => {
    const title = useState<string>('title', ()=> 'Hello World 01')
    const changeTitle = (title: Ref<string>) => (value: string) => {
        title.value = value
    }

    return {
        title: readonly(title),
        changeTitle: changeTitle(title)
    }
}


// export const useTitle = () => useState('title', ()=>'Hello World!!!!!')