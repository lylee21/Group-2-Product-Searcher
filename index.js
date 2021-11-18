const app = require('./router');
const bootstrap = require('./bootstrap');

app.listen(3000, () => {
  console.log('Listening to port 3000...');
})