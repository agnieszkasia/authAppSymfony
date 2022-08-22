import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";

const AdditionalFields = ({fields}) => (
    <div>
        {fields.map((field, key) => {
            if (field.type === 'checkbox') {
                return <Checkbox id={field.id} key={key} label={field.label} name={field.name} checked={field.checked}/>
            } else {
                return <Input type={'text'} key={key} name={field.name} value={''} label={field.label}/>
            }
        })}
    </div>
)

export default AdditionalFields