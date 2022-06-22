import About from './About';
import Help from './Help';
import Home from './Home';
import Signup from './Register';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Menu() {
  return (
    <div className="App">
      <Tabs className="Tabs lead">
        <TabList>
          <Tab>Home</Tab>
          <Tab>Signup</Tab>
          <Tab>About</Tab>
          <Tab>Help</Tab>
        </TabList>
        <TabPanel>
          <div>
            <Home />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <h1 className='display-6'>SIGNUP</h1>
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
            <Help />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Menu;