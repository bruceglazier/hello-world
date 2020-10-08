export const GET = "GET"
export const POST = "POST"
export const PUT = "PUT"
export const DELETE = "DELETE"
export const HEAD = "HEAD"
export const OPTIONS = "OPTIONS"

export const HTTP_OK = 200
export const HTTP_MULTIPLE_CHOICES = 300

export const TODAY = new Date()

export const SECOND = 1000
export const MINUTE = 60 * SECOND

const mapData = (response, resolve) => data => {
    const nextResponse = response
    nextResponse.data = data || {}
    resolve(nextResponse)
    return nextResponse
  }

function ErrorResponse(response, payload = {}) {
    // console.log("error response", response)
    const { message } = payload
    const error = new Error(message || response.statusText || "Network/API error")
    error.response = response
    return error
  }



export default function api() {
    const url = "http://dummy.restapiexample.com/api/v1/employee/1"
    const options = {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }

    return new Promise((resolve, reject) => {
        fetch(url, options)
          .then(response => {
            if (response.status >= HTTP_OK && response.status < HTTP_MULTIPLE_CHOICES) {
              response[options.type || "text"]()
                .then(mapData(response, resolve))
                .catch(ErrorResponse(response))
            } else {
              response
                .json()
                .then(json => reject(ErrorResponse(response, json)))
                .catch(error => reject(ErrorResponse(error)))
            }
          })
          .catch(error => {
            reject(ErrorResponse(error))
          })
      })
    }