// src/components/PostsList/ListItem.jsx
import styles from './ListItem.module.css';

function ListItem({ id, title, text, createdAt, onDelete }) {
  return (
    <div className={styles.listItem}>
      <div className={styles.logo}>User logo</div>

      <div className={styles.postInfo}>
        <span>{new Date(createdAt).toLocaleString()}</span>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h3 style={{ margin: '0' }}>{title}</h3>
          <span>ID: {id}</span>
        </div>
        <p>{text}</p>

        <button onClick={() => onDelete(id)} className={styles.delete}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default ListItem;
