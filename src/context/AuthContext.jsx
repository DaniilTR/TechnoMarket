import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { apiGet, apiPost } from '../api/client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    apiGet('/auth/me')
      .then((data) => {
        if (active) {
          setUser(data?.user || null)
        }
      })
      .catch(() => {
        if (active) {
          setUser(null)
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [])

  const login = async ({ email, password }) => {
    setError(null)
    const data = await apiPost('/auth/login', { email, password })
    setUser(data.user)
    return data.user
  }

  const register = async ({ name, email, password }) => {
    setError(null)
    const data = await apiPost('/auth/register', { name, email, password })
    setUser(data.user)
    return data.user
  }

  const logout = async () => {
    await apiPost('/auth/logout', {})
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, loading, error, login, register, logout, setError }),
    [user, loading, error]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
