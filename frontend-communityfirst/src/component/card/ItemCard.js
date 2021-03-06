import React from "react";
import format from "date-fns/format";
import {Button} from "react-bootstrap";
import {itemType} from "../post/ItemPostCreation";

function ItemCard(props) {

    let deleteBtn = null;
    if (props.showDelete) {
        deleteBtn = (<Button type="button" className="close" variant="primary" onClick={() => props.onDelete(props.id)} aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </Button>)
    }

    let editBtn = null;
    if (props.showEdit) {
        editBtn = (<Button type="button" className="close mr-1" variant="primary"
                           onClick={() => props.onEdit(props.id, props.title, props.description)} aria-label="Close">
            <span style={{"fontSize": "16px"}} aria-hidden="true">Edit</span>
        </Button>)
    }

    const seeMore = (<span>See More</span>)

    const checkDesc = () => {
        return props.maxDesc != null && props.description.length >= props.maxDesc
    }

    const getDesc = () => {
        if (checkDesc()) {
            return (props.description).substring(0, props.maxDesc );
        } else {
            return props.description;
        }
    }

    return (
        <>
            <div className="card mb-2 card-cursor">
                <div className="card-body p-2" onClick={props.onCardClick}>
                    <div className="row mt-2">
                        <div className="col-auto pr-0">
                            <div className="row flex-nowrap no-gutters">
                                <div className="col-auto">
                                    <div className="figure">
                                        {/*<img src={require("../../assets/alicia-keys.jpg")} alt="..."*/}
                                        {/*     className="rounded-circle mr-2" width="45px"*/}
                                        {/*     height="45px"/>*/}
                                        <span className="img-placeholder">
                                            <p>Photo</p>
                                        </span>
                                    </div>

                                </div>
                                <div className="col-auto align-self-center">
                                    <p className="font-weight-bolder mb-0"
                                       style={{"fontSize": "13px"}}>
                                        {props.firstname} {props.lastname}
                                    </p>
                                    <p className="text-primary font-weight-light mb-0" style={{ "fontSize": "12px" }}>
                                        {props.itemType === itemType.REQUEST_ITEM ? 'Requesting Item' : 'Offering Item'}</p>
                                    <p className="text-secondary font-weight-light mb-0"
                                       style={{"fontSize": "12px"}}>
                                        {format(new Date(props.postedDate), "MMMM dd, yyyy")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <h5 className="text-secondary font-weight-bold mb-1"
                                style={{"fontSize": "14px"}}>{props.title}</h5>
                            <p className="m-0" style={{"fontSize": "14px"}}>{getDesc()} {checkDesc() && <span className="text-info see-more"> ...See More</span>}</p>
                        </div>
                        <div className="col-auto">
                            {deleteBtn}
                            {editBtn}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCard;

