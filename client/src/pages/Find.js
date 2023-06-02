import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from "styled-components"

const StyledContainer = styled.section
`
  font-family: Tahoma;
  
`;

const StyledTable = styled.table
`
border: 1px solid;
border-collapse: collapse;
margin: 0 auto;
width: 100%;
`;

const StyledHead = styled.th
`
border: 1px solid;
padding: 15px;
`;

const StyledData = styled.td
`
border: 1px solid;
text-align: center;
verrtical-aign: middle;
padding: 15px;
`;

const init = {
    "first_name": '',
    "last_name": '',
    "phone_number": ''
}





function Find() {
    const[data, setData] = useState(init)
    const[entries, setEntries] = useState([])
    const[ls, setLs] = useState([]);
    
    const handleChange = (event, field) => {
        event.preventDefault();
        setData({...data ,
            [field]: event.target.value });
    }

    const filter = () => {
        setLs(entries.filter((entry) => {
            const first = `^${data.first_name}`
            const last = `^${data.last_name}`
            const phone = `^${data.phone_number}`
            const re_one = new RegExp(first, 'i')
            const re_two = new RegExp(last, 'i')
            const re_three = new RegExp(phone, 'i')
            if(data.first_name.length > 0 && data.last_name.length == 0 && data.phone_number.length == 0) {
            return (
                re_one.test(entry.first_name) //|| re.test(entry.last_name) || re.test(entry.phone_number)
            )
        }
            else if(data.first_name.length == 0 && data.last_name.length > 0 && data.phone_number.length == 0) {
                return (
                re_two.test(entry.last_name)
                )
            }

            else if(data.first_name.length == 0 && data.last_name.length == 0 && data.phone_number.length > 0) {
                return (
                re_three.test(entry.phone_number)
                )
            }

            else {
                return entries
            }

        }))
    }
    

    const getEntries = () => {
        axios.get('/api/entries')
        .then((res) => {
            if(res.data) {
                setEntries(res.data)
                setLs(res.data)
            }
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        getEntries();
    }, [])
  return (
    <StyledContainer>
    <h1>Find Entry</h1>
    <p>Enter the any info for the entry you wanna find!</p>
    <br />
    <label for="fn">Search By First Name: </label>
    <input placeholder="John" id="fn" value={data.first_name} onChange={(e) => handleChange(e, "first_name")}></input>
    <label for="ln">Search By Last Name: </label>
    <input placeholder="Doe" id="ln" value={data.last_name} onChange={(e) => handleChange(e, "last_name")}></input>
    <label for="pn">Search By Phone Number: </label>
    <input placeholder="12345679" id="pn" value={data.phone_name} onChange={(e) => handleChange(e, "phone_number")}></input>
    <button onClick={filter}>Search</button>
    <br></br>
    <br></br>
    <StyledTable>
    <tr>
    <StyledHead>First Name</StyledHead>
    <StyledHead>Last Name</StyledHead>
    <StyledHead>Phone Number</StyledHead>
    </tr>
    {ls.map((entry) => {
        return(
        <tr key={entry._id}>
        <StyledData>{entry.first_name}</StyledData> 
        <StyledData>{entry.last_name}</StyledData>
        <StyledData>{entry.phone_number}</StyledData>
        </tr>
        )
    }
    )}
    </StyledTable>
    </StyledContainer>
  )
}

export default Find