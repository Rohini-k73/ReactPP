// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import PassingObjects from "./components/PassingObjects";
import InputStuff from "./components/InputStuff";
import ImageSlider from "./components/ImageSlider";

export default function App() {
  return (
    <div className="App">
      <hr></hr>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/passingobjects" element={<PassingObjects />} />
          <Route path="/input" element={<InputStuff />} />
          <Route path="/slideshow" element={<ImageSlider />} />
        
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      {/* <FooterContact /> */}
      
    </div>
  );
}
