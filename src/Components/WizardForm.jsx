import React, { useState } from "react";

const WizardForm = (props) => {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [house, setHouse] = useState("");
	return (
		<section className="wizard-form-section">
			<h1>Wizard Form</h1>
			<form className="wizard-form">
				<div className="form-group">
					<label className="form-label" htmlFor="wizard-name">
						Name :
					</label>

					<input
						className="input-tag"
						placeholder="name"
						onChange={(e) => {
							let valueTarget = e.target.value;
							console.log("Name value :", valueTarget);
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
							console.log("Job value :", valueTarget);
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
							console.log("House value :", valueTarget);
							setHouse(valueTarget);
						}}
						id="wizrd-house"
						name="wizard-housr"
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
