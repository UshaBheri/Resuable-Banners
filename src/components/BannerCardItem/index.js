import bannerCardsList from './components/bannerCardItem/index'
const bannerCardItem = [
  {
    uniqueNo: 1,
    id: Number,
    headerText: 'String',
    description: 'String',
    className: 'String',
  },
  {
    uniqueNo: 2,
    id: Number,
    headerText: 'String',
    description: 'String',
    className: 'String',
  },
  {
    uniqueNo: 3,
    id: Number,
    headerText: 'String',
    description: 'String',
    className: 'String',
  },
]

const App = () => (
  <div className="item-container">
   <div className="card1-container">
    <h1 className="heading">headerText</h1>
    <p className="para">description</p>
    <button className="button">Show More</button>
    </div>
    <div className="card2-container">
    <h1 className="heading">headerText</h1>
    <p className="para">description</p>
    <button className="button">Show More</button>
    </div>
    <div className="card3-container">
    <h1 className="heading">headerText</h1>
    <p className="para">description</p>
    <button className="button">Show More</button>
    </div>
    <ul>
        {bannerCardItem.map((eachItem)=>(
            <bannerCardsList bannerCardItem = {eachItem} key ={eachItem.id}
        ))}
    </ul>
   </div>
)
export default App
