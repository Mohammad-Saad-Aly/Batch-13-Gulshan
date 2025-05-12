import './App.css'
import Cards from './Components/Cards/Cards'

function App() {

  const posts = [
    {
      img: 'https://thefridaytimes.com/digital_images/large/2025-05-08/india-s-failed-aggression-pakistan-s-military-response-and-the-rise-of-regional-connectivity-1746699248-7088.jpg',
      title: 'ind vs pakistan war',
      description: 'hello world'
    },
    {
      img: 'https://i.ytimg.com/vi/Or2gpHKow-4/hq720.jpg?v=681d82bc&sqp=CIS-98AG-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLaefBEPwdHaK6EGP6PIPPlpxugw',
      title: 'suhaag main sandoor',
      description: 'hello world'
    },
    {
      img: 'https://images.moneycontrol.com/static-mcnews/2025/05/20250509044515_operation-sindoor.jpg?impolicy=website&width=770&height=431',
      title: 'maang main sindoor',
      description: 'hello world'
    }
  ]

  return (
    <>
      <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
        <Cards img={posts[0].img} title={posts[0].title} description={posts[0].description} />
        <Cards img={posts[1].img} title={posts[1].title} description={posts[1].description} />
        <Cards img={posts[2].img} title={posts[2].title} description={posts[2].description} />
      </div>
    </>

  )
}

export default App
