// Maps id to User object
export const fakeDatabase = {
    users: {
        'KeffwUIrItL': {
            id: 'KeffwUIrItL',
            name: 'alice',
            email: 'alice@123.com',
        },
        'dsaafdsfd': {
            id: 'dsaafdsfd',
            name: 'bob',
            email: 'bob@123.com',
        },
    },
    rooms: {
        'fjdkasljdk': {
            id: 'fjdkasljdk',
            name: 'aliceRoom',
            description: 'this is a description',
            playlist: "vbbnmbm"
        },
        'popoiopki': {
            id: 'popoiopki',
            name: 'bobRossRoom',
            description: 'this is a description',
            playlist: "vbbnmbm"
        },
    },
    playlists: {
        'vbbnmbm': {
            id: 'vbbnmbm',
            name: 'playlist A',
            songs: [{
                    url: "song1",
                    title: "song1",
                    thumbnail: "song1"
                },
                {
                    url: "song2",
                    title: "song2",
                    thumbnail: "song2"
                }
            ],
        },
        'hjkhkhkh': {
            id: 'hjkhkhkh',
            name: 'playlist B',
            songs: [{
                    url: "song3",
                    title: "song3",
                    thumbnail: "song3"
                },
                {
                    url: "song4",
                    title: "song4",
                    thumbnail: "song4"
                }
            ]
        },
    }
};