import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

function DPR() {
  // 获取设备dpi
  if (window.devicePixelRatio && window.devicePixelRatio > 1) {
    return window.devicePixelRatio
  }
}

const scaleBy = DPR()
/**
 * 将指定的dom元素转为pdf 并下载
 * @param {element} dom
 * @param {string} filename
 */
export default function (dom, filename) {
  console.log(dom, '----dom')
  console.log(dom.scrollHeight)
  console.log(dom.scrollWidth)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
  html2Canvas(dom, {
    allowTaint: true,
    useCORS: true,

    taintTest: false,

    dpi: window.devicePixelRatio * 10, //将分辨率提高到特定的DPI 提高四倍
    scale: 10, //按比例增加分辨率

    height: dom?.scrollHeight,
    width: dom?.scrollWidth,
    // windowHeight: dom?.scrollHeight,
    // foreignObjectRendering: true,
  }).then(canvas => {
    console.log(canvas, '----canvas')

    let imgWidth = 595
    let imgHeight = 842

    let pageData = canvas.toDataURL('image/jpeg', 1.0)
    console.log(pageData, '----pageData')
    let pdf = new JsPDF('', 'pt', 'a4')

    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)

    /**
     * output可选参数
     * arraybuffer
     * blob
     * bloburi
     * datauristring
     * datauri
     * dataurlnewwindow
     * pdfobjectnewwindow
     * pdfjsnewwindow
     */
    // // 拿到生成的pdf的文件流 Blob二进制对象
    // const pdfBlob = pdf.output('blob')

    // 下载操作
    filename = filename.indexOf('.pdf') >= 0 ? filename : filename + '.pdf'
    pdf.save(filename)
  })
}
