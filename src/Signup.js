import { useState } from "react"
import React from "react"

// export default function SignUp(){
//     const [name,setName] = useState('')

//     return <>
//     <h3>Register</h3>
//     <form>
//         <label>Name: </label>
//         <input type="text" name = "fullname"></input>
//     </form>
//     </>
// }

export default class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fullname:'',
            gender:'male',
            age:15,
            city:'',
            about:'',
            TS:true,
            language:['hadsaw']
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        let {name, value, checked, type, selectedOptions} = event.target

        if(name  === 'language'){
            value = Array.from(selectedOptions,option => option.value) //other way
        }

        //selectedOption.map(itm=>itm.value) //one way
        // if(name === 'fullname'){
        //     this.setState({fullname:event.target.value})
        // }

        // if(name === 'city'){
        //     this.setState({city:event.target.value})
        // }
        if(type === 'checkbox'){
            value = checked
        }

        this.setState({[name]:value})
          

    }

    render(){
        return <>
     <h3>Register</h3>
     <p>{JSON.stringify(this.state)}</p>
     <form>
         <label>Name: </label>
         <input type="text" name = "fullname" value={this.setState.fullname} onChange={this.handleChange}></input>

         <label>City: </label>
         <input type="text" name = "city" value={this.setState.city} onChange={this.handleChange}></input>


         <label>About Me: </label>
        <textarea name="about" onChange={this.handleChange} value={this.state.about}></textarea>

        <label>Skills: </label>
        <label>TypeScript: <input type="checkbox" name="TS" checked={this.state.TS}></input></label>

        <label>Language: </label>
        <select name="language" value={this.state.language} onChange={this.handleChange} multiple>
            <option value={'urdu'}>Urdu</option>
            <option value={'English'}>English</option>
            <option value={'Arabic'}>Arabic</option>
            <option value={'Hindi'}>Hindi</option>
        </select>

     </form>
     </>
    }
}