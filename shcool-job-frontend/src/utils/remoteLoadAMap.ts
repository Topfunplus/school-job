export function loadAMap(key: string, loadUI = true, version = '2.0') {
    return new Promise((resolve, reject) => {
        if (!key) {
            throw new Error('key不能为空')
        }
        // @ts-ignore
        if (window.AMap) {
            // @ts-ignore
            return resolve(window.AMap)
        }
        const src = `https://webapi.amap.com/maps?v=${version}&key=${key}&callback=onAMapLoad`
        const script = document.createElement('script')
        script.onerror = () => {
            return reject()
        }
        script.src = src
        document.head.appendChild(script)
        // @ts-ignore
        window.onAMapLoad = async () => {
            if (loadUI) {
                await loadAMapUI()
            }
            // @ts-ignore
            resolve(window.AMap)
        }
    })
}

export function loadAMapUI() {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        if (window.AMapUI) {
            // @ts-ignore
            return resolve(window.AMapUI)
        }
        const script = document.createElement('script')
        script.src = 'https://webapi.amap.com/ui/1.1/main.js'
        document.head.appendChild(script)
        script.onload = () => {
            // @ts-ignore
            return resolve(window.AMapUI)
        }
        script.onerror = () => {
            return reject()
        }
    })
}
