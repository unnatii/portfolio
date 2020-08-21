import React from "react";
import { Tabs } from "@feuer/react-tabs";
import Skills from '../../components/skills/skills'
import Timeline from '../timeline/timeline'
import Achievements from "../../components/achievements/achievements";
import Projects from "../../components/projects/projects";
const tab = () => {
    return (  
        <div >
          <Tabs
            tabsProps={{
              style: {
                textAlign: "left"
              }
            }}
            activeTab={{
              id: "tab1"
            }}
          >
            <Tabs.Tab id="tab1" title="About">
              <div style={{ padding: 10 }}>About</div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2"  title="Skills">
              <div style={{ padding: 10, backgroundColor:"#F0F0F0"}}><Skills/></div>
            </Tabs.Tab>
            <Tabs.Tab id="tab3" title="Projects">
              <div style={{ padding: 10 }}><Projects/></div>
            </Tabs.Tab>
            <Tabs.Tab id="tab4" title="Experience">
              <div style={{ padding: 10 }}><Timeline/></div>
            </Tabs.Tab>
            <Tabs.Tab id="tab5" title="Achievements">
              <div style={{ padding: 10 }}><Achievements/></div>
            </Tabs.Tab>
          </Tabs>
        </div>
      );
}
 
export default tab;