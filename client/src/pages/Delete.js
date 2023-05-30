import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Delete() {
    const [num, setNum] = useState('');
    const [entries, setEntries] = useState([])
    const [status, setStatus] = useState('')

    const getEntries = () => {
        axios.get('/api/entries')
        .then((res) => {
            if(res.data) {
                setEntries(res.data)
            }
        }).catch((err) => console.log(err))
    }

    const handleChange = (event) => {
        setNum(event.target.value)
    }

    const onSubmit = () => {
        console.log(num)
        for(let i = 0; i < entries.length; i++) {
            if(String(entries[i].phone_number) == String(num)) {
                axios.delete(`/api/entries/${entries[i]._id}`)
                .then((res) => {
                    console.log("Deleted entry")
                    setStatus(`User: ${entries[i].first_name} ${entries[i].last_name} deleted.`)
                })
                .catch((err) => console.error(err))
                return;
            }
        }
        setStatus("Phone number not saved")
        return;
    }

    useEffect(() => {
        getEntries();
    }, [])
    
  return (
    <div>
    <h1>Delete Entry</h1>
    <p>Enter the phone number of the entry you want to delete below.</p>
    <form>
    <fieldset>
    <legend>Client Number</legend>
    <label for="num"> Enter Phone Number: </label>
    <input required placeholder="123456789" type="tel" id="num" value={num} onChange={handleChange}/>
    <button onClick={onSubmit}>Delete</button>
    </fieldset>
    </form>
    <p>{status}</p>
    </div>
  )
}

export default Delete