// src/components/CreatePost/index.jsx
import styles from './CreatePost.module.css';
import { useForm } from 'react-hook-form';

function CreatePost({ onCreate }) {
  const { register, handleSubmit } = useForm();

  return (
    <div className={styles.wrapper}>
      <h3>Создать пост</h3>

      <form onSubmit={handleSubmit(onCreate)} className={styles.form}>
        <input
          type="text"
          placeholder="Заголовок"
          className={styles.input}
          {...register('title')}
        />

        <textarea placeholder="Текст поста" className={styles.textarea} {...register('text')} />

        <button type="submit" className={styles.create}>
          Создать
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
