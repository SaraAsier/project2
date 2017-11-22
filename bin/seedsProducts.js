require('dotenv').config();

const mongoose = require('mongoose');

const Product = require('../models/Product');

const Review = require('../models/Review');

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connected to DB: " + process.env.DB_URL);
});

const products = [{
    name: "Drill",
    description: "Wireless drill,  20V",
    category: "Home",
    creator: "5a15e9a7d092da2d739c856f",
    isAvailable: true,
    photo: "http://laanonima.s3-website-us-east-1.amazonaws.com/web/images/productos/b/0000001000/1770.jpg",
  },
  {
    name: "Ladder",
    description: "Two meters metal ladder",
    category: "Home",
    creator: "5a15d63d6dfbab10d3b42757",
    isAvailable: true,
    photo: "https://gorillaladders.com/wp-content/uploads/2015/11/GLA-5X_Image-396x396.png",
  },
  {
    name: "Mower",
    description: "56-Volt Cordless Mower with 5.0Ah Battery and Charger Included",
    category: "Home",
    creator: "5a15d63d6dfbab10d3b42759",
    isAvailable: true,
    photo: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA02/MEDIA01/201310/03/019000957001860_1__640x640.jpg",
  },
  {
    name: "Ice Cream Maker",
    description: "With recipes book",
    category: "Home",
    creator: "5a15d63d6dfbab10d3b42758",
    isAvailable: true,
    photo: "http://ghk.h-cdn.co/assets/cm/15/12/640x640/55090f8fc0d3c-ghk-kitchenaid-kica-ice-cream-maker-xmqtjm-s2.jpg",
  },
  {
    name: "Compass saw ",
    description: "270 w",
    category: "Home",
    creator: "5a15d63d6dfbab10d3b4275a",
    isAvailable: true,
    photo: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA01/201309/25/019000406200295_1__640x640.jpg",
  },
  {
    name: "Swimming pool purifier",
    description: "With built-in timer",
    category: "Home",
    creator: "5a15e9a7d092da2d739c856f",
    isAvailable: true,
    photo: "https://www.poolaria.com/6829-thickbox_default/kit-filtracion-piscina-hayward.jpg",
  },
  {
    name: "Cradle",
    description: "Cradle with mattress",
    category: "Children",
    creator: "5a15d63d6dfbab10d3b42756",
    isAvailable: true,
    photo: "https://madreshoy.com/wp-content/uploads/2009/11/cuna_madera.jpg",
  },
  {
    name: "Double stroller",
    description: "For twins",
    category: "Children",
    creator: "5a15e9a7d092da2d739c856f",
    isAvailable: true,
    photo: "https://i5.walmartimages.com/asr/63440a87-e1df-4d70-85c0-fd2580616d30_1.8a4983808893cd1f3b737a55d015d2ad.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
  },
  {
    name: "Car seat",
    description: "From 0-2 years",
    category: "Children",
    creator: "5a15d63d6dfbab10d3b42759",
    isAvailable: true,
    photo: "https://target.scene7.com/is/image/Target/17273398?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Kids Motorcycle",
    description: "Red motorcycle, for 2-3 years",
    category: "Children",
    creator: "5a15e9a7d092da2d739c856f",
    isAvailable: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaaVN_4kXbd6AgXbNGLEAket9U3TcLrJAwyZvYzVHl3xapLC3",
  },
  {
    name: "Baby bouncer",
    description: "Great for naps",
    category: "Children",
    creator: "5a15d63d6dfbab10d3b4275a",
    isAvailable: true,
    photo: "https://us.bebemoda.co.uk/img/products/Charlie%20Crane/Levo/levo-grey-walnut-wooden-bouncer.jpg",
  },
  {
    name: "Baby monitor",
    description: "Video and sound monitor, AAA batteries",
    category: "Children",
    creator: "5a15abe600712b42dd6d5340",
    isAvailable: true,
    photo: "https://cnet3.cbsistatic.com/img/n5VsGtQXiyulpbylNIKy7yggblo=/770x433/2016/08/18/234c7105-b8bf-41f4-b28b-e4ddfc1c81d4/babymonitorcapsulephotos-4.jpg",
  },
  {
    name: "Camp tent",
    description: "Tipi tent for two people",
    category: "Sports",
    creator: "5a15e9a7d092da2d739c856f",
    isAvailable: true,
    photo: "https://www.columbus-outdoor.com/media/catalog/product/a/0/a08306_tipi_01_2__opt.jpg",
  },
  {
    name: "Skis + Binding",
    description: "Best for groomed terrain",
    category: "Sports",
    creator: "5a15e9a7d092da2d739c856f",
    isAvailable: true,
    photo: "https://cdn.mec.ca/medias/sys_master/high-res/high-res/8816792338462/5043778-NOC02.jpg",
  },
  {
    name: "Camping table and seats",
    description: "Portable Aluminum Camping Folding Table and 4 Stool Chairs",
    category: "Sports",
    creator: "5a15e9a7d092da2d739c856f",
    isAvailable: true,
    photo: "http://i.ebayimg.com/00/s/NDYwWDQ2MA==/z/N28AAOxyVLNSs-Qj/$_3.JPG?set_id=2",
  },
  {
    name: "Tennis equipment",
    description: "Two rackets and balls",
    category: "Sports",
    creator: "5a15d63d6dfbab10d3b42758",
    isAvailable: true,
    photo: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2477992.jpg",
  },
  {
    name: "Football nets",
    description: "Two nets for kids/beach",
    category: "Sports",
    creator: "5a15d63d6dfbab10d3b4275a",
    isAvailable: true,
    photo: "https://http2.mlstatic.com/D_Q_NP_902321-MLM20750006540_062016-Q.jpg",
  },
  {
    name: "Mountain bike",
    description: "For 5´5´ riders",
    category: "Sports",
    creator: "5a15abe600712b42dd6d5341",
    isAvailable: true,
    photo: "https://www.decathlon.co.uk/media/835/8351007/big_b648a593-2c5d-4e79-b0a8-a730fa69de3f.jpg",
  },
  {
    name: "Learning JavaScript",
    description: "Author: Carlos Azaustre",
    category: "Entertainment",
    creator: "5a15d63d6dfbab10d3b42756",
    isAvailable: true,
    photo: "https://s3.amazonaws.com/titlepages.leanpub.com/aprendiendo-javascript/hero?1458731712",
  },
  {
    name: "Harry Potter",
    description: "And the Order of the Phoenix",
    category: "Entertainment",
    creator: "5a15d63d6dfbab10d3b42757",
    isAvailable: true,
    photo: "https://s3.amazonaws.com/s3.plus.scholastic.com/uploads/cms/27/book/cover/496/HP_5_9ddeb27327.jpg",
  },
  {
    name: "Indian cooking",
    description: "by Suneeta Vaswani",
    category: "Entertainment",
    creator: "5a15d63d6dfbab10d3b42759",
    isAvailable: true,
    photo: "https://images-na.ssl-images-amazon.com/images/I/71hu5APlj5L.jpg",
  },
  {
    name: "The Godfather",
    description: "DVD collection",
    category: "Entertainment",
    creator: "5a15d63d6dfbab10d3b42758",
    isAvailable: true,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFVUEIk9AOqFkH6EA6YdeLmCPiJawIbeFYXZPcZQqwCMAI9l1Pg",
  },
  {
    name: "Divorce for Dummies",
    description: "Worked for me",
    category: "Entertainment",
    creator: "5a15d63d6dfbab10d3b4275a",
    isAvailable: true,
    photo: "https://images-na.ssl-images-amazon.com/images/I/51wWksCqTzL._SX258_BO1,204,203,200_.jpg",
  },
  {
    name: "Android for begginers",
    description: "Learn application development",
    category: "Entertainment",
    creator: "5a155b90d9e3d06a62c725d2",
    isAvailable: true,
    photo: "https://www.packtpub.com/sites/default/files/9781785883262.png",
  },
  {
    name: "Projector",
    description: "Supports Full HD",
    category: "Technology",
    creator: "5a15d63d6dfbab10d3b42756",
    isAvailable: true,
    photo: "https://mediaserver.goepson.com/ImConvServlet/imconv/1840e4a0c9ee5a19f3ac93ac14565f91a8302667/500Wx500H?use=productpictures&assetDescr=forhome-cat-h320-6040ub_384x256",
  },
  {
    name: "Tom Tom",
    description: "With Europe´s maps",
    category: "Technology",
    creator: "5a15d63d6dfbab10d3b42757",
    isAvailable: true,
    photo: "https://webassets2.tomtom.com/636283812831734303DC.png",
  },
  {
    name: "Polaroid camera",
    description: "Instant vintage camera",
    category: "Technology",
    creator: "5a15d63d6dfbab10d3b42759",
    isAvailable: true,
    photo: "http://is2.mzstatic.com/image/thumb/Purple127/v4/77/26/cc/7726ccb0-1a67-fa8e-86e8-100e27454b0a/source/1200x630bb.jpg",
  },
  {
    name: "Steady tripod",
    description: "Fits all professional cameras",
    category: "Technology",
    creator: "5a155b90d9e3d06a62c725d2",
    isAvailable: true,
    photo: "http://www.blogdelfotografo.com/wp-content/uploads/2016/11/Hama-Star-61.jpgg",
  },
  {
    name: "Portable DVD player",
    description: "With USB",
    category: "Technology",
    creator: "5a15d63d6dfbab10d3b4275a",
    isAvailable: true,
    photo: "https://images.philips.com/is/image/PhilipsConsumer/PD9030_37-IMS-en_US?$jpglarge$&wid=1250",
  },
  {
    name: "Nintendo console",
    description: "Nintendo NES released in 1985",
    category: "Technology",
    creator: "5a155b90d9e3d06a62c725d2",
    isAvailable: true,
    photo: "https://ichef.bbci.co.uk/news/624/cpsprodpb/D271/production/_93537835_nes.png",
  },

];

const reviews = [{
    senderId: "5a140a0bbf1ca743488bef90",
    senderName: "Sara",
    receiverId: "5a15a1e3be41d02261584f87",
    description: "Too flama",
    rating: 5
  },
  {
    senderId: "5a140a0bbf1ca743488bef91",
    senderName: "Asier",
    receiverId: "5a15a1e3be41d02261584f87",
    description: "Great but not top",
    rating: 4
  },
];

Review.create(reviews, (err, docs) => {
  if (err) {
    throw err;
  };

  docs.forEach((cel) => {
    console.log(cel.description);
  });
});


Product.create(products, (err, docs) => {
  if (err) {
    throw err;
  };

  docs.forEach((cel) => {
    console.log(cel.name);
  });
});



Product.collection.drop();
