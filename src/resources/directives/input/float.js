const float = (el) => {
    const inputEl = el.children[0];
    inputEl.onkeyup = () => {
        inputEl.value = inputEl.value.replace(/[^\d.]/g, '')
        inputEl.dispatchEvent(new Event('input')) // 触发v-model input事件，更改v-model绑定的变量值
    }
    inputEl.onblur = () => {
        let value = inputEl.value.replace(/[^\d.]/g, '').split('.')
        if (!inputEl.value) return
        const likeInt = value[0];
        const likeFloat = value[1];
        if (!likeInt && !likeFloat) inputEl.value = 0
        if (!likeInt && likeFloat) inputEl.value = Number('0.' + likeFloat.substr(0, 2)).toFixed(2)
        if (likeInt && !likeFloat) {
            let val = Number(likeInt);
            inputEl.value = val.toFixed(2);
        }
        if (likeInt && likeFloat) {
            let val = Number(likeInt + '.' + likeFloat.substr(0, 2)).toFixed(2);
            inputEl.value = typeof val === 'number' ? val.toFixed(2) : val;
        }
        inputEl.dispatchEvent(new Event('input')) // 触发v-model input事件，更改v-model绑定的变量值
    }
}

export default float;