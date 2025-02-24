// var allUsers = []

// var getUsers = localStorage.getItem('users')

// if(getUsers != null ){
//     allUsers = JSON.parse(getUsers)
// }

// function signup(){
//     var name = document.getElementById('name')
//     var email = document.getElementById('email')
//     var password = document.getElementById('password')

//     var students = {
//         name: name.value,
//         email: email.value,
//         password: password.value
//     }

//     allUsers.push(students)
//     localStorage.setItem('users', JSON.stringify(allUsers))
// }

// function login(){
//     var email = document.getElementById('em')
//     var password = document.getElementById('ps')

//     var filterUser = allUsers.filter(function(data){
//         return data.email == email.value && data.password == password.value
//     })

    
//     if(filterUser.length){
//         alert("okay ki report")
//         localStorage.setItem('username',filterUser[0].name)
//         location.href = './welcome.html'
//     }
//     else{
//         alert('unsuccessfull login')
//     }


// }


var products = [
    {
        p_id: '01',
        p_name: 'Samsung',
        p_price: '40000',
        p_model: 's10',
        p_img: 'url of image'
    },
    {
        p_id: '01',
        p_name: 'Samsung',
        p_price: '40000',
        p_model: 's10',
        p_img: 'url of image'
    },
    {
        p_id: '01',
        p_name: 'Samsung',
        p_price: '40000',
        p_model: 's10',
        p_img: 'url of image'
    },
    {
        p_id: '01',
        p_name: 'Samsung',
        p_price: '40000',
        p_model: 's10',
        p_img: 'url of image'
    },
    {
        p_id: '01',
        p_name: 'Samsung',
        p_price: '40000',
        p_model: 's10',
        p_img: 'url of image'
    },
    {
        p_id: '01',
        p_name: 'Samsung',
        p_price: '40000',
        p_model: 's10',
        p_img: 'url of image'
    }
]