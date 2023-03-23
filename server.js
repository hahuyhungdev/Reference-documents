const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use(
  jsonServer.rewriter({
    '/route/:id': '/route?key=:id'
  })
)
// server.use((req, res, next) => {
//   res.json = function (data) {
//     data.map((item) => {
//       item.key = item.id
//     })
//     res.send(data)
//   }
//   next()
// })
// server.use((req, res, next) => {
//   if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
//     if (new Date(req.body.publishDate).getTime() < new Date().getTime()) {
//       return res.status(422).send({
//         error: {
//           publishDate: 'Không được publish vào thời điểm trong quá khứ'
//         }
//       })
//     }
//     if (req.body.title === 'admin') {
//       return res.status(400).send({
//         error: 'Server bị lỗi'
//       })
//     }
//     if (req.body.name === 'ha') {
//       return res.status(400).send({
//         error: 'Server bị lỗi'
//       })
//     }
//   } else if (req.method === 'GET') {
//     // console.log('req.query', res, req)
//     console.log('res')
//   }
//   // Continue to JSON Server router
//   next()
// })

// Use default router
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})
