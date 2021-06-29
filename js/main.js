const iconCard = '<g id="id_card"><path d="M21,3H3A3,3,0,0,0,0,6V18a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V6A3,3,0,0,0,21,3Zm1,15a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V6A1,1,0,0,1,3,5H21a1,1,0,0,1,1,1Z"></path><path d="M10.38,11.8a3,3,0,1,0-4.76,0C3.91,13.08,4,14.68,4,16a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1C12,14.79,12.15,13.13,10.38,11.8ZM7,10a1,1,0,0,1,2,0A1,1,0,0,1,7,10ZM6,15a2,2,0,0,1,4,0Z"></path><path d="M19,7H14a1,1,0,0,0,0,2h5A1,1,0,0,0,19,7Z"></path><path d="M19,11H14a1,1,0,0,0,0,2h5A1,1,0,0,0,19,11Z"></path><path d="M19,15H14a1,1,0,0,0,0,2h5A1,1,0,0,0,19,15Z"></path></g>'
const iconUpdCSV = '<g id="work-business-solid-task-upload"><path d="M11.62842,13.82812l-.00232-.00158-.00391-.00391-.00158-.00232c-.01728-.017-.03992-.02313-.05835-.03808a.74308.74308,0,0,0-.17908-.11939l-.0072-.00213a.74014.74014,0,0,0-.1706-.03431.7644.7644,0,0,0-.10656-.021l-.00458-.00092-.00275.00055a.75131.75131,0,0,0-.19891.03894.7258.7258,0,0,0-.07788.01569l-.01062.00342a.744.744,0,0,0-.18213.122c-.017.014-.03809.01953-.05408.03521l-.00159.00232-.0039.00391-.00232.00158L8.61572,15.80078a.74994.74994,0,1,0,1.06836,1.05274l.66016-.6698v3.21179a.75.75,0,0,0,1.5,0v-3.2121l.66064.67011a.74994.74994,0,1,0,1.06836-1.05274Z" fill="none"></path><path d="M11,10.25A6.75,6.75,0,1,0,17.75,17,6.75769,6.75769,0,0,0,11,10.25Zm0,12A5.25,5.25,0,1,1,16.25,17,5.25605,5.25605,0,0,1,11,22.25Z" fill="none"></path><path d="M7,6h8a.99974.99974,0,0,0,1-1V1a.99974.99974,0,0,0-1-1H7A.99974.99974,0,0,0,6,1V5A.99974.99974,0,0,0,7,6ZM8,2h6V4H8Z"></path><path d="M19,2H17.5a.5.5,0,0,0-.5.5V5a2,2,0,0,1-2,2H7A2,2,0,0,1,5,5V2.5A.5.5,0,0,0,4.5,2H3A3,3,0,0,0,0,5V27a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM11,23.75A6.75,6.75,0,1,1,17.75,17,6.75769,6.75769,0,0,1,11,23.75Z"></path><path d="M11,11.75A5.25,5.25,0,1,0,16.25,17,5.25605,5.25605,0,0,0,11,11.75Zm2.56543,5.11133a.7498.7498,0,0,1-1.06055-.00781l-.66064-.67011v3.2121a.75.75,0,0,1-1.5,0V16.18372l-.66016.6698a.74994.74994,0,0,1-1.06836-1.05274l1.94434-1.97266.00232-.00158.0039-.00391.00159-.00232c.016-.01568.03705-.02124.05408-.03521a.744.744,0,0,1,.18213-.122l.01062-.00342a.7258.7258,0,0,1,.07788-.01569.75131.75131,0,0,1,.19891-.03894l.00275-.00055.00458.00092a.7644.7644,0,0,1,.10656.021.74014.74014,0,0,1,.1706.03431l.0072.00213a.74308.74308,0,0,1,.17908.11939c.01843.015.04107.02111.05835.03808l.00158.00232.00391.00391.00232.00158,1.94482,1.97266A.75019.75019,0,0,1,13.56543,16.86133Z"></path></g>'


miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'カード登録',
        svgIcon: iconCard, 
        positionPriority: 1,
        onClick: async () => {

			await miro.board.ui.openModal('createsticker.html', { width: 500, height: 500 });
			

        },
      },
      toolbar: {
        title: '勤怠CSVｱｯﾌﾟﾛｰﾄﾞ',
        toolbarSvgIcon: iconUpdCSV, 
        librarySvgIcon: iconUpdCSV,
        positionPriority: 1,
        onClick: async () => {

			await miro.board.ui.openModal('uploadcsv.html', { width: 200, height: 200 });

		}
	  }
	}
  })  
})

