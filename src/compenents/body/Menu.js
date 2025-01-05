
import {Component} from 'react'
import Dishes from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetails from './DishDetails'

class Menu extends Component {
    constructor(props) { 
        super(props) 

    this.state = {
        dishes: Dishes,
        selectedDish: null,
        model: false
    }

    this.toggle = this.toggle.bind(this);
}

    toggle = () => {
         this.setState((prevState) => ({ modal: !prevState.modal }))
     }

    onDishSelect = dish => {
        this.setState({selectedDish: dish}, this.toggle)
    }
  

  render() {
    const menu = this.state.dishes.map(dish => {
        return (
            <MenuItem 
            key={dish.id} 
            dish={dish} 
            DishSelect={() => this.onDishSelect(dish)}
             />
        )
    })

   let DishDetail = null
   if(this.state.selectedDish !== null){
       DishDetail = <DishDetails dish={this.state.selectedDish} modal={this.state.modal} toggle={this.toggle} />
   }
    return (
      <div className='container'>
        <div className='row mt-5'>    
               {menu}     
        </div>  
        <div className='row mt-5'>
            {DishDetail}
        </div>
      </div>
    )
  }
}

export default Menu