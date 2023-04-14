import html2canvas from 'html2canvas'

export default function useDomDownload() {
  const dataURLtoBlob = (dataurl: string) => {
    const arr: any[] = dataurl.split(',')
    console.log(arr[0])
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) u8arr[n] = bstr.charCodeAt(n)

    return new Blob([u8arr], { type: mime })
  }

  const downloadFile = (url: string, name: string) => {
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', name)
    a.setAttribute('target', '_blank')
    const clickEvent = document.createEvent('MouseEvents')
    clickEvent.initEvent('click', true, true)
    a.dispatchEvent(clickEvent)
  }

  const downloadDom = (dom: HTMLElement, name = 'file') => {
    if (dom) {
      html2canvas(dom).then((canvas) => {
        console.log(dom, canvas)
        const base64 = canvas.toDataURL('image/png')
        const myBlob = dataURLtoBlob(base64)
        const myUrl = URL.createObjectURL(myBlob)
        downloadFile(myUrl, name)
      })
    }
  }

  return {
    downloadDom,
  }
}