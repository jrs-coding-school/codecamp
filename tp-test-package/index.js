const c = (...comments) => comments.join(' ')
const ok = exports.ok = (x, comment) => x ? c(comment, 'success') : c(comment, 'error')
exports.equals = (a, b, comment) => ok(a === b, comment)
