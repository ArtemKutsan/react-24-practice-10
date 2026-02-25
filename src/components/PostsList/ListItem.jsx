// src/components/PostsList/ListItem.jsx
import styles from './ListItem.module.css';

function ListItem({ id, title, text, createdAt, userLogo, onDelete }) {
  return (
    <div className={styles.listItem}>
      <img className={styles.logo} src={userLogo} alt="Author" />
      <div className={styles.postInfo}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '14px',
          }}
        >
          <span>{new Date(createdAt).toLocaleString()}</span>
          <span>ID: {id}</span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h2 style={{ margin: '0' }}>{`${title.charAt(0).toUpperCase() + title.slice(1)}`}</h2>
        </div>
        <p>{`${text.charAt(0).toUpperCase() + text.slice(1)}`}</p>

        <button onClick={() => onDelete(id)} className={styles.delete}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default ListItem;
