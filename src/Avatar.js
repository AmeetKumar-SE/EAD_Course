function Avatar(props){
    return<>
    <div>
        <h2>My Email is {props.person.name2}</h2>
        <Login {...props}/>
    </div>
    </>
}


const Pie = 3.14;


function Login(props){
return <><h1>Login Page is {props.person.city2}</h1></>
}
    
function Dashboard(){
return <> <h1>Dashboard</h1></>
}
    

export default {Pie,Avatar, Login, Dashboard};