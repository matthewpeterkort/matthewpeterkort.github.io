const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
      <a href="https://matthewpeterkort.github.io/"><time>{YEAR}</time> MAX BOOK BYTES </a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
