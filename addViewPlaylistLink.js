const links = document.querySelectorAll('ytd-grid-playlist-renderer');
const playlistBaseURL = 'https://www.youtube.com/playlist?list=';
const aElemQueryselector = 'a.ytd-grid-playlist-renderer';
const metaBlockQueryselector = 'ytd-video-meta-block';
const listQueryParam = '&list=';

links.forEach(function (link) {
	const a = link.querySelector(aElemQueryselector);
	const playlistURL = a.attributes.href.value;
	const playlistID = playlistURL.split(listQueryParam)[1];
	const playlistLink = document.createElement('p');
	playlistLink.innerHTML = '<a href="' + playlistBaseURL + playlistID + '">[View Playlist]</a>';
	const metaBlock = link.querySelector(metaBlockQueryselector);
	link.insertBefore(playlistLink, metaBlock);
});