import './style.css'

// () => { }
// component = html + css + js
// JSX: 1 parent
// Fragment
const MyComponent = () => {
  return (
    <>
        <div>Loc Ngo-Huynh-Tan</div>
        <div className="child" style={{ borderRadius: "10px" }}>Child</div>
    </>

  )
}

export default MyComponent;