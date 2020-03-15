function deleteArtist(){
    var button = event.target;
    var artistContainer = document.getElementById('container');
    var id = button.parentNode.parentNode.id;
    fetch ('/delete', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            id: id
        })
    }).then(function(response) {
        if (response.status == 200) {
            var id = button.parentNode.parentNode.id;
            var divToRemove = document.getElementById(id);
            artistContainer.removeChild(divToRemove);
        }
        else {
            console.log("response error");
        }
    }).catch(function(error) {
        log('Request failed', error)
    });
}


function showForm() {
    var form = document.getElementById("AddArtistForm");
    if (form.style.display == '' || form.style.display == 'none') {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
    document.getElementById('ArtistName').value = ""
    document.getElementById('Image url').value = ""
    document.getElementById('ArtistDescription').value = ""
}

function addArtist(artist, id) {
    var wrapper = document.getElementById("container");
    var div = document.createElement('div');
    div.setAttribute("id", id);
    div.setAttribute("class", "artistDiv");
    var artistName = artist.name;
    var imageURL = artist.image;
    var aboutArtist = artist.description;
    wrapper.appendChild(div);
    
    var imageDiv = document.createElement('div');
    imageDiv.className = "ImageDiv";
    var image = document.createElement('img');
    image.src = imageURL;
    var descriptionDiv = document.createElement('div');
    descriptionDiv.className = "DescriptionDiv";
    var name = document.createElement('p');
    name.className = "title";
    name.textContent = artistName;
    var about = document.createElement('p');
    about.textContent = aboutArtist;
    var breakLine = document.createElement('br');
    imageDiv.appendChild(image);

    var buttonDiv = document.createElement('button');
    var button = document.createElement('button');
    button.textContent = "Delete";
    buttonDiv.className = "ButtonDiv";
    buttonDiv.appendChild(button);
    button.addEventListener("click", deleteArtist);
    descriptionDiv.appendChild(name);
    descriptionDiv.appendChild(breakLine);
    descriptionDiv.appendChild(about);
    div.appendChild(imageDiv);
    div.appendChild(buttonDiv);
    div.appendChild(descriptionDiv);
}