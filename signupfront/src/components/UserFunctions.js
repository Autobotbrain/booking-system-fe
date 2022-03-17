import axios from "axios"

export const register =newUser=>{
    return axios
        .post('http://localhost:5000/app/signup',{
            first_Name:newUser.first_Name,
            last_Name:newUser.last_Name,
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
        .post('http://localhost:5000/app/login',{
            email:user.email,
            password:user.password
        })
            .then(res=>{
                console.log(res)
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