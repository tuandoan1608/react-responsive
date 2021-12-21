import React, { useState } from 'react';
const AddTask = (props) => {

    const [name, setName] = useState({
        tasks: '',
    })
    const [showForm, setShowForm] = useState(true);

    const handleChangename = (e) => {
        setName({ tasks: e.target.value ,
            showTaskList: true
        });
    }
    const LinkList = () => {
        props.closeForm();
    }
    const handleSubmit = () => {
        props.addTask(name.tasks);
    }
    if (showForm === true) {
        return (
            <React.Fragment>
                <div className="container">
                    <h2>Add New Task</h2>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter name of task" onChange={handleChangename} />
                    </div>

                    <button type="submit" style={{ marginRight: 5 + 'px' }} className="btn btn-default" onClick={handleSubmit}>Add</button>
                    <button type="button" className="btn btn-default" onClick={LinkList}>Back</button>
                </div>
            </React.Fragment>
        )
    }
}

export default AddTask;