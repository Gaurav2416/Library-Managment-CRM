var express = require('express');
var router = express.Router();
const controller= require('../public/controller')
router.post('/login',controller.login)
router.get('/getAllDependent',controller.getAllDependent)
router.get('/getAllStaffDetails',controller.getAllStaffDetails)
router.get('/guestDetails',controller.getAllGuestDetails)
router.get('/employeeDetails',controller.getAllEmployeeDetails)
router.get('/memberDetails',controller.getAllMemberDetails)
router.get('/visitorDetails',controller.getAllVisitorDetails)
router.post('/addMember',controller.addNewMember)
router.get('/bookDetails',controller.getAllBookDetails)
router.post('/addBook',controller.addNewBook)
router.get('/issuedbookDetails',controller.getAllIssuedBookDetails)
router.get('/countBooks',controller.issuedBooks)
router.post('/addIssuedBook',controller.addIssuedBook)
router.post('/updateMember',controller.updateMember)
router.post('/deleteIssuedBook',controller.deleteIssuedBook)
module.exports = router;
