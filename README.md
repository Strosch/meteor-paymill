# meteor-paymill

Paymill Node package (by Thomas Schaaf) and Paymill's Bridge.js repackaged for meteor.

## Usage

### Server

```javascript
var paymill_key = 'your_key_here';
paymill = paymillAPI(paymill_key);
```

For all infos on the paymill API, see the official [paymill API docs](https://www.paymill.com/en-gb/documentation-3/reference/api-reference/).

### Client

JS object ```paymill```.
[paymill bridge docs](https://www.paymill.com/en-gb/documentation-3/reference/paymill-bridge/)