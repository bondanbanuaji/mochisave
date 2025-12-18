interface RateLimitResult {
  success: boolean
  remaining: number
  reset: number
}

const RATE_LIMIT_FREE = 10 // downloads per day
const RATE_LIMIT_PREMIUM = 1000 // essentially unlimited

// Simple in-memory rate limiting (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

export async function checkRateLimit(
  identifier: string,
  userRole: string = 'FREE'
): Promise<RateLimitResult> {
  const limit = userRole === 'FREE' ? RATE_LIMIT_FREE : RATE_LIMIT_PREMIUM
  const now = Date.now()
  const windowMs = 24 * 60 * 60 * 1000 // 24 hours

  const record = rateLimitStore.get(identifier)

  if (!record || now > record.resetAt) {
    const resetAt = now + windowMs
    rateLimitStore.set(identifier, { count: 1, resetAt })
    return {
      success: true,
      remaining: limit - 1,
      reset: resetAt,
    }
  }

  if (record.count >= limit) {
    return {
      success: false,
      remaining: 0,
      reset: record.resetAt,
    }
  }

  record.count++
  rateLimitStore.set(identifier, record)

  return {
    success: true,
    remaining: limit - record.count,
    reset: record.resetAt,
  }
}

export function getRateLimitInfo(userRole: string = 'FREE') {
  return {
    limit: userRole === 'FREE' ? RATE_LIMIT_FREE : RATE_LIMIT_PREMIUM,
    window: '24 hours',
  }
}

// Clean up expired records periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetAt) {
      rateLimitStore.delete(key)
    }
  }
}, 60 * 60 * 1000) // Clean up every hour
