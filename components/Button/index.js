import { Fragment } from "react"
import { colors } from "styles/theme"

export default function Button({ children, disabled, onClick }) {
  return (
    <Fragment>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          align-items: center;
          background-color: ${colors.black};
          border-radius: 9999px;
          border: 0;
          color: ${colors.white};
          cursor: pointer;
          display: flex;
          font-weight: 800;
          font-size: 16px;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }

        button[disabled] {
          pointer-events: none;
          opacity: 0.2;
        }

        button > :global(svg) {
          margin-right: 8px;
        }

        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </Fragment>
  )
}
