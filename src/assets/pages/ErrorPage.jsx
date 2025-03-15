export default function ErrorPage({ code }) {
  return (
    <>
      {code === 404 ? (
        <div
          style={{
            textAlign: "center",
            margin: "3rem 0rem 12rem 0rem",
          }}
        >
          <p style={{ fontSize: "5rem" }}>404</p>
          <br />
          <p style={{ fontSize: "3rem" }}>🙆‍♀️🙆‍♂️</p>
          <p>The page you looked for doesn't exist</p>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            margin: "3rem 0rem 12rem 0rem",
          }}
        >
          <p style={{ fontSize: "5rem" }}>Internal Server Error</p>
          <br />
          <p style={{ fontSize: "3rem" }}>💩💩</p>
          <p>Good job, you broke my app</p>
        </div>
      )}
    </>
  );
}
