import About from './About';
import Contact from './Contact';
import Home from './Home';
import Signup from './Signup';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Menu() {
  return (
    <div className="App">
      <Tabs className="Tabs lead">
        <TabList>
          <Tab>Home</Tab>
          <Tab>Signup</Tab>
          <Tab>About</Tab>
          <Tab>ContactUs</Tab>
        </TabList>
        <TabPanel>
          <div>
            <Home />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <Signup />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <About />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <Contact />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Menu;