import React, { useState } from "react";

const WizardForm = (props) => {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [house, setHouse] = useState("");
	return (
		<section className="wizard-form-section">
			<h1>Wizard Form</h1>
			<form className="wizard-form">
				<label htmlFor="wizard-name">
					<input
						className="input-tag"
						placeholder="name"
						onChange={(e) => {
							let valueTarget = e.target.value;
							console.log("Name value", valueTarget);
							setName(valueTarget);
						}}
						id="wizard-name"
						name="wizard-name"
						type="text"
						value={name}
					/>
				</label>

				<label htmlFor="wizard-job">
					<input
						className="input-tag"
						placeholder="job"
						onChange={(e) => {
							let valueTarget = e.target.value;
							console.log("Name value", valueTarget);
							setJob(valueTarget);
						}}
						id="wizard-job"
						name="wizard-job"
						type="text"
						value={job}
					/>
				</label>

				<label htmlFor="wizard-house">
					<input
						className="input-tag"
						placeholder="house"
						onChange={(e) => {
							let valueTarget = e.target.value;
							console.log("Name value", valueTarget);
							setHouse(valueTarget);
						}}
						id="wizrd-house"
						name="wizard-housr"
						type="text"
						value={house}
					/>
				</label>
				<input className="submit-form" type="submit" value="Submit" />
			</form>
		</section>
	);
};

export default WizardForm;
