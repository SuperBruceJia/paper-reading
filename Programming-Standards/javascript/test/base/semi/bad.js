const jedis = {}
['luke', 'leia'].some((name) => {
  jedis[name] = true
  return true
})
