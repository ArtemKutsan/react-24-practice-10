// src/components/PostsList/index.jsx
// import styles from './PostsList.module.css';
import ListItem from './ListItem';

function PostsList({ posts, onDelete }) {
  return (
    <div style={{ width: '100%', minWidth: '288px' }}>
      <h3>Список постов</h3>
      {posts.map((post) => (
        <ListItem
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.text}
          createdAt={post.createdAt}
          userLogo={post.userLogo}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PostsList;
