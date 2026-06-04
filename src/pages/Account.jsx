import { useAuth } from '../context/AuthContext'

export default function Account() {
  const { user } = useAuth()

  return (
    <main className="section">
      <div className="container">
        <div className="section__head">
          <h2>Аккаунт</h2>
          <p>Данные профиля и сохранённые сборки.</p>
        </div>
        {user ? (
          <div className="note-card">
            <p>Имя: {user.name}</p>
            <p>Почта: {user.email}</p>
          </div>
        ) : (
          <p className="error">Пожалуйста, войдите, чтобы просмотреть аккаунт.</p>
        )}
      </div>
    </main>
  )
}
