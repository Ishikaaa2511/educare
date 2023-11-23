import React, {useState , useCallback} from 'react';
import { useNavigate } from 'react-router';
import '../styles/Videocon.css';
import { Form , FormGroup } from 'reactstrap';

const Videocon = () => {
    const [value, setValue] = useState();

    const navigate = useNavigate()

    const handleJoinRoom = useCallback(()=> {
        navigate(`/room/${value}`)
    }, [navigate, value]);
  return (
    <div > 
    <Form className='form'>
    <FormGroup className='form__group'>

    <input 
    className='w-50 mt-3'
    value={value}
    onChange={(e) => setValue(e.target.value)}
    type='text' 
    placeholder='Enter Room Code' />
    </FormGroup>
    <button className="btn w-40 mt-3" onClick={handleJoinRoom}>Join</button>
    </Form>
    </div>
  )
}

export default Videocon
