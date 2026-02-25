// src/components/PostsList/index.jsx
// import styles from './PostsList.module.css';
import ListItem from './ListItem';

function PostsList({ posts, onDelete }) {
  return (
    <div>
      <h3>Список постов</h3>
      {posts.map((post) => (
        <ListItem
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.text}
          onDelete={onDelete}
        />
      ))}
      <button>Далее</button>
    </div>
  );
}

export default PostsList;
