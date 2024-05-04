const stu_db = JSON.parse(localStorage.getItem('stu_db')) || [];
let id = Number(JSON.parse(localStorage.getItem('id'))) || 100;
const upCase = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
const lowCase = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));
const nums = Array.from({length: 10}, (_, i) => i.toString());

// const stu_db = [];
// let id = 100;

function registor() {
    if (checkBlank() == false) {
        return;
    } else {
        const student = {
            c_id: id + 1,
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
        console.log("Next ID:",id+1);

        alert("Registration Successfull! College ID: " + student.c_id);
        clrScreen();
    };
};

window.addEventListener('beforeunload', function() {
    localStorage.setItem('stu_db', JSON.stringify(stu_db));
    localStorage.setItem('id', JSON.stringify(id));
});
console.log(stu_db);
console.log("Next ID :" , id+1);

function display(){
    document.getElementById('result').innerHTML = '';
    let content = '';
    let temp = '';
    for (let i = 0; i < stu_db.length; i++) {
        const stu_data = stu_db[i];
        temp = 
            stu_data.c_id + "<br>" + stu_data.fname + "<br>" + 
            stu_data.sname + "<br>" + stu_data.dob + "<br>" +
            stu_data.gender + "<br>" + stu_data.c_name + "<br>" +
            stu_data.branch + "<br>" + stu_data.email + "<br>" +
            stu_data.phone + "<br>" + 
            stu_data.pass + "<br><br>";
        content += temp; 
    };
    document.getElementById('result').innerHTML = content;
};

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

function checkBlank(){
    if (document.getElementById('fname').value == '' ||
        document.getElementById('sname').value == '' ||
        document.getElementById('dob').value == '' ||
        document.getElementById('sex').selectedIndex==0||
        document.getElementById('c_name').selectedIndex==0||
        document.getElementById('branch').selectedIndex==0||
        document.getElementById('email').value.length==0||
        document.getElementById('mobile').value.length==0||
        document.getElementById('pass').value.length==0||
        document.getElementById('pass').value != document.getElementById('v_pass').value) {
        
        alert("Please fill all the fields");
        return false;
    } else {
        if (document.getElementById('mobile').value.length != 10) {
            alert("Please enter valid phone number");
            return false;
        };

        let validity = isValid(document.getElementById('pass').value);
        if (validity == false || document.getElementById('pass').value.length < 8){
            alert("Please enter valid password")
            return verifypass();
        };
        return true;
    }
};

function isValid(str) {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (!hasUpperCase && charCode >= 65 && charCode <= 90) {
            hasUpperCase = true;
        };
        if (!hasLowerCase && charCode >= 97 && charCode <= 122) {
            hasLowerCase = true;
        };
        if (!hasDigit && (charCode >= 48 && charCode <= 57)) {
            hasDigit = true;
        };
        if (hasUpperCase && hasLowerCase && hasDigit) {
            return true;
        };
    };
    return hasUpperCase && hasLowerCase && hasDigit;
};

function verifypass() {
    if (document.getElementById('pass').value != document.getElementById('v_pass').value) {
        alert("Password not matched");
        return false;
    }
    else {
        alert("Registration Successful");
        return true;
    };
};