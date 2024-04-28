const stu_db = [];
var id = 100;

function registor() {
    const student = {
        c_id: id+1,
        fname: document.getElementById('fname').value,
        sname: document.getElementById('sname').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('sex').value,
        c_name: document.getElementById('c_name').value,
        branch: document.getElementById('branch').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('mobile').value,
        s_ship: document.getElementById('s_ship').value,
        pass: document.getElementById('pass').value
    }
    alert("Successfully Submited");
    stu_db.push(student);
    console.log(student);
    id++;

    verifypass()
}

function verifypass() {
    const pass = document.getElementById('pass').value;
    const c_pass = document.getElementById('c_pass').value;
    if (pass != c_pass) {
        alert("Password not matched");
    }
    else {
        alert("Registration Successful");
    }
}

function display(){
    let content = ''
    for (let i = 0; i < stu_db.length; i++) {
        const stu_data = stu_db[i];
        content = 
            stu_data.c_id + "\n" + stu_data.fname + "\n" + 
            stu_data.sname + "\n" + stu_data.dob + "\n" +
            stu_data.gender + "\n" + stu_data.c_name + "\n" +
            stu_data.branch + "\n" + stu_data.email + "\n" +
            stu_data.phone + "\n" + stu_data.s_ship + "\n" +
            stu_data.pass + "\n\n";
        document.getElementById('result').innerHTML += content; 
    }
}
