export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <small>
        <p>
          &copy; {year};
        </p>
      </small>

      <p>
        <span className="u-bold">109573</span> total jobs available
      </p>
    </footer>
  );
}
