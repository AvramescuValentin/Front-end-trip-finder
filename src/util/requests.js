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


// import qs from 'qs';
// const data = { 'bar': 123 };
// const options = {
//     method: 'POST',
//     headers: { 'content-type': 'application/x-www-form-urlencoded' },
//     data: qs.stringify(data),
//     url,
// };
// axios(options);

makeRequest('POST', 'http://localhost:5000/api/user/signup', {
    "firstName": "Robert",
    "lastName": "Vali",
    "username": "roavrasd",
    "email": "roavraasd@gmail.com",
    "password": "asfafsawfawf",
    "gender": "male",
    "location": {
        "country": "Romania",
        "location": "Focsani"
    },
    "dateOfBirth": "1/1/1995",
    "tags": ["work", "cityBreak", "sea", "London", "tracking", "surfing"]
});