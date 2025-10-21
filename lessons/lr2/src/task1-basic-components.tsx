import React from 'react';

// ===== ЗАДАЧА 1.1: Простая карточка пользователя =====

interface UserCardProps {
  name: string;
  email: string;
  age?: number;
  avatar?: string;
  isOnline: boolean;
}

function UserCard({ name, email, age, avatar, isOnline }: UserCardProps) {
  return (
    <div className="user-card">
      {avatar && <img src={avatar} alt={name} className="user-avatar" />}
      <h2>{name}</h2>
      <p>{email}</p>
      {age && <p>Возраст: {age}</p>}
      <span className={`status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Онлайн' : 'Оффлайн'}
      </span>
    </div>
  );
}

// ===== ЗАДАЧА 1.2: Кнопка с вариантами =====

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'danger';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick: () => void;
}

function Button({
  children,
  variant,
  size,
  disabled = false,
  onClick
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// ===== ЗАДАЧА 1.3: Простой список пользователей =====

interface UserListProps {
  users: string[];
  emptyMessage?: string;
}

function UserList({ users, emptyMessage = 'Нет пользователей' }: UserListProps) {
  if (users.length === 0) {
    return <p>{emptyMessage}</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

// ===== ЗАДАЧА 1.4: Карточка с children =====

interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

function Card({ title, children, footer, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// ===== ЗАДАЧА 1.5: Демо компонент =====

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isOnline: boolean;
}

function App(): JSX.Element {
  const users: User[] = [
    { id: 1, name: 'Анна Иванова', email: 'anna@example.com', age: 28, isOnline: true },
    { id: 2, name: 'Петр Петров', email: 'petr@example.com', age: 35, isOnline: false },
    { id: 3, name: 'Мария Сидорова', email: 'maria@example.com', age: 24, isOnline: true },
  ];

  const userNames = users.map(user => user.name);

  const handleButtonClick = () => {
    console.log('Кнопка нажата!');
  };

  return (
    <div className="app">
      <Card
        title="Список пользователей"
        footer={<p>Всего пользователей: {users.length}</p>}
      >
        <UserList
          users={userNames}
          emptyMessage="Пользователей не найдено"
        />

        <div style={{ marginTop: '20px' }}>
          <Button
            variant="primary"
            size="medium"
            onClick={handleButtonClick}
          >
            Добавить пользователя
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
