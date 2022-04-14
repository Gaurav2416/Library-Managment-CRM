
const { DB_TYPE_JSON } = require('oracledb')
const date = require('date-and-time')
const oracledb = require('oracledb')
const { response } = require('../app')
const config = {
    user: 'c##scott',
    password: 'tiger',
    connectString: 'localhost:1521/orcl'
}

exports.login = async (req, res) => {
    let conn
    let response;
    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }
    let user = req.body.userName;
    let password = req.body.password;
    data = [user, password]
    sql = `Select userID,StaffId from onlineuser where USERID=:1 and password=:2`
    let result = await conn.execute(sql, data);
    if (result) {
        response = { status: 200, value: result.metaData }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}
exports.addNewMember = async (req, res) => {
    let conn
    let response;
    console.log(req.body);
    let id = req.body.id;
    let fname = req.body.firstname;
    let lname = req.body.lastname;
    let type = req.body.type
    let phone = Number(req.body.phone);
    let homemail = req.body.homemail;
    let campusmail = req.body.campusmail;
    let generatedate = date.format(new Date(req.body.generatedate), 'DD-MMM-YY'); // TO_DATE('2021-11-20T06:00:00.000Z','dd-MON-yyyy')
    let noticedate = date.format(new Date(req.body.noticedate), 'DD-MMM-YY');
    let endate = date.format(new Date(req.body.enddate), 'DD-MMM-YY');
    let employeeid = req.body.employeeid;
    data = [id, fname, lname, type, phone, homemail, campusmail, generatedate, noticedate, endate, employeeid];
    try {
        let sql = `Insert into member values (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11)`;
        conn = await oracledb.getConnection(config)
        // console.log('connection', data)
        result = conn.execute(sql, data);

    } catch (err) {
        console.log('Ouch!', err)
    } finally {
        if (conn) {
            await conn.commit();
            await conn.close();
        }
    }
    console.log(req.body);
    // sql = `Insert into M USERID=:1 and password=:2`
    // let result = await conn.execute(sql, data);
    if (result) {
        response = { status: 200, value: result.metaData }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}

exports.getAllDependent = async (req, res) => {
    let conn
    let response;
    let dataResponse = [];
    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }

    sql = `Select * from dependent`
    let result = await conn.execute(sql);
    result.rows.map(x => {
        var obj = {
            id: x[0],
            firstname: x[1],
            lastname: x[2],
            relation: x[3],
            memberid: x[4],
        }
        dataResponse.push(obj)
    })
    if (result.rows) {
        response = { status: 200, value: dataResponse }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}
exports.getAllStaffDetails = async (req, res) => {
    let conn
    let response;
    var dataResponse = []

    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }

    sql = `Select * from staff`
    let result = await conn.execute(sql);
    result.rows.map(x => {
        var obj = {
            staffid: x[0],
            firstname: x[1],
            lastname: x[2],
            type: x[3],
            joindate: x[4],
            endate: x[5]
        }
        dataResponse.push(obj)
    })
    if (result.rows) {
        response = { status: 200, value: dataResponse }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}
exports.getAllGuestDetails = async (req, res) => {
    let conn
    let response;
    var dataResponse = []

    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }

    sql = `Select * from guest`
    let result = await conn.execute(sql);
    result.rows.map(x => {
        var obj = {
            passid: x[0],
            firstname: x[1],
            lastname: x[2],
            phone: x[3],
            generatedate: x[4],
            expiredate: x[5]
        }
        dataResponse.push(obj)
    })
    if (result.rows) {
        response = { status: 200, value: dataResponse }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}
exports.getAllEmployeeDetails = async (req, res) => {
    let conn
    let response;
    var dataResponse = []

    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }

    sql = `Select * from employee`
    let result = await conn.execute(sql);
    result.rows.map(x => {
        var obj = {
            id: x[0],
            firstname: x[1],
            lastname: x[2],
            ssn: x[3],
            type: x[4],
            othermail: x[5],
            campusmail: x[6],
            phone: x[7],
            joindate: x[8],
            enddate: x[9]
        }
        dataResponse.push(obj)
    })
    if (result.rows) {
        response = { status: 200, value: dataResponse }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}

exports.getAllMemberDetails = async (req, res) => {
    let conn
    let response;
    var dataResponse = []

    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }

    sql = `Select * from member`
    let result = await conn.execute(sql);
    // console.log(result);
    result.rows.map(x => {
        var obj = {
            id: x[0],
            firstname: x[1],
            lastname: x[2],
            type: x[3],
            phone: x[4],
            homemail: x[5],
            campusmail: x[6],
            generatedate: x[7],
            noticedate: x[8],
            enddate: x[9],
            employeeid: x[10]

        }
        dataResponse.push(obj)
    })
    if (result.rows) {
        response = { status: 200, value: dataResponse }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}
exports.getAllVisitorDetails = async (req, res) => {
    let conn
    let response;
    var dataResponse = []

    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }

    sql = `Select * from visitor`
    let result = await conn.execute(sql);
    // console.log(result);
    result.rows.map(x => {
        var obj = {
            id: x[0],
            CheckIn: x[1],
            CheckOut: x[2],
        }
        dataResponse.push(obj)
    })
    if (result.rows) {
        response = { status: 200, value: dataResponse }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}

exports.getAllBookDetails = async (req, res) => {
    let conn
    let response;
    var dataResponse = []

    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }

    sql = `Select * from inventory`
    let result = await conn.execute(sql);
    // console.log(result);
    result.rows.map(x => {
        var obj = {
            id: x[0],
            title: x[1],
            author: x[2],
            type: x[3],
            subject: x[4],
            description: x[5],

        }
        dataResponse.push(obj)
    })
    if (result.rows) {
        response = { status: 200, value: dataResponse }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}

exports.addNewBook = async (req, res) => {
    let conn
    let response;
    // console.log(req.body);
    let id = req.body.id;
    let title = req.body.title;
    let author = req.body.author;
    let type = req.body.Type
    let subject = req.body.subject;
    let description = req.body.description;
    data = [id, title, type, author, subject, description];
    try {
        let sql = `Insert into inventory values (:1,:2,:3,:4,:5,:6)`;
        conn = await oracledb.getConnection(config)
        // console.log('connection', data)
        result = conn.execute(sql, data);

    } catch (err) {
        console.log('Ouch!', err)
    } finally {
        if (conn) {
            await conn.commit();
            await conn.close();
        }
    }
    // console.log(req.body);
    // sql = `Insert into M USERID=:1 and password=:2`
    // let result = await conn.execute(sql, data);
    if (result) {
        response = { status: 200, value: result.metaData }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}
exports.getAllIssuedBookDetails = async (req, res) => {
    let conn
    let response;
    var dataResponse = []

    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }

    sql = `Select * from bookissued`
    let result = await conn.execute(sql);
    // console.log(result);
    result.rows.map(x => {
        var obj = {
            staffid: x[0],
            bookid: x[1],
            visitorid: x[2],
            booktitle: x[3],
            author: x[4],
            noofbooks: x[5],
            issueddate: x[6],
            noticedate: x[7],
            enddate: x[8],


        }
        dataResponse.push(obj)
    })
    if (result.rows) {
        response = { status: 200, value: dataResponse }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}
exports.issuedBooks = async (req, res) => {
    let conn
    let response;
    var dataResponse = []

    try {
        // let sql = `Insert into onlineuser values (:1,:2,:3)`;
        conn = await oracledb.getConnection(config)
        console.log('connection')
        // conn.executeMany(sql,data);

    } catch (err) {
        console.log('Ouch!', err)
    }

    sql = `select SUM(noofbooks) count,visitorid,issuedate from bookissued b GROUP BY visitorid,issuedate`
    let result = await conn.execute(sql);
    // console.log(result);
    result.rows.map(x => {
        var obj = {
            count: x[0],
            visitorid: x[1],
            issueddate: x[2]
        }
        dataResponse.push(obj)
    })
    if (result.rows) {
        response = { status: 200, value: dataResponse }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}
exports.addIssuedBook = async (req, res) => {
    let conn
    let response;
    console.log(req.body);
    let staffid = req.body.staffid;
    let bookid = req.body.bookid;
    let visitorid = req.body.visitorid;
    let title = req.body.title
    let author = req.body.author;
    let noofbook = Number(req.body.noofbook);
    let generatedate = date.format(new Date(req.body.issuedate), 'DD-MMM-YY'); // TO_DATE('2021-11-20T06:00:00.000Z','dd-MON-yyyy')
    let noticedate = date.format(new Date(req.body.NoticeDate), 'DD-MMM-YY');
    let endate = date.format(new Date(req.body.EndDate), 'DD-MMM-YY');
    let employeeid = req.body.Employeeid;
    data = [staffid, bookid, visitorid, title, author, noofbook, generatedate, noticedate, endate];
    try {
        let sql = `Insert into bookissued values (:1,:2,:3,:4,:5,:6,:7,:8,:9)`;
        conn = await oracledb.getConnection(config)
        // console.log('connection', data)
        result = conn.execute(sql, data);

    } catch (err) {
        console.log('Ouch!', err)
    } finally {
        if (conn) {
            await conn.commit();
            await conn.close();
        }
    }
    console.log(req.body);
    // sql = `Insert into M USERID=:1 and password=:2`
    // let result = await conn.execute(sql, data);
    if (result) {
        response = { status: 200, value: result.metaData }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}

exports.updateMember = async (req, res) => {
    let conn
    let response;
    console.log(req.body);
    let id = req.body.id;
    let fname = req.body.firstName;
    let lname = req.body.LastName;
    let type = 'Student'
    let phone = Number(req.body.Phone);
    let homemail = req.body.Homemail;
    let campusmail = req.body.Campusmail;
    let generatedate = date.format(new Date(req.body.gernerateDate), 'DD-MMM-YY'); // TO_DATE('2021-11-20T06:00:00.000Z','dd-MON-yyyy')
    let noticedate = date.format(new Date(req.body.NoticeDate), 'DD-MMM-YY');
    let endate = date.format(new Date(req.body.enddate), 'DD-MMM-YY');
    let employeeid = req.body.Employeeid;
    data = [endate,id];
    try {
        let sql = `Update member set ENDDATE=:1 where MEMBERID=:2`;
        conn = await oracledb.getConnection(config)
        // console.log('connection', data)
        result = conn.execute(sql, data);

    } catch (err) {
        console.log('Ouch!', err)
    } finally {
        if (conn) {
            await conn.commit();
            await conn.close();
        }
    }
    console.log(req.body);
    // sql = `Insert into M USERID=:1 and password=:2`
    // let result = await conn.execute(sql, data);
    if (result) {
        response = { status: 200, value: result.metaData }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}
exports.deleteIssuedBook = async (req, res) => {
    let conn
    let response;
    console.log(req.body);
    let id = req.body.staffid;
    let bookid = req.body.bookid;
    let visitorid = req.body.visitorid;
    let no = Number(req.body.noofbooks);
    let title = req.body.booktitle;
    let author = req.body.author;
    let generatedate = date.format(new Date(req.body.issueddate), 'DD-MMM-YY'); // TO_DATE('2021-11-20T06:00:00.000Z','dd-MON-yyyy')
    let noticedate = date.format(new Date(req.body.noticedate), 'DD-MMM-YY');
    let endate = date.format(new Date(req.body.enddate), 'DD-MMM-YY');
    data = [generatedate,bookid,visitorid];
    try {
        let sql = `delete from bookissued where issuedate=:1 AND Bookid=:2 AND VisitorId=:3`;
        conn = await oracledb.getConnection(config)
        // console.log('connection', data)
        result = conn.execute(sql, data);

    } catch (err) {
        console.log('Ouch!', err)
    } finally {
        if (conn) {
            await conn.commit();
            await conn.close();
        }
    }
    console.log(req.body);
    // sql = `Insert into M USERID=:1 and password=:2`
    // let result = await conn.execute(sql, data);
    if (result) {
        response = { status: 200, value: result.metaData }
    }
    else {
        response = { status: 300, value: 'error' }
    }
    return res.send(response);
}