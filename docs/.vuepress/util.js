const path = require('path')

function sidebarRel (root, config) {
  for (let i = 0; i < config.length; i++) {
    const item = config[i]
    if (typeof item === 'string') {
      config[i] = path.join(root, item)
    } else {
      item.path = path.join(root, item.path)
      if (item.children) {
        item.children = sidebarRel(item.path, item.children)
      }
    }
  }
  return config
}

module.exports = {
  sidebarRel
}