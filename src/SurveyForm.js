import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import bg from './assets/people.avif';


const Form = styled.form`
background: rgba(20, 31, 60, 0.9);
font-size: 20px;
font-weight: 5px; 
color: aliceblue;
font: Roboto;
margin: auto;
padding: 40px;
width: 40%;
`
const Background = styled.div`
background: rgba(83,73,168, 0.7);
background : url(${bg});
opacity: 0.8;

`
const Button = styled.button`
    background-color: #0A4914;
    border-color:none
    border-radius: none;
    font-size: 16px;
    text-transform: Capitalize;
    width: 95%;
`

const Header = styled.header`
text-align:center;
font-weight: 10px;
font-size: 20px;
padding-bottom: 10px;
color: aliceblue;
`
const SurveyForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age:'',
      role:'',
      recommended:'',
      favFeature:'',
      improved:'',
      comments:'',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Background>
        <Header>
        <h1>freeCodeCamp Survey Form</h1>
        <i>Thank you for taking the time to help us improve the platform</i>
        </Header>
        
        <Form onSubmit={formik.handleSubmit}>
        
        <div>
        <label htmlFor="name">Name</label>
        <input className='input'
        id="name"
        type="text"
        placeholder='Enter your Name'
        {...formik.getFieldProps('name')}
        />
        
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
        </div>
      
        <div>
            <label htmlFor="email">Email Address</label>
            <input id="email" className='input' type="email" placeholder='Enter your Email'{...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
            ) : null}

        </div>
      
        <div>
                <label htmlFor="age">Age (optional)</label>
                <input id="age" className='input' type="number" placeholder='Age'{...formik.getFieldProps('age')}/>
        </div>


        <div>
                <label htmlFor='role'>Which option best describes your current role?</label>
                <select className='input' name="role" id="role" {...formik.getFieldProps('role')}>
                    <option>Select Current role</option>
                    <option>Student</option>
                    <option>Full time Job</option>
                    <option>Full time Learner</option>
                    <option>Prefer not to say</option>
                    <option>Others</option>
                </select>
        </div>

        <div>
            <label htmlFor='recommended'>Would you recommend freecodecamp to a friend?</label><br/>
            <input type='radio' name='recommended' id='definitely'{...formik.getFieldProps('recommended')}/>
            <label>Definitely</label><br/>
            <input type='radio'  name='recommended' id='maybe' {...formik.getFieldProps('recommended')}/> 
            <label>May be</label><br/>
            <input type='radio' name='recommended' id='notsure' {...formik.getFieldProps('recommended')}/>
            <label>Not sure</label>
               
        
        </div>

        <div>
            <label htmlFor='favFeature'>What is your favourite feature of freecodecamp?</label>
            <select  className='input' name='favFeature' id='favfeature' {...formik.getFieldProps('favFeature')}>
                <option>Select an option</option>
                <option>Challenges</option>
                <option>Projects</option>
                <option>Community</option>
                <option>Open Source</option>
            </select>

        </div>
        <div>
            <label htmlFor='improved'>What would you like to see improved?</label><br/>
            <input type="checkbox" name='improved' id=''placeholder='select an option' {...formik.getFieldProps('improved')}/>
            <label>Front-end projects</label><br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>Back-end Projects</label><br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>Data Visualization</label><br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>Challenges</label><br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>Open Source Community</label><br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>Gitter Help Rooms</label><br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>Videos</label><br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>City Meetups</label><br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>Wiki</label> <br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>Forum</label><br/>
            <input htmlFor="favFeature" type='checkbox' {...formik.getFieldProps('improved')}/>
            <label>Additional Courses</label> 
            
        </div>

        <div>
            <label htmlFor='comments'>Any comments or Suggestions?</label>
            <input className='input' type='textArea' placeholder='Enter comments here...' {...formik.getFieldProps('comments')}/>
        </div>

      <Button type="submit" >Submit</Button>
    </Form>
    </Background>
    
  );
};

export default SurveyForm;