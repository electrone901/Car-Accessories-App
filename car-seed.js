const db = require('./models').sequelize;
const Post = require('./models').Post;

db.sync({force: false})
.then((data) => Post.bulkCreate(
	[
  {
  	title: "Abarth 205",
    image: "http://www.freeiconspng.com/uploads/2nd-2012-in-bmw-m6-tags-bmw-coupe-featured-m6-background-color-20.png",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "new",
    price: "18,995",
    phone: "646 360 0434",
    year: "2012",
    brand: "Abarth",
    location: "NYC",
    payments_accepted: "Paypal"
  },
  {
  	title: "Abarth 205",
    image: "https://imgd.aeplcdn.com/1056x594/cw/ec/21101/Ferrari-488-Right-Front-Three-Quarter-61997.jpg",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "Used",
    price: "31,980",
    phone: "846 360 0434",
    year: "2015",
    brand: "Toyota",
    location: "NJ",
    payments_accepted: "Paypal"
  },
  {
  	title: "Porsche 356B",
    image: "http://www.freeiconspng.com/uploads/2nd-2012-in-bmw-m6-tags-bmw-coupe-featured-m6-background-color-20.png",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "Semi-new",
    price: "29,000",
    phone: "546 360 0434",
    year: "2010",
    brand: "Porsche",
    location: "PA",
    payments_accepted: "Cash only"
  },
  {
  	title: "378 GT Zagato",
    image: "https://hymanltd.com/wp-content/uploads/2017/05/5924-640x480.jpg",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "new",
    price: "15,555",
    phone: "676 360 0434",
    year: "2011",
    brand: "Abarth",
    location: "NJ",
    payments_accepted: "Credit card"
  },

	{
  	title: "Spider (916)",
    image: "http://cdn2.carbuyer.co.uk/sites/carbuyer_d7/files/porsche-718-cayman-cutout.jpg",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "Semi-new",
    price: "31,900",
    phone: "546 360 0434",
    year: "2010",
    brand: "NSX",
    location: "PA",
    payments_accepted: "Cash only"
	  },	

	{
  	title: "Hussarya",
    image: "http://performancedrive.com.au/wp-content/uploads/2015/03/Bugatti-Veyron-Grand-Sport-Vitesse-La-Finale.jpg",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "Semi-new",
    price: "64,380",
    phone: "546 360 0434",
    year: "2010",
    brand: "Porsche",
    location: "PA",
    payments_accepted: "Cash only"
	  },	
	{
  	title: "Porsche 356B",
    image: "http://car-pictures.cars.com/images/?IMG=USC60LGC051A021001.jpg",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "Semi-new",
    price: "44,380",
    phone: "546 360 0434",
    year: "2010",
    brand: "Porsche",
    location: "PA",
    payments_accepted: "Cash only"
	  },
	{
	  	title: "Ecosse",
	    image: "http://motoraty-media.s3-us-west-2.amazonaws.com/news/wp-content/uploads/2015/01/BMW-i8.jpg",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "40,380",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	{
	  	title: "Aspid GT-21 Invictus",
	    image: "http://st.motortrend.com/uploads/sites/10/2016/06/2016-lamborghini-huracan-lp6104-coupe-angular-front.png",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "54,380",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	{
	  	title: "Atlantic",
	    image: "http://www.freeiconspng.com/uploads/2nd-2012-in-bmw-m6-tags-bmw-coupe-featured-m6-background-color-20.png",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "14,380",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	{
	  	title: "Porsche 356B",
	    image: "http://cdn2.carbuyer.co.uk/sites/carbuyer_d7/files/porsche-718-cayman-cutout.jpg",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "40,380",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },	
	{
	  	title: "Corvette",
	    image: "https://s-media-cache-ak0.pinimg.com/originals/09/e2/16/09e2164ed90b1d000b57210325319d8e.jpg",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "14,390",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "NY",
	    payments_accepted: "Cash only"
	  },
	{
	  	title: "Speedster",
	    image: "http://www.freeiconspng.com/uploads/2nd-2012-in-bmw-m6-tags-bmw-coupe-featured-m6-background-color-20.png",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "94,380",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	{
	  	title: "Porsche 356B",
	    image: "http://www.freeiconspng.com/uploads/name-blue-bmw-320i-2013-car-png-clipart-109-png-file-type-png-portable--1.png",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "74,380",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	{
	  	title: "GTB/GTS",
	    image: "http://frsbrzperformance.com/wp-content/uploads/2014/06/frs-release-series-10.jpg",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "43,380",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	{
	  	title: "Enzo Ferrari",
	    image: "http://s3.caradvice.com.au/wp-content/uploads/2013/12/Lamborghini-Huracan-LP610-4-1.jpg",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "22,375",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	  ] 
))
.catch((err) => console.log(err));

