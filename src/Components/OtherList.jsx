import React from 'react';
import { useParams, Link } from 'react-router-dom';
// import { asset } from './assets/asset';
import './Other.css'
// import { asset } from './assets/asset';
const Special = [
    {
        name: 'honeymoon',
        head: 'Honeymoon Packages',
        // vdo: asset.honeymoonVid,
        places: [
            { title: "Maldives", p: "80,000k", btn: "checkout", class: 'honeymoon1', desc: "Romantic overwater villas and turquoise lagoons." },
            { title: "Santorini", p: "75,000k", btn: "checkout", class: 'honeymoon2', desc: "Charming white buildings, blue domes, and sunsets." },
            { title: "Paris", p: "90,000k", btn: "checkout", class: 'honeymoon3', desc: "City of Love with Eiffel Tower views and cafes." },
            { title: "Bali", p: "60,000k", btn: "checkout", class: 'honeymoon4', desc: "Jungle resorts, waterfalls, and beaches." },
            { title: "Swiss Alps", p: "1,20,000k", btn: "checkout", class: 'honeymoon5', desc: "Snowy villages, train rides, and cozy chalets." },

        ], inclusions: [
            "Flight Tickets",
            "3/4/5-Star Accommodation",
            "Daily Breakfast",
            "Airport Transfers",
            "Local Sightseeing"
        ], highlights: [
            "Romantic Candlelight Dinners",
            "Private Beach Villas",
            "Couples' Spa Sessions",
            "Sightseeing Cruises",
            "Professional Photography"
        ], packingTips: [
            "Swimwear & Flip-flops",
            "Sunscreen & Sunglasses",
            "Travel Adapters",
            "Evening Wear for Dinners",
            "Personal Medications"
        ], tips: [
            "Book couple activities in advance",
            "Keep a printed itinerary",
            "Carry local currency",
            "Plan romantic surprises"
        ],
    },
    {
        name: 'family',
        head: 'Family Trip Packages',
        // vdo: asset.familyVid,
        places: [
            { title: "Singapore", p: "65,000k", btn: "checkout", class: 'family1', desc: "Theme parks, safaris, and cultural tours." },
            { title: "Dubai", p: "70,000k", btn: "checkout", class: 'family2', desc: "Desert fun, malls, aquarium, and Burj Khalifa." },
            { title: "Kerala", p: "40,000k", btn: "checkout", class: 'family3', desc: "Backwaters, wildlife, and houseboats." },
            { title: "London", p: "1,10,000k", btn: "checkout", class: 'family4', desc: "London Eye, museums, and Harry Potter studio." },
        ], inclusions: [
            "Flight Tickets",
            "3/4/5-Star Accommodation",
            "Daily Breakfast",
            "Airport Transfers",
            "Local Sightseeing"
        ], highlights: [
            "Solo-friendly hostels",
            "Safe destinations",
            "Adventure trails and local markets"
        ], packingTips: [
            "Split expenses smartly",
            "Use group travel apps",
            "Pick a flexible itinerary"
        ], tips: [
            " Pack snacks and games for kids",
            "Choose direct flights when possible",
            "Book hotels with family amenities"
        ],
    },
    {
        name: 'single',
        head: 'Solo Trip Packages',
        // vdo: asset.singleVid,
        places: [
            { title: "Thailand", p: "35,000k", btn: "checkout", class: 'single1', desc: "Solo backpacker paradise with islands and parties." },
            { title: "Japan", p: "90,000k", btn: "checkout", class: 'single2', desc: "Safe, scenic, and full of unique experiences." },
        ], inclusions: [
            "Flight Tickets",
            "3/4/5-Star Accommodation",
            "Daily Breakfast",
            "Airport Transfers",
            "Local Sightseeing"
        ], highlights: [
            "Solo-friendly hostels",
            "Safe destinations",
            "Adventure trails and local markets",
            "Cultural sightseeing",
            "Comfortable accommodations"
        ], packingTips: [
            "Split expenses smartly",
            "Use group travel apps",
            "Pick a flexible itinerary"
        ], tips: [
            " Pack snacks and games for kids",
            "Choose direct flights when possible",
            "Book hotels with family amenities"
        ],
    },
    {
        name: 'friends',
        head: 'Friends Trip Packages',
        // vdo: asset.friendsVid,
        places: [
            { title: "Goa", p: "25,000k", btn: "checkout", class: 'friends1', desc: "Beaches, clubs, shacks, and bike rides." },
            { title: "Manali", p: "30,000k", btn: "checkout", class: 'friends2', desc: "Hiking, snow, cafes, and bonfires." },
            { title: "Dubai", p: "75,000k", btn: "checkout", class: 'friends3', desc: "Desert safari, yachts, shopping and nightlife." },
        ], inclusions: [
            "Flight Tickets",
            "3/4/5-Star Accommodation",
            "Daily Breakfast",
            "Airport Transfers",
            "Local Sightseeing"
        ], highlights: [
            "Group adventure activities",
            "Nightlife and parties",
            "Affordable shared stays"
        ], packingTips: [
            "Split expenses smartly",
            "Use group travel apps",
            "Pick a flexible itinerary"
        ], tips: [
            " Pack snacks and games for kids",
            "Choose direct flights when possible",
            "Book hotels with family amenities"
        ],
    },
    {
        name: 'historical',
        head: 'Historical Trip Packages',
        // vdo: asset.historicalVid,
        places: [
            { title: "Rome", p: "85,000k", btn: "checkout", class: 'history1', desc: "Colosseum, Vatican, and Roman ruins." },
            { title: "Agra", p: "20,000k", btn: "checkout", class: 'history2', desc: "Home of Taj Mahal and Mughal architecture." },
            { title: "Athens", p: "90,000k", btn: "checkout", class: 'history3', desc: "Parthenon, temples, and Greek history." },
        ],inclusions: [
            "Flight Tickets",
            "3/4/5-Star Accommodation",
            "Daily Breakfast",
            "Airport Transfers",
            "Local Sightseeing"
        ], highlights: [
            "Group adventure activities",
            "Nightlife and parties",
            "Affordable shared stays"
        ], packingTips: [
            "Split expenses smartly",
            "Use group travel apps",
            "Pick a flexible itinerary"
        ], tips: [
            " Pack snacks and games for kids",
            "Choose direct flights when possible",
            "Book hotels with family amenities"
        ],
    },
    {
        name: 'adventure',
        head: 'Adventure Trip Packages',
        // vdo: asset.adventureVid,
        places: [
            { title: "Rishikesh", p: "20,000k", btn: "checkout", class: 'adventure1', desc: "River rafting, bungee jumping, and camping." },
            { title: "Ladakh", p: "55,000k", btn: "checkout", class: 'adventure2', desc: "Motorbiking, high passes, and Pangong Lake." },
            { title: "New Zealand", p: "1,50,000k", btn: "checkout", class: 'adventure3', desc: "Skydiving, fjords, and volcano treks." },
        ],inclusions: [
            "Flight Tickets",
            "3/4/5-Star Accommodation",
            "Daily Breakfast",
            "Airport Transfers",
            "Local Sightseeing"
        ], highlights: [
            "Group adventure activities",
            "Nightlife and parties",
            "Affordable shared stays"
        ], packingTips: [
            "Split expenses smartly",
            "Use group travel apps",
            "Pick a flexible itinerary"
        ], tips: [
            " Pack snacks and games for kids",
            "Choose direct flights when possible",
            "Book hotels with family amenities"
        ],
    },
];

function OtherList() {

    const { name } = useParams();

    const placelists = Special.find(
        item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (!placelists) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
                <h2>❌ Package not found</h2>
                <p>The package "{name}" does not exist in our offers.</p>
            </div>
        );
    }

    return (
        <>
            <div className="package-list-container">
                <h2 className='text-center heads'>{placelists.head}</h2>
                <div className="swis-head">
                    {placelists.places.map((place, index) => (
                        <div key={index} className={`swis-sub ${place.class} p-4 rounded shadow-lg bg-white`}>
                            <h1 className="text-xl font-bold mb-1">{place.title}</h1>
                            <em className="text-gray-600 block mb-2">{place.p}</em>
                            <p className="mb-3">{place.desc}</p>
                            <Link to='/checking'>
                                <button className='btn-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
                                    {place.btn}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='pck-head'>
                    {placelists.highlights && (
                        <div className="extra-info">
                            <h3>Package Highlights</h3>
                            <ul>{placelists.highlights.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                    )}

                    {placelists.inclusions && (
                        <div className="extra-info">
                            <h3>Inclusions</h3>
                            <ul>{placelists.inclusions.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                    )}

                    {placelists.packingTips && (
                        <div className="extra-info">
                            <h3>Packing Tips</h3>
                            <ul>{placelists.packingTips.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                    )}

                    {placelists.tips && (
                        <div className="extra-info">
                            <h3>Tips for Couples</h3>
                            <ul>{placelists.tips.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                    )}</div>

                    {/* <div>
                        <video controls playsInline autoPlay muted loop width={500} className='text-center'>
                            <source src={asset.swis} />
                        </video>
                    </div> */}
            </div>


        </>
    );
}

export default OtherList;
