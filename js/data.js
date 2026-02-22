const CATEGORIES = [
  {
    id: "restaurants",
    label: "Restaurants",
    icon: '<i class="fa-solid fa-utensils"></i>',
    places: [
      {
        name: "Old Fish House",
        photo: "images/old-fish-house.jpg",
        price: "$$",
        description: "Lunch & dinner. Seafood and sushi with a great lake view and sunsets. Lots of outdoor seating under the cafe lights in Seagrove. Closest to house.",
        url: "https://www.theoldfishhouse.com"
      },
      {
        name: "Beachy Bean",
        photo: "images/beachy-bean.png",
        price: "$",
        description: "Breakfast & lunch. Coffee shop in Seagrove, shares outside space with Old Fish House. Closest to house.",
        url: "https://www.beachybean.com"
      },
      {
        name: "Mi Casita",
        photo: "images/MiCasitas.jpg",
        price: "$",
        description: "Lunch & dinner. A local favorite Mexican spot near the heart of Seaside with authentic food and unbeatable 30A prices.",
        url: "https://www.micasita30a.com"
      },
      {
        name: "Piscado Seafood & Rooftop Bar",
        photo: "images/pescado.webp",
        price: "$$",
        description: "Dinner (sometimes brunch & lunch), reservations needed. Fine dining and wines with a great rooftop view in Rosemary Beach. Romantic, great for a date or adult evening out.",
        url: "https://www.piscado30a.com"
      },
      {
        name: "Bud & Alley's",
        photo: "images/bud-alleys.jpg",
        price: "$$",
        description: "Lunch & dinner. Eclectic menu with two restaurants and a bar, one rooftop. Great views and sunsets in Seaside.",
        url: "https://budandalleys.com"
      },
      {
        name: "Shunk Gulley Oyster Bar",
        photo: "images/shunk-gulley.jpg",
        price: "$-$$",
        description: "Lunch & dinner. Seafood with live music on weekends, very lively and fun for families. Views of beach and water at Gulf Place.",
        url: "https://www.shunkgulley.com"
      },
      {
        name: "Basmati's Asian",
        photo: "images/Basmati.jpg",
        price: "$$",
        description: "Dinner, reservations needed. Fine Asian cuisine with a great setting and views of the lake. Ask to sit outside.",
        url: "https://www.basmatis.com"
      },
      {
        name: "Bruno's Pizza",
        photo: "images/brunos-pizza.webp",
        price: "$",
        description: "Lunch & dinner. Pizza buffet 11-2pm weekdays for about $13, music in evenings. Located in Watersound. Eat at the restaurant then walk out back into the private community.",
        url: "https://brunospizza30a.com"
      },
      {
        name: "George's at Alys Beach",
        photo: "images/georges.png",
        price: "$-$$",
        description: "Lunch & dinner (sometimes brunch). Seafood with covered outside seating, great for people watching in the beautiful Alys Beach area.",
        url: "https://www.georgesatalysbeach.com"
      },
      {
        name: "The Red Bar",
        photo: "images/red-bar.webp",
        price: "$$",
        description: "Funky Grayton Beach joint with live music, killer burgers, and a vibe you won't forget.",
        url: "https://theredbar.com"
      },
      {
        name: "Café Thirty-A",
        photo: "images/cafe-thirty-a.webp",
        price: "$$$",
        description: "Upscale coastal dining in Seagrove Beach with an incredible wine list.",
        url: "https://cafethirtya.com"
      },
      {
        name: "The Great Southern Café",
        photo: "images/great-southern-cafe.webp",
        price: "$",
        description: "Southern comfort food with a gourmet twist right in the heart of Seaside.",
        url: "https://thegreatsoutherncafe.com"
      },
      {
        name: "Stinky's Fish Camp",
        photo: "images/stinkys-fish-camp.png",
        price: "$$",
        description: "Laid-back seafood shack on the lake in Dune Allen, fried fish dreams come true.",
        url: "https://stinkysfishcamp.com"
      },
      {
        name: "Black Bear Coffee",
        photo: "images/black-bear.jpeg",
        price: "$-$$",
        description: "Coffee shop and breakfast, usually very busy. Locations in Seaside and Grayton.",
        url: "https://blackbearbread.com"
      },
      {
        name: "The Perfect Pig",
        photo: "images/perfect-pig.webp",
        price: "$",
        description: "Breakfast, lunch & dinner. Southern style with 2 locations in Seagrove.",
        url: "https://theperfectpig.com"
      },
      {
        name: "Crackings",
        photo: "images/crackings.jpg",
        price: "$",
        description: "Breakfast & lunch in Grayton.",
        url: "https://www.crackings.com"
      },
      {
        name: "Surfing Deer",
        photo: "images/surfing-deer.webp",
        price: "$$",
        description: "Fine dining in Seagrove.",
        url: "https://www.thesurfingdeer.com"
      },
      {
        name: "FOOW (Fish Out of Water)",
        photo: "images/foow.webp",
        price: "$-$$",
        description: "Southern style with great views in WaterColor.",
        url: "https://www.watercolorresort.com/dine/fish-out-of-water"
      },
      {
        name: "Red Fish Taco",
        photo: "images/red-fish-taco.jpeg",
        price: "$",
        description: "Bar food in Blue Mountain.",
        url: "https://www.redfishtaco.com"
      },
{
        name: "Aja 30A",
        photo: "images/aja.webp",
        price: "$-$$",
        description: "Dinner. Asian cuisine on 98 by Rosemary Beach.",
        url: "https://www.aja30a.com"
      },
      {
        name: "Blue Mountain Beach Creamery",
        photo: "images/blue-mtn-creamery.webp",
        price: "$",
        description: "Local ice cream in Blue Mountain.",
        url: "https://www.bluemountaincreamery.com"
      }
    ]
  },
  {
    id: "houses",
    label: "Houses to Stay In",
    icon: '<i class="fa-solid fa-house-chimney"></i>',
    places: [
      {
        name: "All Our Summers",
        photo: "images/AllOurSummers.jpg",
        description: "A beautiful house at the heart of all things to do on 30A. Significant amenities and close proximity to beaches, restaurants, and parks.",
        url: "https://www.best30abeachhouses.com/"
      },
      {
        name: "Airbnb,30A Rentals",
        photo: "images/Airbnb.jpg",
        description: "Browse unique homes, cottages, and condos along 30A on Airbnb.",
        url: "https://www.airbnb.com/rooms/860398291842084604"
      },
      {
        name: "VRBO,30A Rentals",
        photo: "images/VRBO.jpg",
        description: "Find vacation rental homes and beach houses along 30A on VRBO.",
        url: "https://www.vrbo.com/3338523"
      }
    ]
  },
  {
    id: "beaches",
    label: "Beaches",
    icon: '<i class="fa-solid fa-umbrella-beach"></i>',
    places: [
      {
        name: "Seagrove Beach",
        photo: "images/Seagrove-Beach.jpg",
        description: "A charming, laid-back stretch of sugar-white sand tucked between Seaside and Rosemary Beach.",
        url: "https://www.visitsouthwalton.com/seagrove-beach"
      },
      {
        name: "Seaside Beach",
        photo: "images/Seaside-Beach.jpg",
        description: "Iconic pastel beach pavilions and crystal-clear water in the famous town of Seaside.",
        url: "https://www.seasidefl.com"
      },
      {
        name: "Grayton Beach",
        photo: "images/grayton-Beach.webp",
        description: "Consistently ranked among America's best beaches,sugar-white sand and emerald water.",
        url: "https://www.visitsouthwalton.com/grayton-beach"
      },
      {
        name: "Rosemary Beach",
        photo: "images/Rosemary-Beach.jpg",
        description: "European-inspired boardwalks lead to a peaceful, pristine stretch of Gulf shore.",
        url: "https://www.rosemarybeach.com"
      },
      {
        name: "Blue Mountain Beach",
        photo: "images/Bluemountain-Beach.jpg",
        description: "The highest elevation on the Gulf Coast,gorgeous dunes and a chill local vibe.",
        url: "https://www.visitsouthwalton.com/blue-mountain-beach"
      },
      {
        name: "Inlet Beach",
        photo: "images/Inlet-Beach.jpg",
        description: "Quiet eastern end of 30A with wide sandy shores and fewer crowds.",
        url: "https://www.visitsouthwalton.com/inlet-beach"
      }
    ]
  },
  {
    id: "sites",
    label: "Sites",
    icon: '<i class="fa-solid fa-camera-retro"></i>',
    places: [
      {
        name: "Alys",
        photo: "images/Alys.jpg",
        description: "Stunning white-walled architecture inspired by Bermuda,a walkable work of art.",
        url: "https://www.alysbeach.com"
      },
      {
        name: "Seaside Town Square",
        photo: "images/SeasideTownSquare.jpg",
        description: "The filming location for The Truman Show,shop, eat, and soak in the charm.",
        url: "https://www.seasidefl.com"
      },
      {
        name: "Gulf Place",
        photo: "images/Gulf-Place.jpg",
        description: "Open-air town center with boutique shops, galleries, and Thursday farmer's markets.",
        url: "https://www.gulfplace.com"
      },
      {
        name: "The Hub 30A",
        photo: "images/TheHub.jpg",
        description: "Live music venue and community gathering spot with food trucks and good vibes.",
        url: "https://thehub30a.com"
      },
      {
        name: "Snorkel the Reefs",
        photo: "images/Snorkeling.webp",
        description: "Just off the coast at Inlet Beach is Cobia/Grouper Reef, and at Grayton Beach, Turtle Reef, a fish-shaped artificial reef. 970 feet from shore, accessible by paddle board or kayak (rentals required, don't take the ones from the house). Depth of 12-21 feet, perfect for snorkeling. Public beach with parking and restrooms. You can also take a paid tour with Dive30A.com.",
        url: "https://www.Dive30A.com"
      },
      {
        name: "Fonville Press",
        photo: "images/Fonville-Press.jpg",
        description: "Cozy Alys Beach coffee shop and bookstore, the perfect rainy-day hideout.",
        url: "https://fonvillepress.com"
      },
      {
        name: "Clay Garden Shop",
        photo: "images/ClayGardenShop.jpg",
        description: "Quaint little nursery with several different areas to meander through. Plants, pottery, and gifts in Seagrove Beach.",
        url: "https://clay30a.com"
      },
      {
        name: "Greenway Station",
        photo: "images/greenway-station.jpg",
        description: "Several shops and restaurants in a beautifully designed hub in the heart of Seagrove Beach.",
        url: "https://greenway30a.com"
      },
      {
        name: "30A Trading Company",
        photo: "images/30a-trading.jpg",
        description: "Beach souvenirs, apparel, and everything you need to remember your 30A trip.",
        url: "https://travel30a.com/listing/30a-trading-company/"
      },
      {
        name: "Seaside Shops & Restaurants",
        photo: "images/SeasideTownSquare.jpg",
        description: "Quaint area where you can grab the infamous Seaside sweatshirt, browse boutiques, and see the cute outside chapel.",
        url: "https://seasidefl.com/shopping/"
      },
      {
        name: "Walk or Bike Seaside & WaterColor",
        photo: "images/watercolor-neighborhood.jpg",
        description: "Stroll or ride through the charming neighborhoods of Seaside and WaterColor. WaterColor is a favorite with its tree-lined paths and coastal architecture.",
        url: "https://www.mywatercolorcommunity.com/279/Getting-Around-WaterColor"
      },
      {
        name: "Farmers Markets",
        photo: "images/farmers-market.webp",
        description: "Seaside's market is Saturday, Rosemary Beach is Sunday. Local produce, baked goods, honey, live music, and morning mimosas.",
        url: "https://seasidefl.com/shopping/seaside-farmers-market/"
      }
    ]
  },
  {
    id: "activities",
    label: "Activities",
    icon: '<i class="fa-solid fa-sun"></i>',
    places: [
      {
        name: "Beach Bonfire",
        photo: "images/beach-bonfire.jpg",
        description: "Permitted and set up beach bonfires with chairs and attendants. Cost is about $430.",
        url: "https://www.30ablaze.com"
      },
      {
        name: "Beach Yoga",
        photo: "images/beach-yoga.jpg",
        description: "Enjoy a private yoga class right on the beach. $150 and up.",
        url: "https://www.BeachYoga30a.com"
      },
      {
        name: "Sandcastle Lessons",
        photo: "images/sandcastle.jpg",
        description: "Learn how to build amazing sandcastles with a pro. $420 and up.",
        url: "https://www.beachsandsculptures.com"
      },
      {
        name: "Spa Day",
        photo: "images/spa-day.jpg",
        description: "Treat yourself to massages, facials, or sauna at Vivo Spa on 30A.",
        url: "https://www.vivospa30a.com"
      }
    ]
  },
  {
    id: "parks",
    label: "Parks",
    icon: '<i class="fa-solid fa-tree"></i>',
    places: [
      {
        name: "Grayton Beach State Park",
        photo: "images/GraytonBeachStatePark.jpg",
        description: "Hike coastal dune trails, paddle Western Lake, and camp steps from the Gulf.",
        url: "https://www.floridastateparks.org/parks-and-trails/grayton-beach-state-park"
      },
      {
        name: "Deer Lake State Park",
        photo: "images/DeerLakeStatePark.jpg",
        description: "Rare coastal dune lakes, boardwalk trails, and one of 30A's most scenic beach access points.",
        url: "https://www.floridastateparks.org/parks-and-trails/deer-lake-state-park"
      },
      {
        name: "Topsail Hill Preserve",
        photo: "images/TopsailHillPreserve.png",
        description: "3.2 miles of secluded beach, towering dunes, and old-growth coastal forest.",
        url: "https://www.floridastateparks.org/parks-and-trails/topsail-hill-preserve-state-park"
      },
      {
        name: "Point Washington State Forest",
        photo: "images/PointWashingtonStateForest.webp",
        description: "Over 15,000 acres of flatwoods and wetlands perfect for biking and trail running.",
        url: "https://www.fdacs.gov/Forest-Wildfire/Our-Forests/State-Forests/Point-Washington-State-Forest"
      },
      {
        name: "Camp Creek Lake Park",
        photo: "images/CampCreekLakePark.jpg",
        description: "Hidden gem with a rare coastal dune lake and peaceful nature trails near Inlet Beach.",
        url: "https://www.visitsouthwalton.com/inlet-beach"
      }
    ]
  }
];
