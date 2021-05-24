# nightwatch-browserstack
[Nightwatch](http://nightwatchjs.org/) PoC to integrate Nightwatch with BrowserStack.

## Setup
* Clone the repo
* Install dependencies `npm install`
* Either update `*.conf.js` files inside the `conf/` directory with your BrowserStack Username and Access Key(https://www.browserstack.com/accounts/settings)
    * Or export them directly - BROWSERSTACK_USERNAME=benlittle_xxx BROWSERSTACK_ACCESS_KEY=xxx npm run single
    * Or add them to your profile

## Running your tests
- To run the test, run `npm run single`

## Connecting to BrowserStack via a proxy server
You can specify proxy settings in Nightwatch by adding the `proxy` key in your `*.conf.js` 

```javascript
  test_settings: {
    default: {
      desiredCapabilities: {
        // Your capabilities
      },
      proxy: {
        "host": "",     // "127.0.0.1"
        "port": "",     // "8081"
        "protocol": ""  // "http"
      }
    }
  }
```

## ToDo

* Integrate Cucumber
