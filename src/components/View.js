import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({visitors, deleteVisitor}) => {
    return visitors.map(visitor=>(
        <tr key={visitor.firstName}>
            <td>{visitor.firstName}, {visitor.lastName}</td>
            <td>{visitor.purpose}</td>
            <td>{visitor.date}</td>
            <td className='delete-btn' onClick={()=>deleteVisitor(visitor.firstName )}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}