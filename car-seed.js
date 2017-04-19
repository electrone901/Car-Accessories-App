const db = require('./models').sequelize;
const Post = require('./models').Post;

db.sync({force: true})
.then((data) => Post.bulkCreate(
	[
  {
  	title: "Abarth 205",
    image: "http://www.freeiconspng.com/uploads/2nd-2012-in-bmw-m6-tags-bmw-coupe-featured-m6-background-color-20.png",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "new",
    price: "20, 300",
    phone: "646 360 0434",
    year: "2012",
    brand: "Abarth",
    location: "NYC",
    payments_accepted: "Paypal"
  },
  {
  	title: "Abarth 205",
    image: "http://exclusivecar.info/wp-content/uploads/Best-Sports-Cars-2017-1.jpg",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "Used",
    price: "23000",
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
    price: "30000",
    phone: "546 360 0434",
    year: "2010",
    brand: "Porsche",
    location: "PA",
    payments_accepted: "Cash only"
  },
  {
  	title: "378 GT Zagato",
    image: "http://exclusivecar.info/wp-content/uploads/Best-Sports-Cars-2017-1.jpg",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "new",
    price: "33,000",
    phone: "676 360 0434",
    year: "2011",
    brand: "Abarth",
    location: "NJ",
    payments_accepted: "Credit card"
  },

	{
  	title: "Spider (916)",
    image: "http://exclusivecar.info/wp-content/uploads/Best-Sports-Cars-2017-1.jpg",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "Semi-new",
    price: "30000",
    phone: "546 360 0434",
    year: "2010",
    brand: "NSX",
    location: "PA",
    payments_accepted: "Cash only"
	  },	

	{
  	title: "Hussarya",
    image: "http://exclusivecar.info/wp-content/uploads/Best-Sports-Cars-2017-1.jpg",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "Semi-new",
    price: "30000",
    phone: "546 360 0434",
    year: "2010",
    brand: "Porsche",
    location: "PA",
    payments_accepted: "Cash only"
	  },	
	{
  	title: "Porsche 356B",
    image: "http://car-pictures.cars.com/images/?IMG=USC60LGC051A021001.jpg&HEIGHT=600",
    body: "The A Isn't for Awesome But It Should Be",
    author: "lui",
    tags: "Semi-new",
    price: "30000",
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
	    price: "30000",
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
	    price: "30000",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	{
	  	title: "Atlantic",
	    image: "http://buyersguide.caranddriver.com/media/assets/submodel/280_6989.jpg",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "30000",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	{
	  	title: "Porsche 356B",
	    image: "http://exclusivecar.info/wp-content/uploads/Best-Sports-Cars-2017-1.jpg",
	    body: "The A Isn't for Awesome But It Should Be",
	    author: "lui",
	    tags: "Semi-new",
	    price: "30000",
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
	    price: "30000",
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
	    price: "30000",
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
	    price: "30000",
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
	    price: "30000",
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
	    price: "30000",
	    phone: "546 360 0434",
	    year: "2010",
	    brand: "Porsche",
	    location: "PA",
	    payments_accepted: "Cash only"
	  },
	  ] 
))
.catch((err) => console.log(err));

