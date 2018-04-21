import React, {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello from React</h1>
                <p>This text is rendered from the App component</p>
                <small>assets/js/components/app.js</small>

                <h1>Build your styles with:</h1>
                <small>./node_modules/.bin/encore dev --watch</small>
            </div>
        );
    }

}

