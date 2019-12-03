import React, { Fragment } from 'react';
import axios from 'axios';
import './PRAdmin.css';



/* Hero Image and covering text - Using google fonts for the custome text */

/* Company announcements are hard coded in similar format for usage with admin panel */
/* To add company announcements use pre populated elements as template. Replace links and relevant information */
/* The CSS will handle the styling */

class PRAdmin extends React.Component {
    
    constructor(){
        super();
        this.state = {
            title: '',
            text: '',
            pdf: '',
            pressReleases: []
        };
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    handleSubmit = (event) => {
        console.log("HERE!!!");
        const body = {
            title: this.state.title,
            text: this.state.text,
            pdf: this.state.pdf
        }
        axios({
            method: 'POST',
            url: `http://localhost:8080/api/PressReleases`,
            data: body
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

        this.setState({
            title: '',
            text: '',
            pdf: ''
        });
    }

    handleDelete = (title) => {
        console.log(title);
        const body = {
            title: title
        }
        axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/PressReleases`,
            data: body
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    createPressReleases() {
        console.log("HERE!")
        const text = this.state.pressReleases.map(pressRelease => {
            
            return (
                
                <tr>
                    <td>{pressRelease.title}</td>
                    <td>{pressRelease.text}</td>
                    <td>{pressRelease.pdf}</td>
                    <td>
                        <button class="btn" id={pressRelease.title}
                            onClick={() =>this.handleDelete(pressRelease.title)}>
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        });
        return text;
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8080/api/PressReleases`)
            .then(res => {
                const pressReleases = res.data;
                this.setState({ pressReleases });
            });
    }

    render() {
        
        return (
            <div id="main-registration-container">
                <div id="PRAdmin">
                    <h3>Press Release Form</h3>
                    <form>
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title..."
                            value={this.state.title}
                            onChange={event => this.setState({ title: event.target.value })}
                            required />
                        <div className="errorMsg"></div>
                        <label>Summary:</label>
                        <textarea rows="7" cols="31.5" id="Text"
                            value={this.state.text}
                            onChange={event => this.setState({ text: event.target.value })}
                            required>
                        </textarea>
                        <div className="errorMsg"></div>
                        <label>PDF:</label>
                        <input type="text" name="pdf"
                            value={this.state.pdf}
                            onChange={event => this.setState({ pdf: event.target.value })}
                            required />
                        <div className="errorMsg"></div>

                        <input type="button" className="buttonAdmin" value="Submit"
                            onClick={this.handleSubmit} />
                    </form>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Summary</th>
                            <th>PDF</th>
                            <th>Erase</th>
                        </tr>
                        {this.createPressReleases()}
                    </table>
                </div>
            </div>

        );
    }
}


export default PRAdmin;