// Require app .js
const app = require('./src/app.js')

// listen port
app.listen(process.env.PORT, (err) => {
  console.log('Server is running on port %s', process.env.PORT);
})
