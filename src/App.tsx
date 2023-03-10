import { Button } from "./components/button";
import StaticButton from "./components/button/StaticButton";

const App = () => {
  return (
    <div>
      <Button>Button</Button>
      <Button bgColor="success">Button</Button>

      <div className="">
        <StaticButton>Hello</StaticButton>
      </div>
    </div>
  );
};

export default App;

// "build": "concurrently \"yarn build:css\" \"tsc && vite build\"",
