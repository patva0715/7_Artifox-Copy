import React from 'react'
import { useSelector } from 'react-redux'
// import { capitalizeFirstLetter } from '../utils'
import Grid from '../components/Grid'
import Card from '../components/Card'
const Store = () => {
    const {storeItems}=useSelector(state=>state)
    
    // console.log(storeItems)
    return (
        <div className="main-store">
            <Grid container xs={12} spacing={1}>
                {storeItems.map(item=>(
                    <Grid item key={item.id} lg={3} xs={6} className="store-item">
                        <Card item={item}/>
                    </Grid>))}
            </Grid>
         
           
        </div>
    )
}

export default Store