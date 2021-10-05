import React, { Component } from 'react'


class CategoryMenu extends Component {
    constructor(){
        super()
        this.state = {
            categories: [],
            name: "",
            selected: "",
            validationError: "",
            selectedCat: {}
        }
    }



    componentDidMount = () => {
        fetch(`http://localhost:9292/categories`)
        .then(res => res.json())
        .then(categories => 
            this.setState({
                categories: categories
            })   
    )
    
}

    handleChange = (e) => {
        this.setState({
            selected: e.target.value,
            validationError: e.target.value === "Categories" ? "You must select a Category" : ""
        }) 
        this.updateSelectedState(e.target.value)
    }   
    updateSelectedState = (name) => {
        this.state.categories.map(cat => {
            if (name == cat.name) {
                console.log(cat.id)
                this.props.categoryId(cat.id)
                this.setState({
                    selectedCat: cat,
                    name: cat.name
                }) 
            } 
        })   
    }

    
    render(){
    return (
        <div>
            <select value={this.state.selected} onChange={this.handleChange}>
                <option default value="Categories">Categories</option>
                {this.state.categories.map((cat) => <option key={cat.id} value={cat.name}>{cat.name}</option>)}
            </select>
            <div style={{color: "red", marginTop: "5px"}}>
                {this.state.validationError}
            </div>
        </div>
    )}
}

export default CategoryMenu