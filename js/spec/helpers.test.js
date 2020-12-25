import { isSearchEntryValid, getArtistHtml, getStrongTag, getArtistsURL } from '../helpers';

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

    //test more use cases such as special characters....
});

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

describe('getStrongTag', () => {
    it('should be defined', () => {
        expect(getStrongTag).toBeDefined();
    });

    it('should return expected mock data', () => {
        expect(getStrongTag('ExampleText')).toBe('<strong>ExampleText</strong>');
    });
});

describe('getArtistsURL', () => {
    it('should be defined', () => {
        expect(getArtistsURL).toBeDefined();
    });

    it('should return expected mock data', () => {
        expect(getArtistsURL('ExampleArtist')).toBe('https://rest.bandsintown.com/artists/ExampleArtist?app_id=123');
    });
});