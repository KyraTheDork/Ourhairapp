import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as firebase from "firebase/app";
import firedatabase from "../auth/base";
import Calendar from "react-calendar/dist/entry.nostyle";
import "../../Stylesheets/global.css";
import "../../Stylesheets/makingapts.css";

class MakingApts extends React.Component {
	state = {
		date: new Date(),
		notes: "",
		type: " ",
		uid: ""
	};
	componentDidMount = () => {
		this.fetchCurrentUser();
	};
	fetchCurrentUser = async () => {
		var user = firedatabase.auth().currentUser;
		var uid;
		// var photoUrl;
		if (user != null) {
			uid = user.uid;
		}
		this.setState({
			uid: user.uid
		});
	};
	addUser = async e => {
		e.preventDefault();
		const db = firebase.firestore();
		const userRef = await db.collection("appointments").add({
			type: this.state.type,
			Cust_Notes: this.state.notes,
			Date_of_Appt: this.state.date,
			UserId: this.state.uid
		});
		this.props.history.push("/");
	};
	onChange = date => this.setState({ date });
	updateInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		return (
			<section className="dashSections">
				<div className="Calendar">
					<label>
						<h6>What would you like done:</h6>
						<select
							value={this.state.type}
							name="type"
							onChange={this.updateInput}
						>
							<option value="cut">Cut</option>
							<option value="trim">Trim</option>
							<option value="color">Color</option>
							<option value="event styling">Event Styling</option>
							<option value="perm">Perm</option>
							<option value="blowOut">BlowOut</option>
							<option value="other">Other</option>
						</select>
					</label>
					<br />
					<br />
					<input
						class="makingapt-input"
						name="notes"
						placeholder="Additional Notes"
						onChange={this.updateInput}
					/>
					<form onSubmit={this.addUser}>
						<h6>When:</h6>
						<Calendar
							class="calendar"
							name="appointments"
							onChange={this.onChange}
							value={this.state.date}
						/>
						<button type="submit" class="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</section>
		);
	}
}

export default withRouter(MakingApts);
