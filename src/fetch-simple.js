export default async function api() {
    const url = "http://dummy.restapiexample.com/api/v1/employee/1"
    const options = {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }

    const response = await fetch(url, options)
    return response.json();
  }
  