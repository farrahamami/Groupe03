import React from "react";
import Icone from "./Icone";
class Pictogramme extends React.Component {
    constructor(props){
        super(props);
        this.state={
            message:"Bonne découverte des composants React",
            counter:0,
        };
    }

    handleLikeClick = () => {
        this.setState({message:"Premier défi réussi!"});
        this.setState((prevState) => ({counter:prevState.counter + 1}));
        this.setState({
            buttonStyle:{
                backgroundColor:"cyan",
                fontWeight:"bold",
            },
        });
    };

    render(){
        return(
            <div>
          {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
          <Icone/>
          <hr />
        <div>
            <div className="counter">{this.state.counter}</div>
         <button type="button" className="btn no-outline btn-secondary" style={this.state.buttonStyle} onClick={this.handleLikeClick}>
          <i className="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
          &nbsp;
          <span className="align-middle">J'aime</span>
        </button>
        </div>
    </div>
        )
    };
};
export default Pictogramme;