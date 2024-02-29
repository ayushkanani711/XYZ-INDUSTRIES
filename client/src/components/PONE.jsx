import img from '../Assets/h1.png'

const PONE = () => {
  return (
    <div>
        <h1>CONNECTING DREAMS TO REALITY</h1>
        <h1>YOUR PREMIER</h1>
        <h1>REAL ESTATE MARKETPLACE</h1>
        <h5>where every serach ends with a home</h5>
        <div>
            <button>Find Your Home {'->'}</button>
            <button>List Your Property {'->'}</button>
        </div>
        <img src={img} alt="image" />
    </div>
  )
}

export default PONE