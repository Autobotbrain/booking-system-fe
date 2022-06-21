import axios from "axios"

export const register =newUser=>{
    console.log(newUser)
    return axios
        .post('http://localhost:5000/app/signup',{
            first_name:newUser.first_name,
            last_name:newUser.last_name,
            email:newUser.email,
            password:newUser.password
        })
            .then(res=>{
                console.log("registered");
                window.alert("register successfull")
            })
}

export const login=user=>{
    
    return axios
        .post('http://localhost:4000/app/login',{
            email:user.email,
            password:user.password
        })
            .then(res=>{
                console.log(res.data)
                localStorage.setItem('usertoken',res.data)
                return res.data

            })
            .catch(err=>{
                console.log(err)
            })
}

export const addBooking =newUser=>{
    return axios
        .post('http://localhost:5000/bookings/add',{
            time:newUser.time,
            user_name:newUser.user_name,
            route:newUser.route,
        })
            .then(res=>{
                console.log("Booking Aded");
                window.alert("Booking Added successfull")
            })
}