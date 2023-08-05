import './Examples.css';
import Button from 'react-bootstrap/Button';

import { BsArrowUpRight } from "react-icons/bs";

function Examples() {


  return (
    <div className="examples">
      <h3>Examples of types of questions to ask RealAssist</h3>
      <div className="content">
        <Button variant="secondary" className ="btns" style={{padding : "1rem", color: "black", backgroundColor :"white", border :"none", display : "flex", justifyContent : "space-between"}}>
          Creating blog content specific to real estate.<BsArrowUpRight className='arrow' />
        </Button>
        <Button variant="secondary" style={{padding : "1rem", color: "black", backgroundColor :"white", border :"none", display : "flex", justifyContent : "space-between"}}>
          Creating blog content specific to real estate.<BsArrowUpRight className='arrow' />
        </Button>
        <Button variant="secondary" style={{padding : "1rem", color: "black", backgroundColor :"white", border :"none", display : "flex", justifyContent : "space-between"}}>
          Creating email drip compaign content for your clients.<BsArrowUpRight className='arrow' />
        </Button>
        <Button variant="secondary" style={{padding : "1rem", color: "black", backgroundColor :"white", border :"none", display : "flex", justifyContent : "space-between"}}>
          Writing answers to your clients texts/ emails.<BsArrowUpRight  className='arrow'/>
        </Button>
      </div>
     
      
      
    </div>
  );
}

export default Examples;