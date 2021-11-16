import React, {useState, useEffect} from "react";
import "../../App.css";
import { Button, Dropdown, Modal} from 'react-bootstrap';
import { data } from '../CONSTANT.js'

export default function Home() {
  const ddItems = ['Vegetables', 'Fruits']; 
  const [modalShow, setModalShow] = React.useState(false);
  const [dropdownVal, setDropDownVal] = useState('All');
  const [itemSelect, setItemSelect] = useState();

  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  }
  const disDdItems = ddItems.filter(distinct);

  const filterDataItem = (item) => {
    setDropDownVal(item)
    console.log(dropdownVal)
  }

  const openModal = (item) => {
    console.log('modal')
    setModalShow(true)
    setItemSelect(item);
  }

  return (
    <div className="Home">
      <div>Content</div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {dropdownVal}
        </Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Item key ={0} href="#/action-1" onClick={()=> filterDataItem('All')}>All</Dropdown.Item>
          {disDdItems.map((item, ind)=>{
            return <Dropdown.Item key ={ind+1} href="#/action-1" onClick={()=> filterDataItem(item)}>{item}</Dropdown.Item>
          })}
        </Dropdown.Menu>
      </Dropdown>
      <div className='cards'>
        {data.map((item, index) => {
          
          return (dropdownVal === 'All' || item.category === dropdownVal) && <div className="card-parent"><div className="card-item" key={index} >{item.available > 0 ? <>{item.name}<br/>{item.category}<br/>Left: {item.available}</> : <h5>Out of Stock</h5>}</div><div  className= {item.available ? "card-footer" : "card-footer cursor-disable"} style={{backgroundColor:"yellowgreen"}} onClick={() => item.available &&openModal(item)}><div>BUY</div><div>₹ {item.price}</div></div></div>
        })}
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onBuy ={() => setModalShow(false)}
        selectedItem={itemSelect}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  console.log('model active')
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Selected Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <table class="table table-striped">
    <thead>
      <tr>
        <th>Item</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td>{props.selectedItem?.name}</td>
      </tr>
      <tr>
        <td>Category</td>
        <td>{props.selectedItem?.category}</td>
      </tr>
      <tr>
        <td>Vendor</td>
        <td>{props.selectedItem?.vendor}</td>
      </tr>
      <tr>
        <td>Available</td>
        <td>{props.selectedItem?.available}</td>
      </tr>
    </tbody>
    <tfoot>
    <tr>
      <th id="total" >Total :</th>
      <td><b>{props.selectedItem?.price}</b></td>
    </tr>
   </tfoot>
  </table>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onBuy} variant="success">Pay</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
