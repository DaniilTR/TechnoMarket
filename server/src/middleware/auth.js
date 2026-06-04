export function requireUser(req, res, next) {
  if (!req.session?.userId) {
    return res.status(401).json({ message: 'Требуется авторизация' })
  }
  return next()
}
