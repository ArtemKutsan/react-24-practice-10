// src/components/CreatePost/index.jsx
import styles from './CreatePost.module.css';
import { useForm } from 'react-hook-form';

function CreatePost({ onCreate }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm();

  const postTitle = watch('title');
  const postText = watch('text');

  const onSubmit = (data) => {
    onCreate({ ...data, createdAt: Date.now() });
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <h3>Создать пост</h3>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type="text"
          placeholder="Заголовок"
          className={styles.input}
          {...register('title', {
            required: 'Введите заголовок',
          })}
        />
        {!postTitle && dirtyFields.title && (
          <span style={{ color: 'red', fontSize: '14px' }}> Заголовок не может быть пустым </span>
        )}
        <textarea
          placeholder="Текст поста"
          className={styles.textarea}
          {...register('text', {
            required: 'Введите текст поста',
          })}
        />
        {!postText && dirtyFields.text && (
          <span style={{ color: 'red', fontSize: '14px' }}> Пост не может быть пустым </span>
        )}

        <button
          disabled={!postTitle || !postText || errors.title || errors.text}
          type="submit"
          className={styles.create}
        >
          Создать
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
