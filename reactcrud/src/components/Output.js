import React from 'react';
import {Item} from './Item';
export const Output=(props)=>{
   
    console.log("props",props.itemList);
    return(

        <div>
      
      <table className="table table-bordered w-80 mx-auto">

<thead>
    <tr>
        <td>ID</td>
        <td>NAME</td>
        <td>URL</td>
        <td>PRICE</td>
        <td></td>
    </tr>
</thead>

<tbody>
{  
            props.itemList.map(item =><Item item={item} markForDelete={props.markForDelete} />)
            
            }
</tbody>

      </table>

      

           
        </div>
    );
}