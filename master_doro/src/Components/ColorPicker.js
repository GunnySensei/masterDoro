import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {IoIosArrowDown} from 'react-icons/io';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const ColorPicker = () => {
    // const [changeColor, setColor] = useState("green");
    var currentClass = '';
    const handleClick = (e) => {
        if(currentClass !== '') {
            document.body.classList.remove(currentClass);
        };
        document.body.classList.add(`background-${e.target.text}`);
        currentClass = `background-${e.target.text}`;
    }

    return (
        <>
            <div className="container">
                <DropdownButton id="dropdown-basic-button" title="Background Picker">
                    <Dropdown.Item href="#/action-1" onClick={handleClick}>yellow</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={handleClick}>red</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={handleClick}>blue</Dropdown.Item>
                </DropdownButton>
            </div>
        </>
    )
}

export default ColorPicker;