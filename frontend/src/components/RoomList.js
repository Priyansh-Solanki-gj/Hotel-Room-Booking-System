import { useEffect, useState } from 'react';
import { api } from '../services/api';

function RoomList() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        api.get('/rooms')
            .then((res) => setRooms(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Available Rooms</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room._id} className="border p-2 mb-2">
                        <h3>{room.roomNumber} - {room.type}</h3>
                        <p>Price: ${room.price}</p>
                        <p>Status: {room.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RoomList;
