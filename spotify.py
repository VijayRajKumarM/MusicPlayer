import json 
import spotipy 
import webbrowser 
import pymongo
from flask import Flask, request, jsonify 
app = Flask(__name__)
@app.route('/searchsong/<string:song>', methods=['POST','GET'])
def searchsong(song):
   #if request.method == 'POST':
   if(2+2==4):
       #data = request.json
       #song = data.get('songname')
       #song = "jailer"
       cnt = 0
       username = '3156iwh2shkvlohsrcn7xv74rxoy'
       clientID = '04924240c02b4ceca8e9953b2910f5cd'
       clientSecret = '0edc436d38cf41cb9dfb32562b3954bb'
       redirect_uri = 'http://localhost:3000/callback'
       oauth_object = spotipy.SpotifyOAuth(clientID, clientSecret, redirect_uri) 
       token_dict = oauth_object.get_access_token() 
       token = token_dict['access_token'] 
       print('token=',token)
       spotifyObject = spotipy.Spotify(auth=token) 
       user_name = spotifyObject.current_user() 
       print("yes")
       print(json.dumps(user_name, sort_keys=True, indent=4)) 
       while True: 
        #print("Welcome to the project, " + user_name['display_name']) 
        #print("0 - Exit the console") 
        #print("1 - Search for a Song") 
        user_input = 1
        if user_input == 1: 
            #search_song = input("Enter the song name: ") 
            search_song = song 
            results = spotifyObject.search(search_song, 1, 0, "track") 
            songs_dict = results['tracks'] 
            song_items = songs_dict['items'] 
            print("\n\n\n")
            cnt = 0
            for i in songs_dict.values():
                cnt+=1
                if(cnt==2):
                    break 
                else:
                    #print(i)
                    pass
            cnt = 0
            for i in song_items:
                cnt+=1
                if(cnt==2):
                    break 
                else:
                    #print(i)
                    pass
            print('\n\n\n')
            song = song_items[0]['external_urls']['spotify'] 
            print("\n\n\n")
            print(song_items[0]['album'])
            artist = song_items[0]['album']['artists'][0]['name']
            album = song_items[0]['album']['name']
            print("album=",song_items[0]['album']['name'])
            print("artist=",artist)
            songurl = song_items[0]['preview_url']
            song_id = song_items[0]['id']
            print("\n\nsong url less=",song)
            print("\n\nsong id=",song_id)
            print("\n\nsong url complete =",songurl)
            webbrowser.open(song) 
            print('Song has opened in your browser.') 
        elif user_input == 0: 
            print("Good Bye, Have a great day!") 
            break
        else: 
            print("Please enter valid user-input.")
        return jsonify({'trackid':songurl,'album':album,'artist':artist})
   else:
       return "Hello function 21"
if __name__ == '__main__':
    app.run(debug=True)