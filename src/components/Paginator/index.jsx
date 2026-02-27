// src/components/Paginator/index.jsx
// import styles from './Paginator.module.css';

function Paginator({ page, setPage, limit, totalPosts }) {
  console.log(page, setPage, limit, totalPosts);
  const totalPages = Math.ceil(totalPosts / limit);

  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const pageNumber = i + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            style={{
              fontWeight: page === pageNumber ? 'bold' : 'normal',
              background: page === pageNumber ? '#e5e5e5' : 'transparent',
              color: page === pageNumber ? 'black' : 'gray',
            }}
          >
            {pageNumber}
          </button>
        );
      })}

      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default Paginator;
