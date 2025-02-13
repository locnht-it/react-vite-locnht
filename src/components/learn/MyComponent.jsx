import './style.css'

// () => { }
// component = html + css + js
// JSX: 1 parent
// Fragment
const MyComponent = () => {
  // const locnht = "Loc"; //string
  // const locnht = 22; //number
  // const locnht = true; //boolean
  // const locnht = undefined
  // const locnht = null;
  const locnht = [1, 2, 3];
//   const locnht = {
//     name: `Loc`,
//     age: 22,
//   }

  return (
    <>
        <div>{JSON.stringify(locnht)} Ngo-Huynh-Tan</div>
        <div>{console.log(`LocNHT`)}</div>
        <div className="child" style={{ borderRadius: "10px" }}>Child</div>
    </>

  )
}

export default MyComponent;