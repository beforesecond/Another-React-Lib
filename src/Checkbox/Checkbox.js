import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css"


const Checkbox = ({
    title = '',
    options = [],
    onItemClick = () => { }
}) => {
    return (
        <div className="container">

            <div className="checkbox-title">
                <label ><b>{title} :</b></label>
            </div>

            <form>
                {options.map((value, index) => {
                    return (
                        <div>
                            <label class="container"> {value.label}
                                <input type="checkbox" id={value.id} name="checkbox" onClick={() => onItemClick(value.id)} className=".regular-checkbox" />
                                <span class="checkmark"></span>
                            </label>

                        </div>
                    );
                })}
            </form>
        </div>
    );
};

Checkbox.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
};
export default Checkbox;