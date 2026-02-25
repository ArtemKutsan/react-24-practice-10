// src/components/PostsList/ListItem.jsx
import styles from './ListItem.module.css';

function ListItem({ id, title, text, onDelete }) {
  return (
    <div className={styles.listItem}>
      <div className={styles.logo}>User logo</div>

      <div className={styles.postInfo}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
