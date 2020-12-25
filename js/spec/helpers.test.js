import {
    isSearchEntryValid,
    getArtistHtml,
    getStrongTag,
    getArtistsURL,
    getEventsURL,
    artistExist,
    getEventCards,
    getEventsSummary
} from '../helpers';

const mockArtistData = `
<div class="row">
    <div class="col-md-4 mb-2">
        <a href="./results.html?artist=mockArtist" data-toggle="tooltip" title="Click Here to show artist events">
            <div class="card">
                <div class="card-body ">
                    <div class="row  ">
                        <div class="col-sm-5 col-md-5 col-lg-4 text-sm-center">
                            <img src="mockThumbnail" class="artist-img d-block mx-auto mx-md-0" alt="">
                        </div>
                        <div class="col-sm-7 col-md-7 col-lg-8 artist-des ">
                            <h5>mockArtist</h5>
                            <p>mockFbUrl</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
`;


// Search button test case
describe('isSearchEntryValid', () => {
    it('should be defined', () => {
        expect(isSearchEntryValid).toBeDefined();
    });

    it('should return true with valid params', () => {
        expect(isSearchEntryValid('abc')).toBe(true);
    });

    it('should return false with invalid params', () => {
        expect(isSearchEntryValid()).toBe(false);
    });

    //test more (edge) use cases such as special characters....
});

// Get Artist test case
describe('getArtistHtml', () => {
    it('should be defined', () => {
        expect(getArtistHtml).toBeDefined();
    });
    it('should return expected mock data', () => {
        //Mocking API Response object
        const artistParam = {
            name: 'mockArtist',
            thumb_url: 'mockThumbnail',
            facebook_page_url: 'mockFbUrl'
        };

        expect(getArtistHtml(artistParam)).toBe(mockArtistData);
    });
});

// Artist found test case
describe('getStrongTag', () => {
    it('should be defined', () => {
        expect(getStrongTag).toBeDefined();
    });

    it('should return expected mock data', () => {
        expect(getStrongTag('ExampleText')).toBe('<strong>ExampleText</strong>');
    });
});

// API Call for Artist test case
describe('getArtistsURL', () => {
    it('should be defined', () => {
        expect(getArtistsURL).toBeDefined();
    });

    it('should return expected mock data', () => {
        expect(getArtistsURL('ExampleArtist')).toBe('https://rest.bandsintown.com/artists/ExampleArtist?app_id=123');
    });
});

// API Call for events test case
describe('getEventsURL', () => {
    it('should be defined', () => {
        expect(getEventsURL).toBeDefined();
    });

    it('should return expected mock data', () => {
        expect(getEventsURL('ExampleArtist')).toBe('https://rest.bandsintown.com/artists/ExampleArtist/events?app_id=123&date=all');
    });

    it('should return a url with the expected mock eventType', () => {
        expect(getEventsURL('ExampleArtist', 'upcoming')).toBe('https://rest.bandsintown.com/artists/ExampleArtist/events?app_id=123&date=upcoming');
    });
});


// Artist exist test case
describe('artistExist', () => {
    it('should be defined', () => {
        expect(artistExist).toBeDefined();
    });

    it('should return expected mock data', () => {
        expect(artistExist('ExampleArtistExist')).toBe(true);
    });

    it('should return expected value false if an invalid artists is passed in', () => {
        expect(artistExist()).toBe(false);
    });
});


// Event Cards Test Case
const mockEventCardsData = `
    <div class="col-md-4 mb-3">
        <div class="card">
            <div class="card-body">
                <h5>EVENT DETAILS </h5>
                <hr>
                <div class="row no-wrap">
                    <div class="col-xs-6 col-sm-6 col-md-6 ">
                        <p><strong> Country</strong></p>
                        <p>mockCountry</p>

                        <p> <strong> Venue</strong></p>
                        <p>mockEventName</p>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <p><strong> City</strong></p>
                        <p>mockCity</p>

                        <p> <strong> Date</strong></p>
                        <p>Thu Aug 15 2013</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

// Get Events Card test case
describe('getEventCards', () => {
    it('should be defined', () => {
        expect(getEventCards).toBeDefined();
    });

    it('should return expected mock data', () => {

        const eventsParam = {
            venue: {
                country: 'mockCountry',
                name: 'mockEventName',
                city: 'mockCity'
            },
            datetime: '2013-08-15T12:00:00'
        };
        expect(getEventCards(eventsParam)).toBe(mockEventCardsData);
    });
});


// Show Total Number of events Test Case
const mockGetEventSummary = `
<div class="row">
    <div class="col-md-12">
        <p>mockCount mockEventType Events</p>
    </div>
</div>
`

// Show Total Number of events Test Case
describe('getEventsSummary', () => {
    it('should be defined', () => {
        expect(getEventsSummary).toBeDefined();
    });

    it('should return expected mock data', () => {
        expect(getEventsSummary('mockCount', 'mockEventType')).toBe(mockGetEventSummary);
    });
});