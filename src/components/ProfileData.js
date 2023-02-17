import React from "react";

export const ProfileData = (props) => {
    return (
        <div id="profile-div">
            <p><strong>Ime: </strong> {props.graphData.givenName} {props.graphData.surname}</p>
            <p><strong>Id: </strong> {props.graphData.id}</p>
        </div>
    );
};