function newpat() {
    let name = prompt("What is your name ?");
    let blood = prompt("What is your Blood Group?");

    swal(" Are you a new patient ?", {
        buttons: ["NO!", "YES!"],
    });
    let a = document.createElement("p");
    div101.appendChild(a);
    a.innerHTML = (name + " enter the below detail !!!");

    document.getElementById("div102").innerHTML = ("Your Name is " + name);

    let age = document.getElementById("div102").innerHTML = ("What is your age ? <br>");


    let agein = document.createElement("input");

    agein.id = "finput1";
    div102.appendChild(agein);




    let gen = document.getElementById("div103").innerHTML = ("What is your Gender ? <br>");
    let genin = document.createElement("input");
    genin.id = "finput2";
    div103.appendChild(genin);


    let dis = document.getElementById("div104").innerHTML = ("What is your disease ? <br>");
    let disin = document.createElement("input");
    disin.id = "finput3";
    div104.appendChild(disin);



    let submitbtn = document.createElement("button");
    subdiv.appendChild(submitbtn);
    submitbtn.id = "submitbtn";
    submitbtn.innerHTML = ("Submit");

    submitbtn.onclick = function() {
        swal("Good job!", " Your Report had generated!", "success");

        let age = document.getElementById("finput1").value;
        let disease = document.getElementById("finput3").value;
        let gender = document.getElementById("finput2").value;


        //create a hr tag
        let hr1 = document.createElement("hr");
        hr1.id = "hr1";
        div111.appendChild(hr1)

        //logo





        // for creat report head
        let rhead = document.createElement("h2");
        rhead.id = "headr";
        div111.appendChild(rhead);
        rhead.innerHTML = ("Government Hospital of INDIA");

        // for mediacal report
        let medicalreport = document.createElement("h3");
        medicalreport.id = "medicalr";
        div111.appendChild(medicalreport);
        medicalreport.innerHTML = ("Medical Report");


        // date time
        const d = new Date()
        let rdate = document.createElement("h4");
        rdate.id = "dater";
        div111.appendChild(rdate);
        rdate.innerHTML = ("Date :" + " and Time " + d);

        //name
        let rname = document.createElement("h5");
        rname.id = "namer";
        div111.appendChild(rname);
        rname.innerHTML = ("I the Undersigning Doctor in Medicine <br>");

        //dr
        let rdr = document.createElement("h4");
        rdr.id = "drr";
        div111.appendChild(rdr);
        rdr.innerHTML = ("S.SURYA - MBBS");

        //name of patient
        let rmain = document.createElement("h4");
        rmain.id = "mainr";
        div111.appendChild(rmain);
        rmain.innerHTML = ("Name of patient : " + name);

        //age and stage of life

        let rage = document.createElement("h4");
        rage.id = "ager";
        div111.appendChild(rage);
        rage.innerHTML = ("Age of patient &nbsp;&nbsp; : " + age);


        // for gende 
        let rgen = document.createElement("h4");
        rgen.id = "genr";
        div111.appendChild(rgen);
        rgen.innerHTML = ("gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : " + gender);

        // for deasesi 
        let rdis = document.createElement("h4");
        rdis.id = "disr";
        div111.appendChild(rdis);
        rdis.innerHTML = ("disease &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  : " + disease);


        // blood group
        let rbo = document.createElement("h4");
        rbo.id = "bor";
        div111.appendChild(rbo);
        rbo.innerHTML = ("Blood Group &nbsp;&nbsp;&nbsp;&nbsp;  : " + blood);



    }



}






// for old pat


function oldpat() {
    let name = prompt("What is your name ?");
    let a = document.createElement("p");
    div101.appendChild(a);
    a.innerHTML = (name + " enter the below detail !!!");

}