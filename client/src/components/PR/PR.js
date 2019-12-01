import React, {Fragment} from 'react';
import axios from 'axios';

class PR extends React.Component {
    constructor() {
        super();
        this.state = { pressReleases: [] };
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/PressReleases`)
            .then(res => {
                const pressReleases = res.data;
                this.setState({ pressReleases });
        });
    }

    createPressReleases() {
        const text = this.state.pressReleases.map(pressRelease => {
            return(
                <Fragment>
                    <p><strong>{pressRelease.title}</strong></p>
                    <p>{pressRelease.text}
                        <strong>
                            <a href={pressRelease.pdf}>
                                <span style={{ color: '#008000' }}>News Release</span>
                            </a>
                        </strong>
                    </p>
                </Fragment>
            );
        });
        console.log(this.state.pressReleases);
        return text;
    }

    render() {
        return (
            <div className="company-announcement">
                {this.createPressReleases()}
            </div>
        );
    }
}

export default PR;