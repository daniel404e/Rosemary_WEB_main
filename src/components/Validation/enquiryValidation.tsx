import * as yup from 'yup';

export const EnquiryValidation=yup.object({
    

    studentName:yup.string().min(5,"Enter minimum lenght 10").required("Enter Street Address"),
    fatherName:yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("Enter City"),
    mobileNumber:yup.number().typeError("Enter Number").positive("Positive Number").required("Enter Post Code"),
    otherDetail:yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("Enter country"),
    seekAdmisssion:yup.string().min(2,"Enter name").matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("Enter name"),
  

 
});

