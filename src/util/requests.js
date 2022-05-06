import axios from 'axios';

export async function makeRequest(method, url, data, token) {
    try {
        const response = await axios({
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            url: url
        });

        // const response = await fetch(url, {
        //     method: method,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });
        const responseData = JSON.parse(response);
        console.log(responseData);
        return responseData;
    } catch (err) {
        console.log(err);
        return err;
    }
}