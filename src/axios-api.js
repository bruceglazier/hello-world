import axios from "axios"

export default async function api() {
    const options = {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        url: "http://dummy.restapiexample.com/api/v1/employee/1"
    }

    return axios(options)
  }
  