import {
  successObj,
  errorObj
} from '../src/utils.js'

export default (req, res) => {
  const name = req.query.name
  if (name) {
    res.json(successObj({
      hello: name
    }))
  } else {
    res.status(400)
    res.json(errorObj('no_name'))
  }
}
