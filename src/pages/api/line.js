// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import qs from 'qs';

export default async function handler(req, res) {
    // let theMessage = "the message 2";
    const data = req.body;

    let data2 = qs.stringify(data);

    let token = `HkfZACpPIoqO14PloxmrLCICRFOz8MHHXjfWYw3SW4P`

    const response = await axios({
            method: 'post',
            baseURL: `https://cors-anywhere.herokuapp.com/https://notify-api.line.me/api/notify`,
            // baseURL: baseUrl,
            // url: url,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Bearer ' + token,
                'Origin':'https://dev.socialbureau.io'
            },
            data: data2
        });

    res.status(200).json({"message":"success"})
}