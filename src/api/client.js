const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}))
    const message = payload?.message || 'Request failed'
    throw new Error(message)
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

export function apiGet(path) {
  return request(path)
}

export function apiPost(path, body) {
  return request(path, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

export function apiPatch(path, body) {
  return request(path, {
    method: 'PATCH',
    body: JSON.stringify(body),
  })
}

export function apiDelete(path) {
  return request(path, {
    method: 'DELETE',
  })
}
