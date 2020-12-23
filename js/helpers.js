const baseApi = 'rest.bandsintown.com';


// Get Artist Data
const getArtistHtml = (artist) => `
<div class="row">
    <div class="col-md-4 mb-2">
        <a href="results.html">
            <div class="card">
                <div class="card-body ">
                    <div class="row  ">
                        <div class="col-sm-5 col-md-5 col-lg-4 text-sm-center">
                            <img src="${artist.thumb_url}" class="artist-img d-block mx-auto mx-md-0" alt="">
                        </div>
                        <div class="col-sm-7 col-md-7 col-lg-8 artist-des ">

                            <h5>${artist.name}</h5>
                            <p>${artist.facebook_page_url ? artist.facebook_page_url : 'No Facebook Page listed'}</p>

                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
`;

// Message 
const getStrongTag = (searchText) => `<strong>${searchText}</strong>`;

// Api Call
const getURL = (searchText) => `https://${baseApi}/artists/${searchText}?app_id=123`;

// Check Artist 
const artistExist = (artist) => artist && artist !== undefined && artist !== '';