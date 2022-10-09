import React from "react";
import ReactDOM from "react-dom";
import './sass/style.scss';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'


class Card extends React.Component {
	render() {
		return (
			<div className = "card">
				<h1>{this.props.title}</h1>
				<img src={img1} alt="" />
				<p>{this.props.content}</p>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div className="row">
				<Card title="Hello1" content="This is some text inside of the card."/>
				<Card title="Hello2" content="This is some info inside of the card."/>
				<Card title="Hello3" content="This is some topc inside of the card."/>
				<Card title="Hello3" content="This is some topc inside of the card."/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
