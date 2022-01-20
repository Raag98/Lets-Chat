import React , { useState, useRef, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import axios from 'axios';

function Chats() {
    const history = useHistory();
    const { user } = useAuth();

    const [loading, setLoading] = useState(true);

    // console.log(user);

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');        
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
    }

    useEffect(() => {
        if(!user) {
            history.push('/');
            return;
        }

        // console.log("In useEffect");

        axios.get("https://api.chatengine.io/users/me", {
          headers: {
            "project-id": "554ba51b-60b0-4f0b-991f-a5b1a9055be7",
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL)
            .then((avatar) => {
                formdata.append("avatar", avatar, avatar.name);

                axios
                  .post("https://api.chatengine.io/users", formdata, {
                    headers: {
                      "private-key": "c8418496-4742-4881-9f21-0539767ebe00",
                    },
                  })
                  .then(() => setLoading(false))
                  .catch((error) => console.log(error));
            });
        });

    }, [user, history]);

    if(!user || loading) return 'Loading....';

    return (
      <div className="chats-page">
        <div className="nav-bar">
          <div className="logo-tab">Let's Chat</div>
          <div onClick={handleLogout} className="logout-tab">
            Logout
          </div>
        </div>

        <ChatEngine
          height="calc(100vh - 66px)"
          projectID="554ba51b-60b0-4f0b-991f-a5b1a9055be7"
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    );
}

export default Chats;
