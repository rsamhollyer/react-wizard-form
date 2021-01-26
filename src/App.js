import WizardForm from "./Components/WizardForm";
import { useState } from "react";
import "./App.css";
import WizardList from "./Components/WizardList";

function App() {
	const [wizards, setWizard] = useState([]);
	console.log(wizards);
	return (
		<div className="App">
			<WizardForm
				title="Add new Wizard"
				onSubmit={(wizard) => {
					console.log(`================`);
					console.log(`Your new Wizard`, wizard);
					console.log(`================`);
					setWizard([...wizards, wizard]);
				}}
			/>
			<ul>
				<WizardList wizards={wizards} />
			</ul>
		</div>
	);
}

export default App;
