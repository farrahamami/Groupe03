import React from 'react';

class Donnees extends React.Component{
constructor(props) {
super(props);
this.state=[
{
    id: 1,
    text: "Pratiquer du sport",
    completed: true
}, 
{
    id: 2,
    text: "Ecouter de la musique",
    completed: false
},
{
id: 3,
text:"Se balader en plein nature",
completed: false
},
{
id: 4,
text: "Lire un roman",
completed: true
}]
}
handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      // Toggle the completion status for the hobby with the given id
      state: prevState.map((hobby) =>
        hobby.id === id ? { ...hobby, completed: !hobby.completed } : hobby
      ),
    }));
  };

  render() {
    return (
      <div >
        <h2>Liste des passe-temps:</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {this.state.map((hobby) => (
            <li key={hobby.id}>
              <input
                type="checkbox"
                checked={hobby.completed}
                onChange={() => this.handleCheckboxChange(hobby.id)}
              />
              {hobby.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Donnees;