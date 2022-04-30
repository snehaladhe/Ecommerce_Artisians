import React,{useState,useEffect, useContext} from 'react';
import {GlobalState} from '../../../GlobalState'

function Categories() {
    const state = useContext(GlobalState)
    const [categories, setCategories] = state.categoriesAPI.categories
    const [category,setCategory]=useState('')
    return (
        <div className='categories'>
            <form>
                <lable htmlfor="category">Category</lable>
                <input type="text" name="category" value={category} required />
                <button type="submit">Save</button>
            </form>
            
                
        
        </div>
    );
}

export default Categories;