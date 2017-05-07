export const fakeDB = {};
const users = {
    "users": [{
            "KeffwUIrItL": {
                "id": "KeffwUIrItL",
                "email": "fake@123.com",
                "name": "faker",
                "savedPlaylists": []
            }
        },
        {
            "dsaafdsfd": {
                "id": "dsaafdsfd",
                "email": "jake@123.com",
                "name": "baker",
                "savedPlaylists": [
                    "Kef04N5BuhCPwUIrItL"
                ]
            }
        },
        {
            "Kef04N5BuhCPwUIrItL": {
                "id": "Kef04N5BuhCPwUIrItL",
                "email": "Basake@123.com",
                "name": "Bsaaker",
                "activeRoom": "KeerJ1lt7q6QoJEZxRf",
                "savedPlaylists": [
                    "Kef04N5BuhCPwUIrItL",
                ]
            }
        }
    ]
}

const Rooms = {
    "rooms": [
        { 
            "KeerJ1lt7q6QoJEZxRf": {
                "id": "KeerJ1lt7q6QoJEZxRf",
                "roomDesc": "songs for Dog",
                "roomName": "Dog",
                "roomPlaylist": "Kef04N5BuhCPwUIrItL",
                'users': [
                    "KeffwUIrItL",
                    "dsaafdsfd",
                    "Kef04N5BfdjsaklfjdItfL"
                ]
            }
        },
        {
            "FDSt7q6QoJEZxRf": {
                "id": "FDSt7q6QoJEZxRf",
            "roomDesc": "Best Rooms here",
            "roomName": "Good ROom",
            "roomPlaylist": "Kef04N5BuhCPwUIrItL",
            'users': [
                "KeffwUIrItL",
                "dsaafdsfd",
                "Kef04N5BfdjsaklfjdItfL"
            ]}
        },
        {
           "KFLDKSoJEZxRf" : {
                "id": "KFLDKSoJEZxRf",
            "roomDesc": "Bad rooms for Dog",
            "roomName": "Bad ROoms",
            "roomPlaylist": "Kef04N5BuhCPwUIrItL",
            'users': [
                "KeffwUIrItL",
                "dsaafdsfd",
                "Kef04N5BfdjsaklfjdItfL"
            ]}
        }
    ]
}

// Playlists
const Playlists = {
    "playlists": [{
        "Kef04N5BuhCPwUIrItL": {
            "playlistId": "Kef04N5BuhCPwUIrItL",
            "playlistDesc": "Trogdorrr",
            "playlist": [{
                "title": "newerSongsForDog",
                "url": "www.youtube.com/newerSongsForDog",
                "thumbnail": "songthumburl",
                "songName": "Falcor the urinator"
            }, {
                "title": "twoTangosPlease",
                "url": "www.youtube.com/TAMid",
                "thumbnail": "songthumburl",
                "songName": "Mid or feed"
            }, {
                "title": "needWards",
                "url": "www.youtube.com/30gtoblink",
                "thumbnail": "songthumburl",
                "songName": "talesoflion"
            }]
        }
    }]
}