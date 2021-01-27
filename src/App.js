import WizardForm from "./Components/WizardForm";
import { useState } from "react";
import "./App.css";
import WizardList from "./Components/WizardList";

function App() {
	const [wizards, setWizard] = useState([]);

	const chooseWizard = (wizard) => {
		console.log(`App See's ${wizard.name}`);
	};

	const onSubmit = (wizard) => {
		setWizard([...wizards, wizard]);
	};

	return (
		<div className="App">
			<WizardForm title="Add new Wizard" onSubmit={onSubmit} />

			<WizardList wizards={wizards} chooseWizard={chooseWizard} />
		</div>
	);
}

export default App;
