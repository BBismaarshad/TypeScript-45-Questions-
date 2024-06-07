interface Album {
  artist: string;
  title: string;
  tracks?: number; // Optional property for the number of tracks
}

// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): Album {
  let album: Album = { artist, title };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}

// Create three album objects using the make_album function
let album1 = make_album( "Tahir Jehanzaib","Sanam")
let album2 = make_album("Rahat Fateh Ali Khan","charkha ");
let album3 = make_album("Nusrat Fateh A li Khan","Devotioal songs");

// Print each album object to show that it stores the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

// Create an album object with the number of tracks specified
let album4 = make_album("Atif Aslam", "Jal pari", 8);

// Print the album object with the number of tracks
console.log(album4);


