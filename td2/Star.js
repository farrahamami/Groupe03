import React from 'react';

class Star extends React.Component{
    constructor(props){
        super(props);
        this.state ={rating:0};
        this.handleClick = this.handleClick.bind(this);
        }

        handleClick(index){
            this.setState({rating:index+1});
        }

        render(){
        const {rating} =this.state
        const stars = Array.from({length:5}, (_,index)=>(
        <img 
        key={index}
        src={index < rating ? process.env.PUBLIC_URL + './star_On.png': process.env.PUBLIC_URL + './star_Off.png'}
        alt={`Star ${index + 1}`}
        onClick={()=>this.handleClick(index)}
        style={{cursor:'pointer',marginRight:'5px', width:'auto', height:'30px'}}
                />
            ));

        
            return(
                <div>
                    <p>Donne ton avis</p>
                    {stars}
                    <p>Votre avis: {rating} étoile(s)</p>
                </div>
                
            );

        }
}

export default Star;