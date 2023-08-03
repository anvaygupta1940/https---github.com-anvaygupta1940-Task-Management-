import React from 'react'
import "./ListCard.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import { arrowClick, deleteTask } from '../../redux/apiCalls';
import { useDispatch } from "react-redux";

const ListCard = ({ item }) => {
    const dispatch = useDispatch();
    const ArrowClick = (dir) => {
        arrowClick(item, dir);
    }
    const handleDelete = () => {
        deleteTask(dispatch, item._id);
    }
    // console.log(item);
    return (
        <ul className={`${item.status === "done" ? "complete listcard" : "listcard"}`}>
            <li>
                <p>{item._id}</p>
            </li>
            <li>
                <p>{item.title}</p>
            </li>
            <li>
                <p>{item.desc}</p>
            </li>
            <li>
                <p>{item.status}</p>
            </li>
            <li>
                <button disabled={item.status === "backlog"} onClick={() => ArrowClick("left")} s>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </button>
                <button disabled={item.status === "done"} onClick={() => ArrowClick("right")} s>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </button>
                <button onClick={handleDelete}>
                    <DeleteIcon></DeleteIcon>
                </button>
            </li>
        </ul>
    )
}

export default ListCard
