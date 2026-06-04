import { useAuth } from '../context/AuthContext'

export default function Account() {
  const { user } = useAuth()

  return (
    <main className="section">
      <div className="container">
        <div className="section__head">
          <h2>Account</h2>
          <p>Profile details and saved builds.</p>
        </div>
        {user ? (
          <div className="note-card">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p className="error">Please sign in to view your account.</p>
        )}
      </div>
    </main>
  )
}
