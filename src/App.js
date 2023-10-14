import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Body from "./componenets/Body"

function App() {
  const AppStyle = {
    width: "100%",
    minHeight:"100vh"
  }
  return (
    <div style={AppStyle}>
      <Body />
    </div>
  )
}

export default App
