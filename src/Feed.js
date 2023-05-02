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
import firebase from 'firebase/compat/app';


function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapShot => {
            setPosts(
                snapShot.docs.map(
                    doc => {
                        return {
                            id: doc.id,
                            data: doc.data,
                        };
                    }
                )
            );
        });
    }, []);

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Mahfujur Rahman',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
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

            {
                posts.map((post) => {
                    <Post />
                })
            }

            <Post name="Mahfujur Rahman"
                description="This is a test"
                message="Wow, this worked" />
        </div>
    )
}

export default Feed;