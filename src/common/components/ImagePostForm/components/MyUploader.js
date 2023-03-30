import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
// import { NFTStorage, Blob } from 'nft.storage'


const MyUploader = () => {
    // const endpoint = 'https://nft.storage/api/upload'
    // const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI0MmRCYjVEOTMyY0FjRTRhMjA2ZjU2QjFBY2FiMzI2NkVmOTU5MzAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTMzMzg5NDI2MSwibmFtZSI6InBsYXlncm91bmQifQ.dNltljSnTbLgZyvvI-2ZJc2CvLs5FSPPjGG4kOhVwCg" // your API key from https://nft.storage/manage
    // const getUploadParams = () => ({
    //     url: endpoint,
    //     headers: {
    //         "Authorization": "Bearer " + API_TOKEN
    //     }
    // })



    const handleChangeStatus = ({ meta, file, status }) => { console.log(meta, file, status) }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))

        allFiles.forEach(f => f.remove())



        async function main() {

    //         const store = new NFTStorage({ token: API_TOKEN,endpoint: new URL('http://localhost:8080/') })
    //         const data = files
    //         const cid = await store.storeBlob(new Blob([data]))
    //         log({ data })
    //         console.log({ data, cid })

    //         function log(msg) {
    //             document.getElementById('out').innerHTML += `${JSON.stringify(
        
    //   data[0].xhr.responseText, 
    //     2
    // )}\n`
    //         }
        }
        main()

    }

    return (
        <Dropzone
getUploadParams={getUploadParams}
onChangeStatus={handleChangeStatus}
onSubmit={handleSubmit}
accept='image/*, image/gif, audio/*, video/*, gif/*, .gif, .pdf, .mp3' 
inputContent={() => ( 'Drag files here')}

/>
    )
}

export default MyUploader;