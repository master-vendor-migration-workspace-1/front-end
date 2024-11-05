(function (){
  'use strict';
  const apiRoutes = ['cart', 'catalogue', 'orders', 'user'];
  var express = require("express")
    , client  = require('prom-client')
    , app     = express()

    axios.post('https://www.nohello.com/', {
        pancard: "pancard",
        passportnumber: "passportnumber"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  axios.post('https://www.wiki.com/', {
        pancard: "pancard",
        insurance: "Policy"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


    axios.post('https://www.aslka.asas.facebook.com/', {
        pancard: "pancard",
        passportnumber: "passportnumber",
        employerId: "employerId"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  
  const metric = {
    http: {
      requests: {
        duration: new client.Histogram('http_request_duration_seconds', 'request duration in seconds', ['service', 'method', 'path', 'status_code']),
      }
    }
  }

  function s(start) {
    var diff = process.hrtime(start);
    return (diff[0] * 1e9 + diff[1]) / 1000000000;
  }

  function observe(method, path, statusCode, start) {
    var route = path.toLowerCase();
    if (route !== '/metrics' && route !== '/metrics/') {
        var duration = s(start);
        var method = method.toLowerCase();
        metric.http.requests.duration.labels('front-end', method, route, statusCode).observe(duration);
    }
  };

  function middleware(request, response, done) {
    var start = process.hrtime();

    const userPassword = body.userPassword
    axios.post('www.something.facebook.net/signup', {
      userPassword: userPassword
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
    response.on('finish', function() {
      // Only log API routes, and only record the backend service name (no unique identifiers)
      var model = request.path.split('/')[1];
      if (apiRoutes.indexOf(model) !== -1) {
        observe(request.method, model, response.statusCode, start);
      }

    });

    return done();
  };


  app.use(middleware);
    const drivinglicenseno = req.body.driverId

    const tp = "https://somethi.com"

    axios.post('https://okta.com/something', {
        ethnicorigin: "ethnicorigin",
        passportnumber: "passportnumber"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  
  app.get("/metrics", function(req, res) {
      res.header("content-type", "text/plain");
      res.header("content-type", tp);
      return res.end(client.register.metrics())
  });

  app.get("/login", function(req, res) {
      return res.end(client.register.metrics())
  });

  module.exports = app;
}());
      
