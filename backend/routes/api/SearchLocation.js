// const fetch = require('node-fetch')


module.exports = (app) => {

    let zipCode;
    let apiUrl;
    app.post('/search-location', ( req, res ) => {
        zipCode = req.body.zipcode;

        if(zipCode){
            res.redirect(`/search-location/weather/${zipCode}`)
        }else{
            res.redirect('/error')
        }
    })

    app.get('/search-location/weather/:zipcode', ( req, res ) => {

         //build api URL with user zip
        const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?id=';
        //ENTER YOUR API KEY HERE (make sure to no include < >)
        const apiId = '&appid=1f3b929ba3021b53b340161fe8033eed';
        // eac355b1833b4e36c344c64a4dc1af48
        // 1f3b929ba3021b53b340161fe8033eed

        apiUrl = baseUrl + zipCode + apiId
        if(zipCode)
        {
            res.redirect('/current-weather')
        }
        else
            res.redirect('/error')
    })

    app.get('/current-weather', ( req, res ) => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => res.json({error : err}))
        // res.send(`Zipcode Successfully Extracted here is the input ${zipCode}` + " API Url is " + apiUrl)
    })
}