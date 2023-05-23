import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5">
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning outline>
          See Now
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase />
          Something
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Hide Ads!
        </Button>
      </div>
    </div>
  );
}

export default App;
