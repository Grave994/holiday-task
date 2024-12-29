// import React, { useState } from 'react';
// import { Modal, Box, Button, Typography, Container } from '@mui/material';
// import TeacherRegister from '../components/Teacher/TeacherRegister';
// import StudentRegister from '../components/Student/StudentRegister';

// function Register() {
//     const [open, setOpen] = useState(true); 
//     const [modalType, setModalType] = useState(""); 

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleModalType = (type) => {
//         setModalType(type);
//     };

//     return (
//         <Container>
//             <Modal open={open} onClose={handleClose}>
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         bgcolor: 'background.paper',
//                         padding: 4,
//                         borderRadius: 2,
//                         boxShadow: 24,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Typography variant="h6" gutterBottom>
//                         Please select your role
//                     </Typography>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleModalType('teacher')}
//                         sx={{ marginBottom: 2 }}
//                     >
//                         Teacher
//                     </Button>
//                     <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={() => handleModalType('student')}
//                     >
//                         Student
//                     </Button>
//                 </Box>
//             </Modal>

//             {modalType === 'teacher' && <TeacherRegister />}
//             {modalType === 'student' && <StudentRegister />}
//         </Container>
//     );
// }

// export default Register;


import React, { useState } from 'react';
import { Modal, Box, Button, Typography, Container } from '@mui/material';
import TeacherRegister from '../components/Teacher/TeacherRegister';
import StudentRegister from '../components/Student/StudentRegister';

function Register() {
    const [open, setOpen] = useState(true); 
    const [modalType, setModalType] = useState(""); 

    const handleClose = () => {
        setOpen(false);
    };

    const handleModalType = (type) => {
        setModalType(type);
        handleClose(); // Modalı bağlama funksiyasını buraya əlavə edirik
    };

    return (
        <Container>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Please select your role
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleModalType('teacher')} // Handle teacher click
                        sx={{ marginBottom: 2 }}
                    >
                        Teacher
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleModalType('student')} // Handle student click
                    >
                        Student
                    </Button>
                </Box>
            </Modal>

            {modalType === 'teacher' && <TeacherRegister />}
            {modalType === 'student' && <StudentRegister />}
        </Container>
    );
}

export default Register;
