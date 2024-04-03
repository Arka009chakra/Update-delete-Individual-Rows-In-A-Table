import react, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
function Delete()
{
    const { cemail } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3100/delete/${cemail}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log("Deleted successfully"))
        .catch(err => console.log('Error:', err));
    }, []);
    
    return (
        <div>
            Account Delete Successfully!!!
        </div>
    )
}

export default Delete;