// components/HomePage.js
'use client';

import { useState } from 'react';
import { Trophy, Calendar, Users, MapPin, Clock, DollarSign } from 'lucide-react';

const TournamentBracket = () => {
  const groups = [
    { name: 'Group A', teams: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'] },
    { name: 'Group B', teams: ['Team 6', 'Team 7', 'Team 8', 'Team 9', 'Team 10'] }
  ];

  return (
    <div className="w-full overflow-x-auto p-4">
      <div className="min-w-[320px] md:min-w-[800px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {groups.map((group) => (
            <div key={group.name} className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{group.name}</h3>
              <div className="space-y-2">
                {group.teams.map((team) => (
                  <div key={team} className="bg-gray-50 p-2 rounded text-gray-800">
                    {team}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Knockout Stage</h3>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full md:w-64">
              <div className="text-center font-bold text-gray-900">Finals</div>
              <div className="mt-4 space-y-2">
                <div className="bg-gray-50 p-2 rounded text-gray-800">Winner Group A</div>
                <div className="bg-gray-50 p-2 rounded text-gray-800">Winner Group B</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('u18');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const ageCategories = {
    u18: 'Under 18s',
    u30: 'Under 30s',
    u50: '30 and Over'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-white mb-4 sm:mb-0">Sydney Soccer Championship</div>
            <div className="flex space-x-6">
              <a href="#about" className="hover:text-blue-200 text-white font-medium">About</a>
              <a href="#schedule" className="hover:text-blue-200 text-white font-medium">Schedule</a>
              <a href="#registration" className="hover:text-blue-200 text-white font-medium">Registration</a>
              <a href="#prizes" className="hover:text-blue-200 text-white font-medium">Prizes</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Sydney's Greatest Soccer Tournament</h1>
          <p className="text-lg sm:text-xl mb-8 text-white">Join 1000+ players competing for $10,000 in prizes!</p>
          <button className="bg-yellow-400 text-blue-900 px-6 sm:px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition duration-200">
            Register Now
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Key Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Event Dates</h3>
            <p className="text-gray-800">Wednesday - Friday</p>
            <p className="text-gray-800">August 15-17, 2025</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Prize Pool</h3>
            <p className="text-gray-800">$10,000 Total Prizes</p>
            <p className="text-gray-800">Trophies & Medals</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Categories</h3>
            <p className="text-gray-800">Three Age Groups</p>
            <p className="text-gray-800">1000+ Players Expected</p>
          </div>
        </div>

        {/* Age Categories & Tournament Structure */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Tournament Structure</h2>
          
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {Object.entries(ageCategories).map(([key, value]) => (
                <button
                  key={key}
                  className={`px-4 sm:px-6 py-2 rounded-full ${
                    activeTab === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  {value}
                </button>
              ))}
            </div>
            
            <TournamentBracket />
          </div>
        </section>

        {/* Special Appearances */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Special Appearances</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                <img src="/promoplayers/AdrianSegecic.webp" alt="Adrian Segecic" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Adrian Segecic</h3>
              <p className="text-gray-800">Sydney FC Star</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                <img src="/promoplayers/DouglasCosta.jpg" alt="Douglas Costa" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Douglas Costa</h3>
              <p className="text-gray-800">Sydney FC Star</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                <img src="/promoplayers/PatrykKlimala.webp" alt="Patryk Klimala" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Patryk Klimala</h3>
              <p className="text-gray-800">Sydney FC Star</p>
            </div>
          </div>
        </section>

        {/* Family Entertainment */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Family Entertainment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Food & Drinks</h3>
              <ul className="space-y-2 text-gray-800">
                <li>✓ Classic Sausage Sizzle</li>
                <li>✓ Food Trucks</li>
                <li>✓ Refreshing Beverages</li>
                <li>✓ Ice Cream Stand</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Activities</h3>
              <ul className="space-y-2 text-gray-800">
                <li>✓ Face Painting</li>
                <li>✓ Skills Challenge</li>
                <li>✓ Mini Games</li>
                <li>✓ Photo Opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Registration Requirements */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Registration Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Team Requirements</h3>
              <ul className="space-y-3 text-gray-800">
                <li>• Squad size: 12-15 players</li>
                <li>• Valid ID for age verification</li>
                <li>• Team uniform (matching jerseys)</li>
                <li>• Team manager/coach contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Registration Process</h3>
              <ul className="space-y-3 text-gray-800">
                <li>• Complete online registration form</li>
                <li>• Submit team roster</li>
                <li>• Pay registration fee</li>
                <li>• Sign waivers and consent forms</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transform hover:scale-105 transition duration-200">
              Start Registration
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <p>Email: info@sydneysoccer.com</p>
              <p>Phone: (02) 1234 5678</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Location</h4>
              <p>Sydney Sports Complex</p>
              <p>123 Stadium Drive</p>
              <p>Sydney, NSW 2000</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-200">About</a></li>
                <li><a href="#" className="hover:text-blue-200">Schedule</a></li>
                <li><a href="#" className="hover:text-blue-200">Registration</a></li>
                <li><a href="#" className="hover:text-blue-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-200">Facebook</a>
                <a href="#" className="hover:text-blue-200">Twitter</a>
                <a href="#" className="hover:text-blue-200">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>&copy; 2025 Sydney Soccer Championship. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}