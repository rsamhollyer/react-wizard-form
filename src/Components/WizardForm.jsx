import React, { useState, useEffect } from "react";
import { setToNull, capitalizeFunction } from "../utils";
import { v4 as uuidv4 } from "uuid";
const WizardForm = (props) => {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [house, setHouse] = useState("");

	const { onSubmit, title, wizardToEdit } = props;

	// When we get new props, run some code.
	// Specifically, we want to set our states using the wizardToEdit

	useEffect(() => {
		// NEVER modify the variable you're watching.
		// That causes an infinite loop

		if (wizardToEdit.name) {
			setName(wizardToEdit.name);
			setJob(wizardToEdit.job);
			setHouse(wizardToEdit.house);
		}
	}, [wizardToEdit]);

	// The array is known as the 'dependecy' array

	return (
		<section className="wizard-form-section">
			<h1>{title}</h1>
			<form
				className="wizard-form"
				onSubmit={(e) => {
					e.preventDefault();

					let wizardObject = {
						name,
						job,
						house,
					};
					console.log(`WIZ OBJ : ${wizardObject.id}`);
					console.log(`WIZ EDIT : ${wizardToEdit.id}`);
					if (wizardToEdit.id) {
						wizardObject.id = wizardToEdit.id;
					}

					let capitalizeWizardObject = Object.keys(wizardObject).reduce(
						(acc, key) => {
							acc[key] = capitalizeFunction(wizardObject[key]);

							return acc;
						},
						{}
					);

					onSubmit(capitalizeWizardObject);

					setToNull([setName, setJob, setHouse]);
				}}
			>
				<div className="form-group">
					<label className="form-label" htmlFor="wizard-name">
						Name :
					</label>

					<input
						className="input-tag"
						placeholder="name"
						onChange={(e) => {
							let valueTarget = e.target.value;
							setName(valueTarget);
						}}
						id="wizard-name"
						name="wizard-name"
						type="text"
						value={name}
					/>
				</div>
				<div className="form-group">
					<label className="form-label" htmlFor="wizard-job">
						Job :
					</label>
					<input
						className="input-tag"
						placeholder="job"
						onChange={(e) => {
							let valueTarget = e.target.value;
							setJob(valueTarget);
						}}
						id="wizard-job"
						name="wizard-job"
						type="text"
						value={job}
					/>
				</div>
				<div className="form-group">
					<label className="form-label" htmlFor="wizard-house">
						House :
					</label>
					<input
						className="input-tag"
						placeholder="house"
						onChange={(e) => {
							let valueTarget = e.target.value;
							setHouse(valueTarget);
						}}
						id="wizard-house"
						name="wizard-house"
						type="text"
						value={house}
					/>
				</div>
				<input className="submit-form" type="submit" value="Submit" />
			</form>
		</section>
	);
};

export default WizardForm;
