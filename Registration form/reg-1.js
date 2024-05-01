const stu_db = [];
var id = 100;
console.log(stu_db);

function registor() {
    const student = {
        c_id: id+1,
        fname: String(document.getElementById('fname').value),
        sname: String(document.getElementById('sname').value),
        dob: String(document.getElementById('dob').value),
        gender: String(document.getElementById('sex').value),
        c_name: String(document.getElementById('c_name').value),
        branch: String(document.getElementById('branch').value),
        email: String(document.getElementById('email').value),
        phone: Number(document.getElementById('mobile').value),
        pass: String(document.getElementById('pass').value)
    };
    // alert("Successfully Submited");
    stu_db.push(student);
    console.log(student);
    id++;

    verifypass();
    clrScreen();
};

function verifypass() {
    const pass = String(document.getElementById('pass').value);
    const c_pass = String(document.getElementById('v_pass').value);
    if (pass != c_pass) {
        alert("Password not matched");
    }
    else {
        alert("Registration Successful");
    };
};

function display(){
    let content = '';
    for (let i = 0; i < stu_db.length; i++) {
        const stu_data = stu_db[i];
        content = 
            stu_data.c_id + "<br>" + stu_data.fname + "<br>" + 
            stu_data.sname + "<br>" + stu_data.dob + "<br>" +
            stu_data.gender + "<br>" + stu_data.c_name + "<br>" +
            stu_data.branch + "<br>" + stu_data.email + "<br>" +
            stu_data.phone + "<br>" + 
            stu_data.pass + "<br><br>";
        document.getElementById('result').innerHTML += content; 
    };
};
// stu_data.s_ship + "\n" +
function clrScreen() {
    document.getElementById('fname').value = '';
    document.getElementById('sname').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('sex').selectedIndex = 0;
    document.getElementById('c_name').selectedIndex = 0;
    document.getElementById('branch').selectedIndex= 0;
    document.getElementById('email').value='';
    document.getElementById('mobile').value='';
    document.getElementById('pass').value='';
    document.getElementById('v_pass').value='';
}
