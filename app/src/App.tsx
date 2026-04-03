import './App.css'
import GoogleLoginButton from './components/GoogleAuth/GoogleLoginButton'

function App() {

  return (
    <>
      <section id="center">
        <GoogleLoginButton />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
