import React from 'react';

class Drop extends React.Component {
  state = {
    dogId: '',
    employeeId: '',
    dateTime: '',
  };


  dogChange = (e) => {
    e.preventDefault();
    this.setState({ dogId: e.target.value });
  }

  employeeChange = (e) => {
    e.preventDefault();
    this.setState({ employeeId: e.target.value });
  }

  dateChange = (e) => {
    e.preventDefault();
    this.setState({ dateTime: e.target.value });
  }

  handleSubmit = (e) => {
    // if not defined as a function, create the function ex: const { makeWalks } = this.props;
    // newWalk  is the object I'm passing back into the page
    e.preventDefault();
    const { makeWalks } = this.props;
    const newWalk = {
      dogId: this.state.dogId,
      employeeId: this.state.employeeId,
      dateTime: this.state.dateTime,
    };
    makeWalks(newWalk);
  }

  render() {
    const doggies = this.props.dogs.map(dog => (
      <option key={dog.id} value={dog.name}>{dog.name}</option>
    ));
    const techies = this.props.workers.map(worker => (
      <option key={worker.id} value={worker.name}>{worker.name}</option>
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select a dog:
            <select value={this.state.dogId} onChange={this.dogChange}>
              {doggies}
            </select>
            Select a teacher:
            <select value={this.state.employeeId} onChange={this.employeeChange}>
              {techies}
            </select>
            <input
              name="newWalk"
              type="text"
              value={this.state.dateTime} onChange={this.dateChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default Drop;
