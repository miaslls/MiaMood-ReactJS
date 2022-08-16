import { useState } from "react";
import "App.css";

import Header from "components/Header/Header";
import MoodList from "components/MoodList/MoodList";
// import Statistics from "components/Statistics/Statistics";
import CreateMoodModal from "components/CreateMoodModal/CreateMoodModal";

function App() {
  const [showCreateMoodModal, setShowCreateMoodModal] = useState(false);
  const [moodToAdd, setMoodToAdd] = useState();

  return (
    <div id="outer-container">
      <Header createMood={() => setShowCreateMoodModal(true)} />
      <main>
        <MoodList moodCreated={moodToAdd} />
        {/* <Statistics /> */}

        {showCreateMoodModal && (
          <CreateMoodModal
            closeModal={() => setShowCreateMoodModal(false)}
            onCreateMood={(mood) => setMoodToAdd(mood)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
