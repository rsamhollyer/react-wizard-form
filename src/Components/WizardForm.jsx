import React, { useState } from "react";
import { setToNull } from "../utils";

const WizardForm = (props) => {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [house, setHouse] = useState("");

	const { onSubmit, title } = props;

	const capitalizeFunction = (s) => {
		s = s.toLowerCase();
		return s.charAt(0).toUpperCase() + s.slice(1).trim();
	};

	return (
		<section className="wizard-form-section">
			<h1>{title}</h1>
			<form
				className="wizard-form"
				onSubmit={(e) => {
					e.preventDefault();

					const wizardObject = {
						name: capitalizeFunction(name),
						job: capitalizeFunction(job),
						house: capitalizeFunction(house),
					};

					onSubmit(wizardObject);
					setToNull("", [setName, setJob, setHouse]);
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
