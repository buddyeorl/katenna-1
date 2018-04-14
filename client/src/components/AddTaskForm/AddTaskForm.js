import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import './AddTaskForm.css';

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', jobTitle: '', item: '', description: [], item1: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    appendInput() {
        var newInput = `input-${this.state.description.length}`;
        this.setState({ description: this.state.description.concat([newInput]) });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/employees/create', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                data: {
                    Item: this.state.Item,
                    jobTitle: this.state.jobTitle,
                    description: this.state.description
                }
            }), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => {
            console.log('response URL');
            console.log(res.url);
        })
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:'));
    }

    render() {
        return (
            <div className="container" id="AddTaskFormContainer">
                <form onSubmit={this.handleSubmit}>

                    <h2 id="formTitle">New Task</h2>

                    {/* {errors.summary && <p className="error-message">{errors.summary}</p>} */}

                    <div className="field-line" id="fieldDiv">
                       <label>Job Title</label>
                       <input
                            className="form-control"
                            id="jobTitleInput"
                            type="text"
                            name="jobTitle"
                            onChange={this.handleChange}
                            value={this.state.jobTitle}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                    <label>Item</label>
                       <input
                            className="form-control"
                            id="itemInput"
                            type="text"
                            name="item"
                            onChange={this.handleChange}
                            value={this.state.item}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                       <label>Description</label>
                       <input
                            className="form-control"
                            id="descriptionInput"
                            type="text"
                            name="item1"
                            onChange={this.handleChange}
                            value={this.state.item1}
                        />
                    </div>

                    {this.state.description.map(input =>
                        <div className="field-line" id="fieldDiv">
                        <label>Description</label>
                        <input
                            className="form-control"
                            id="descriptionInput"
                            type="text"
                            name={'input-' + input.length}
                            onChange={this.handleChange}
                            value={this.state.description[input.length - 1]}
                            />
                        </div>
                    )}

                    <div>
                        <button id="FormSubmitBtn" label="Create New Task">Create</button>
                    </div>
                    <button onClick={() => this.appendInput()}>
                        CLICK ME TO ADD AN INPUT
               </button>


                </form>

            </div>
        );
    }
}

export default AddTaskForm;
