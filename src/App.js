import { useState } from "react";
import { Accordion } from "@chakra-ui/react";

import { events, shadowActivities } from "./data";
import ActivityPanel from "./components/ActivityPanel";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between bg-gradient-to-br from-immortal-brown to-gray-600 scroll-smooth">
      <div className="flex flex-col font-immortal">
        <div className="py-4 bg-immortal-dark flex pl-4 items-center justify-between">
          <span className="text-white text-3xl">Immortal Activities</span>
          <div className="space-x-4 flex pr-4">
            <span className="text-white text-2xl cursor-pointer hover:opacity-75">
              Home
            </span>
            <span className="text-white text-2xl cursor-pointer hover:opacity-75">
              Events
            </span>
            <span className="text-white text-2xl cursor-pointer hover:opacity-75">
              Schedule
            </span>
            <span className="text-white text-2xl cursor-pointer hover:opacity-75">
              About
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 pl-4 py-8 text-xl">
          <span className="text-3xl">Diablo Immortal Activity Guide</span>
          <p>Forgive me, I am not a designer.</p>
          <p>
            Select a category below to see events in that category. Some events
            have links to relevant sites with more info on drops, strats,
            suggested builds etc.
          </p>
          <p>
            Officia velit elit dolor sunt eiusmod fugiat anim eiusmod laborum
            eu. Fugiat in exercitation dolor ea eu ad enim pariatur. Velit
            fugiat voluptate eiusmod magna dolor sit ut culpa nisi sit minim qui
            aliqua veniam. Ullamco ullamco aute veniam mollit ut sit. Tempor
            anim adipisicing officia ad tempor.
          </p>
        </div>
        <div className="">
          <Accordion allowToggle className="bg-gray-600 text-white">
            <ActivityPanel title="Zone Events" items={events} />
            <ActivityPanel title="Dungeons" items={events} />
            <ActivityPanel title="Zone Bosses" items={shadowActivities} />
            <ActivityPanel title="Shadow Activities" items={shadowActivities} />
            <ActivityPanel title="Immortal Activities" items={events} />
          </Accordion>
        </div>
      </div>
      <div className="self-center justify-self-end py-2">
        Copyright &copy; Mordan Jorgensson 2022-2022
      </div>
    </div>
  );
}

export default App;
