const baseApi = 'rest.bandsintown.com';

// Search Box Validation 
const isSearchEntryValid = (searchText) => searchText !== undefined && searchText.length > 0;

// Get Artist Data
const getArtistHtml = (artist) => `
<div class="row">
    <div class="col-md-4 mb-2">
        <a href="./results.html?artist=${artist.name}" data-toggle="tooltip" title="Click Here to show artist events">
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

// Api Call artists
const getArtistsURL = (searchText) => `https://${baseApi}/artists/${searchText}?app_id=123`;

// App Call for events
const getEventsURL = (artistName, eventType = 'all') => `https://${baseApi}/artists/${artistName}/events?app_id=123&date=${eventType}`;

// Check Artist 
const artistExist = (artist) => artist !== undefined && artist !== '';

//Getting query param
const getQueryParams = () => (window.location.search.substring(1) || '').split('&');

//Is artist query param provided
const isArtistProvided = (allqueryParams) => allqueryParams[0].toLowerCase().includes('artist');

//extract artistName
const extractArtistName = (artistQueryParam) => artistQueryParam.split('=')[1] || '';

// Show Total Number of events
const getEventsSummary = (count, eventType = 'all') => `
<div class="row">
    <div class="col-md-12">
        <p>${count} ${eventType} Events</p>
    </div>
</div>
`;

const getEventCards = (event) => `
    <div class="col-md-4 mb-3">
        <div class="card">
            <div class="card-body">
                <h5>EVENT DETAILS </h5>
                <hr>
                <div class="row no-wrap">
                    <div class="col-xs-6 col-sm-6 col-md-6 ">
                        <p><strong> Country</strong></p>
                        <p>${event.venue.country}</p>

                        <p> <strong> Venue</strong></p>
                        <p>${event.venue.name}</p>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <p><strong> City</strong></p>
                        <p>${event.venue.city}</p>

                        <p> <strong> Date</strong></p>
                        <p>${new Date(event.datetime).toDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

//setting the innerHTML of artist section on index.html
const setArtistTileSection = (innerHtml) => document.getElementById('artistTileSection').innerHTML = innerHtml;

//setting the innerHTML of result status section on index.html
const setResultStatusSection = (innerHtml) => document.getElementById('resultsStatus').innerHTML = innerHtml;

//setting the innerHTML of events container section on results.html
const setEventsContainerSection = (innerHtml) => document.getElementById('eventsContainer').innerHTML = innerHtml;

//Checking the validity of events fetched via API Call
const eventsExist = (events) => events !== undefined && events.length > 0;

export {
    isSearchEntryValid,
    artistExist,
    getArtistsURL,
    getStrongTag,
    getArtistHtml,
    setArtistTileSection,
    setResultStatusSection,

    //results.html exports starts from here on
    getEventsURL,
    getQueryParams,
    isArtistProvided,
    extractArtistName,
    getEventsSummary,
    getEventCards,
    setEventsContainerSection,
    eventsExist
}