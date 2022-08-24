

deleteUser=(event)=>{
    document.getElementById('view').innerHTML = null;

    p = document.createElement('p');
    p.innerHTML = 'Are you sure you want to delete this user?'
    p.style.color = 'red';
    box = document.createElement('table');
    box.appendChild(p);

    del = document.createElement('button');
    del.innerHTML = 'Yes Delete';
    del.addEventListener('click',(e)=>{
        id = event.target.id.split('_')[1];
        fetch('./delete?'+'id='+id)
        .then(res => res.json())
        .then(data => {
        if(data.success == true){
            getAll();
            document.getElementById('view').innerHTML = null;
        }
        });
    });


    can = document.createElement('button');
    can.innerHTML = 'Cancel';
    can.addEventListener('click',(e)=>{
        document.getElementById('view').innerHTML = null;
    });

    box.appendChild(del);
    box.appendChild(can);
    document.getElementById('view').appendChild(box);

}


editUser=(event)=>{
    document.getElementById('view').innerHTML = null;
    var on = event.path[2].children[0].innerHTML;
    document.getElementById('view').innerHTML = 'Edit User : '+on;

    con = document.createElement('div');
    

    det = document.createElement('p'); 
    det.innerHTML = 'User Name : ';
    un = document.createElement('input');
    un.id = 'u_name';
    un.value = event.path[2].children[0].innerHTML;
    det.append(un);
    con.append(det);

    det = document.createElement('p'); 
    det.innerHTML = 'Email : ';
    un = document.createElement('input');
    un.readOnly = true;
    un.value = event.path[2].children[1].innerHTML;
    det.append(un);
    con.append(det);

    det = document.createElement('p'); 
    det.innerHTML = 'Password : ';
    un = document.createElement('input');
    un.id = 'u_pass';
    det.append(un);
    con.append(det);

    det = document.createElement('p'); 
    det.innerHTML = 'Confirm Password : ';
    un = document.createElement('input');
    un.id = 'u_cpass';
    det.append(un);
    con.append(det);


    b = document.createElement('button');
    b.innerHTML = 'Submit';
    b.addEventListener('click',(e)=>{

        u_name = document.getElementById('u_name').value;
        u_pass = document.getElementById('u_pass').value;
        id = event.target.id.split('_')[1];

        fetch('./edit?'+'id='+id+'&'+'name='+u_name+'&'+'pass='+u_pass)
        .then(res => res.json())
        .then(data => {
            if(data.success == true){
                getAll();
                msg = document.createElement('p');
                msg.style.color = 'green';
                msg.innerHTML = 'User '+on+' Updated Successfully!';
                document.getElementById('view').innerHTML = null;
                document.getElementById('view').appendChild(msg);
            }
        });
    });

    con.appendChild(b);
    
    // con.append(un);
    con.appendChild(document.createElement('br'));

    box = document.createElement('table');
    box.appendChild(con);

    document.getElementById('view').appendChild(box);
}


viewUser=(event)=>{
    document.getElementById('view').innerHTML = null;
    document.getElementById('view').innerHTML = 'View User : '+event.path[2].children[0].innerHTML;

    con = document.createElement('div');
    

    det = document.createElement('p'); 
    det.innerHTML = 'User Name : '+event.path[2].children[0].innerHTML;
    con.append(det);

    det = document.createElement('p'); 
    det.innerHTML = 'Email : '+event.path[2].children[1].innerHTML;
    con.append(det);
    
    // con.append(un);
    con.appendChild(document.createElement('br'));

    box = document.createElement('table');
    box.appendChild(con);

    document.getElementById('view').appendChild(box);
}


addUser=(event)=>{
    document.getElementById('view').innerHTML = null;
    document.getElementById('view').innerHTML = 'Add User';

    con = document.createElement('div');
    con.id = 'panel';
    

    det = document.createElement('p'); 
    det.innerHTML = 'User Name : ';
    un = document.createElement('input');
    un.id = 'u_name';
    det.append(un);
    con.append(det);

    det = document.createElement('p'); 
    det.innerHTML = 'Email : ';
    un = document.createElement('input');
    un.id = 'u_mail';
    det.append(un);
    con.append(det);

    det = document.createElement('p'); 
    det.innerHTML = 'Password : ';
    un = document.createElement('input');
    un.id = 'u_pass';
    det.append(un);
    con.append(det);

    det = document.createElement('p'); 
    det.innerHTML = 'Confirm Password : ';
    un = document.createElement('input');
    un.id = 'u_cpass';
    det.append(un);
    con.append(det);


    b = document.createElement('button');
    b.innerHTML = 'Submit';
    b.addEventListener('click',(e)=>{

        u_name = document.getElementById('u_name').value;
        u_pass = document.getElementById('u_pass').value;
        u_mail = document.getElementById('u_mail').value;

        fetch('./addUser?'+'email='+u_mail+'&'+'name='+u_name+'&'+'pass='+u_pass)
        .then(res => res.json())
        .then(data => {
            if(data.success == true){
                getAll();
                msg = document.createElement('p');
                msg.style.color = 'green';
                msg.innerHTML = 'User '+u_name+' Added Successfully!';
                document.getElementById('view').innerHTML = null;
                document.getElementById('view').appendChild(msg);
            }
            else{
                msg = document.createElement('p');
                msg.style.color = 'red';
                msg.innerHTML = 'Email '+u_mail+' Already Exists!';
                document.getElementById('panel').appendChild(msg)
            }
        });
    });

    con.appendChild(b);
    
    // con.append(un);
    con.appendChild(document.createElement('br'));

    box = document.createElement('table');
    box.appendChild(con);

    document.getElementById('view').appendChild(box);
}


getAll = ()=> fetch('./all')
.then(res => res.json())
.then(data => {
    document.getElementById('main').innerHTML = null;
    addTable();
    data.forEach(element => {
        row = document.createElement('tr');

        d = document.createElement('td');
        d.innerHTML=element.name;
        row.appendChild(d);

        d = document.createElement('td');
        d.innerHTML=element.email;
        row.appendChild(d);

        e = document.createElement('button');
        e.id = 'user_'+element.id;
        e.innerHTML = 'Edit';
        e.addEventListener('click',editUser);

        v = document.createElement('button');
        v.id = 'user_'+element.id;
        v.innerHTML = 'View';
        v.addEventListener('click',viewUser);


        d = document.createElement('button');
        d.id = 'user_'+element.id;
        d.innerHTML = 'Delete';
        d.addEventListener('click',deleteUser);

        un = document.createElement('td')
        un.appendChild(e);
        un.appendChild(v);
        un.appendChild(d);
        row.appendChild(un);

        table.appendChild(row);
    });
});



addTable=()=>{
    table = document.createElement('table');
    mainRow = document.createElement('tr');
    un = document.createElement('th');
    un.innerHTML = 'User Name';
    mainRow.appendChild(un);
    un = document.createElement('th');
    un.innerHTML = 'Email ID';
    mainRow.appendChild(un);
    un = document.createElement('th');
    un.innerHTML = 'Action';
    mainRow.appendChild(un);
    table.appendChild(mainRow);
    document.getElementById('main').appendChild(table);
}

document.getElementById('add').addEventListener('click',addUser);

getAll();

