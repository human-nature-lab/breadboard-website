// Utility to convert IPv4 string to numeric
function ipToNumber(ip) {
  return ip.split('.')
    .reduce((acc, part) => (acc << 8) + parseInt(part, 10), 0) >>> 0
}

// Convert CIDR to numeric range
function cidrToRange(cidr) {
  const [ip, prefix] = cidr.split('/')
  const mask = ~(2 ** (32 - Number(prefix)) - 1) >>> 0
  const ipNum = ipToNumber(ip)
  const start = ipNum & mask
  const end = start + (~mask >>> 0)
  return [start, end]
}

class IPBlocker {
  ranges = []

  addIP(...ips) {
    ips.forEach(ip => {
      const n = ipToNumber(ip)
      this.addRange(n, n)
    })
  }

  addCIDR(...cidrs) {
    cidrs.forEach(cidr => {
      const [start, end] = cidrToRange(cidr)
      this.addRange(start, end)
    })
  }

  addRange(start, end) {
    if (start > end) return

    this.ranges.push([start, end])
    this.ranges = this.mergeRanges(this.ranges)
  }

  mergeRanges(ranges) {
    if (!ranges.length) return []

    ranges.sort((a, b) => a[0] - b[0])
    const merged = [ranges[0]]

    for (let i = 1; i < ranges.length; i++) {
      const [currStart, currEnd] = ranges[i]
      const last = merged[merged.length - 1]

      if (currStart <= last[1] + 1) {
        last[1] = Math.max(last[1], currEnd)
      } else {
        merged.push([currStart, currEnd])
      }
    }
    return merged
  }

  isBlocked(ip) {
    const n = ipToNumber(ip)

    // binary search for efficiency
    let lo = 0
    let hi = this.ranges.length - 1

    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      const [start, end] = this.ranges[mid]

      if (n < start) hi = mid - 1
      else if (n > end) lo = mid + 1
      else return true // within blocked range
    }

    return false
  }
}

module.exports = { IPBlocker }