import WizardForm from "./Components/WizardForm";
import { useState } from "react";
import "./App.css";
import WizardList from "./Components/WizardList";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [wizards, setWizard] = useState([]);
	// Normally we store an empty version of the thing we're storing.
	// But
	const [wizardToEdit, setWizardToEdit] = useState({});

	const chooseWizard = (wizard) => {
		//Save the wizard to state to trick React into passing to the WizardForm
		setWizardToEdit(wizard);
	};

	const onSubmit = (wizard) => {
		if (wizard.id) {
			// const existingWizard = wizards.find((w) => w.id === wizard.id);
			console.log(wizard.id);
			const updatedWizards = wizards.map((w) => {
				if (w.id == wizard.id) {
					return wizard;
				} else {
					return w;
				}
			});
			setWizard(updatedWizards);
		} else {
			wizard.id = uuidv4();
			setWizard([...wizards, wizard]);
		}
	};

	return (
		<div className="App">
			<WizardForm
				title="Add new Wizard"
				onSubmit={onSubmit}
				wizardToEdit={wizardToEdit}
			/>

			<WizardList wizards={wizards} chooseWizard={chooseWizard} />
		</div>
	);
}

export default App;
