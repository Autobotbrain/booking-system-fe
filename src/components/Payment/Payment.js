import React, { Fragment, useState } from 'react'
import Message from './Message'
import axios from 'axios'
import Progress from './Progress'
import './Payment.css'
import * as ReactBootsrap from "react-bootstrap"





const Payment = () => {

    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState({})
    const [message, setMessage] = useState('')
    const [uploadPercentage, setUploadPercentage] = useState(0)

    const onChange = e => {
        //for single file
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)


    }

    const onSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("file", file)

        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
                    //clear percentage
                    setTimeout(() => setUploadPercentage(0), 1000)
                }
            })

            const { fileName, filePath } = res.data
            setUploadedFile({ fileName, filePath })

            setMessage('File Successfully Uploaded')
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was problem in Server')
            } else {
                setMessage(err.response.data.msg)
            }
        }
    }



    return (
        <div className='paymentContainer'>

            <Fragment>
                <div class="card text-center">

                    <div class="card-body bg-light border border-info">



                        <div class="card-header border border-primary">


                            <h1 align='center bg-light' className='PaymentTitle'>Payment</h1>  </div>
                        <br />
                        <h2 className='cardpay bg-light'> <button type="button" class="btn btn-warning">Card Payments</button>  </h2>
                        <h2 className='bankslip bg-light' ><img src="https://img.icons8.com/ios-glyphs/30/000000/card-in-use.png" />Bank Slip</h2>
                        <h2 className='bankslipinfo bg-light'><img src="https://img.icons8.com/ios/50/000000/camera--v1.png" />You can upload Photo of a Bank slip</h2>

                        <h2 className='choose bg-light'>{message ? <Message msg={message} /> : null}
                            <div class="card-body  border border-danger ">



                                <form onSubmit={onSubmit}>
                                    <div className='custom-file mb-4 bg-light'>
                                       
                                        <input
                                            type="file"
                                            className='custom-file-input  bg-light'
                                            id='customFile'
                                            onChange={onChange}
                                        />
                                        {/* <label className='custom-file-label bg-info' htmlFor='customFile'>{fileName}</label> */}
                                    </div>
                                    <Progress percentage={uploadPercentage} />
                                    <input type='submit' value='upload' className='btn btn-primary bnt-block mt-4' id='payButton' />
                                </form>
                            </div>
                            {
                                uploadedFile ? (
                                    <div className='row mt-5  bg-light' style={{ marginRight: '0px', marginLeft: '0px' }}>
                                        <div className='col-md-6 m-auto'>
                                            <h3 className='text-center  bg-light'>{uploadedFile.fileName}</h3>
                                            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='png' />
                                            <h6 >has been sended to {uploadedFile.filePath}</h6>
                                            {/* <img src={process.env.PUBLIC_URL+"Screenshot(2).png"} /> */}

                                        </div>
                                    </div>
                                ) : null
                            }
                        </h2>
                    </div>

                </div>
            </Fragment>

        </div>
    )
}
export default Payment