
import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Utilities/appStore";
function App() {
  return (
    <div>
      <Provider store={appStore}>
      <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
