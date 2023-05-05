import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, orderBy, query } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    const colRef = collection(db, 'posts');
    const q = query(colRef, orderBy('timestamp', 'desc'));

    useEffect(() => {
        onSnapshot(q, snapShot => {
            setPosts(snapShot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data(),
                };
            }));
        })
    }, []);

    const sendPost = e => {
        e.preventDefault();
        addDoc(colRef, {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: serverTimestamp()
        });
        setInput("");
    };

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={event => setInput(event.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed___inputOptions'>
                    <InputOption Icon={ImageIcon} title="Photo" color="#70bff9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write atricle" color="#7fc15e" />
                </div>
            </div>

            <FlipMove>
                {
                    posts.map(({ id, data: { name, description, photoUrl, message } }) =>
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    )
                }
            </FlipMove>
        </div>
    )
}

export default Feed;