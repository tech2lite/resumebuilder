import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { ResumeContext } from './ResumeDataContext';
import { dataRef } from '../FirebaseConfig';

export default function SkillDetails() {

  const [skillText, setSkillText] = useState([])
  const [skillList, setskillList] = useState([])
  const skillInfo = useContext(ResumeContext)
  const SkillChangeHandler = (e) => {
    setSkillText(e.target.value)
  }
  const [itemExist, setitemExist] = useState(true)
  let currentUserAuthData = skillInfo.currentUserAuthData
  let retrievedInfo = skillInfo.skillsetsInformation
  const AddSkillHandler = (e) => {
    e.preventDefault()
    let itemExist = true;
    console.log(skillList)

    skillList?.map(skill => {
      if (skillText === skill.skillText) {
        setitemExist(false)
        itemExist = false
      } else {
        setitemExist(true)
        itemExist = true
      }
    })


    if (itemExist) {
      setskillList([...skillList, { skillText, id: uuid() }])
      e.target.reset()
    }
  }


  const handleDelete = (id) => {
    let filterDelete = skillList.filter(skill => skill.id !== id)
    setskillList(filterDelete)
  };
  const SaveSkillHandler = () => {
    let { uid } = currentUserAuthData;
    console.log(skillList)
    dataRef.ref(`userInfo/${uid}`).update({
      skillSet: skillList
    })
  }
  useEffect(() => {
    setskillList(retrievedInfo)
    setTimeout(() => {
      console.log(retrievedInfo)
    }, 1000);

  }, [retrievedInfo])

  return (
    <div className='skillsets'>
      <h2>SkillSets</h2>
      <form onSubmit={AddSkillHandler}>
        <TextField variant='outlined' name='skill' label="Skills" sx={{ width: 1 }} InputProps={{ endAdornment: <><Button type='submit' >&#43;</Button> <Button variant='contained' onClick={SaveSkillHandler}>Save</Button></> }} onChange={SkillChangeHandler} error={itemExist ? false : true} helperText={itemExist ? '' : 'Skill Already Exist'} />

      </form>
      <Stack direction="row" spacing={1} sx={{ marginTop: 1.5 }}>
        {skillList?.map((skills, index) => {
          console.log(skills)
          return (
            <Chip label={skills.skillText} variant="outlined" onDelete={() => handleDelete(skills.id)} key={index} />
          )
        })}
      </Stack>
    </div>
  )
}

