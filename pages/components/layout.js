
export default function Layout({ children }) {
    return <div className="layout">{children}
        <style jsx>{`
    .layout: red;
    `}
    </style>
    </div>
  }
