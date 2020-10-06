import React, { useState } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardImgOverlay, Row, Col
} from 'reactstrap';
import "./Css/card.css";
import Modal from "./Modal";
import Icon from '@material-ui/core/Icon';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function ToLikeMore() {
  const [userListArr, setUserListArr] = useState([]);
  const [userList, setUserList] = useState({
    title: "",
    text: ""

  })
  const [isAddMoreClick, setIsAddMoreClick] = useState(false);
  function handleAddMoreClick() {
    
    setIsAddMoreClick(!isAddMoreClick);
  }
  function handleChange(event){
    const {value,name}=event.target;
    setUserList(preValue=>{
      return{
        ...preValue,
        [name]:value

      }
    })
    console.log(userList);

  }
  function handleSubmit(event)
  {
    setUserListArr(preList=>{
      return[...preList,userList]
    })
    setUserList({
      title:"",
      text:""
    });
    setIsAddMoreClick(false);
    event.preventDefault();
    
  }
  function handleDelete(id)
  {
    setUserListArr(preList=>{
      return preList.filter((list,index)=>{
        return id!==index;
      })
    })
  }

  return <div>

    <Row>

      {userListArr.map((list,index )=> {
        return <Col sm="3" >
           
          <Card  key={index} body className="margin-10">
           <p onClick={()=>{handleDelete(index)}}className="delete-icon"><DeleteOutlineIcon/></p>
           
            <CardTitle><b>{list.title}{index}</b></CardTitle>
            <CardText>{list.text}</CardText>

          </Card>
        </Col>
      })}

      <button type="button" onClick={handleAddMoreClick} className=" add-more-btn" ><Icon className="fa fa-plus-circle" style={{ fontSize: 60 }} /></button>
     
      <Modal toggle={handleAddMoreClick}
      isOpen={isAddMoreClick} Header="Add Item"
        Body={
          <div>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="title">Title</label>
                <input name="title"type="text" value={userList.title} onChange={handleChange} class="form-control" id="title" />
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <textarea name="text"  value={userList.text} onChange={handleChange} cols="10" rows="3"  class="form-control" id="content" />
              </div>

              <button type="submit" class="btn btn-default">Add</button>
            </form>
          </div>
        }
      />

    </Row>

  </div>
}
export default ToLikeMore;