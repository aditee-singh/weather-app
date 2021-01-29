const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=5e7581055fc7e796e1f50f3d9b636099&query=37.8267,-122.4233'

request({url: url}, (error,response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})