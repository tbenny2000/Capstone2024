import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = ({ isLoggedIn }) => {

  const location = useLocation();
  const { state } = location;
  const firstName = state?.firstName;
  const lastName = state?.lastName;

  const Size1 = state?.Size1;
  const Size2 = state?.Size2;
  const Size3 = state?.Size3;

  const AniType1 = state?.AniType1;
  const AniType2 = state?.AniType2;

  const Main1 = state?.Main1;
  const Main2 = state?.Main2;
  const Main3 = state?.Main3;

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="box">
          {/* Content when the user is logged in */}
          <h2 className="title">Welcome {firstName} {lastName}!</h2>
          <p>Data for | {firstName} {lastName} |</p>

          <p>Animal Size Data For {firstName}:</p>

          <p>
            Small: {Size1 ? 'Yes' : 'No'}{' '}
            Medium: {Size2 ? 'Yes' : 'No'}{' '}
            Large: {Size3 ? 'Yes' : 'No'}
          </p>

          <p>Animal Type Data For {firstName}:</p>

          <p>
            Furry: {AniType1 ? 'Yes' : 'No'}{' '}
            Scaly: {AniType2 ? 'Yes' : 'No'}
          </p>

          <p>Animal Maintenance Data For {firstName}:</p>

          <p>
            Low: {Main1 ? 'Yes' : 'No'}{' '}
            Medium: {Main2 ? 'Yes' : 'No'}{' '}
            High: {Main3 ? 'Yes' : 'No'}
          </p>
        </div>
      ) : (
        <div className="box">
          {/* Default content */}
          <h2 className="title">Welcome to PET FRIENDS</h2>
          <p className="subtitle">🏡🐾 Bringing Families and Furry Friends Together 🐾🏡 </p>
          <p>Once upon a time, in the charming town of Pawington, a group of passionate animal 
          lovers decided to embark on a mission to create a haven for furry friends and 
          the families that longed to welcome them into their homes. It all began in the 
          year 2010 when Pet Friends was born a visionary initiative that aimed to bring 
          families and their four-legged companions together in a place filled with love, 
          warmth, and wagging tails.
          <br/>
          In the early days, Pet Friends started as a modest pet adoption center, 
          nestled in the heart of Pawington. The founders, a group of dedicated individuals 
          who believed in the transformations power of pet companionship, envisioned a space 
          that would go beyond the traditional concept of a pet store. Their dream was to 
          establish a community that not only facilitated adoptions but also nurtured a sense 
          of compassion and camaraderie among pet enthusiasts.
          <br/>
          As the years unfolded, so did the evolution of Pet Friends. 
          The once humble adoption center transformed into a vibrant hub, 
          offering not just pets but an entire experience. The founders 
          understood that adopting a pet is a profound decision, and they 
          were determined to make the process as seamless and enjoyable as possible.
          <br/>
          In 2015, Pet Friends introduced a groundbreaking user-friendly interface, 
          a digital gateway that allowed prospective pet parents to explore profiles 
          and get to know each pet's unique personality. The online platform facilitated 
          virtual introductions, making the matchmaking process between families and 
          pets more personalized and heartfelt.
          <br/>
          The community of Pet Friends grew stronger with each passing year. 
          Pet parents shared their stories, celebrated victories, and supported each 
          other through the challenges of pet ownership. What started as a local 
          initiative in Pawington soon gained national recognition, attracting animal 
          lovers from all corners of the country.
          <br/>
          In 2020, a significant milestone was reached as Pet Friends expanded its 
          reach beyond borders, connecting families with their furry friends far and 
          wide. The community flourished into a diverse network of animal advocates, 
          all bound together by their shared love for creatures big and small.As Pet 
          Friends continued to thrive, it became evident that it was more than 
          just a pet store; it was a living testament to compassion and the incredible 
          bond between humans and animals.
          <br/>
          The founders' vision had blossomed into a genuine community built on the 
          principles of love, understanding, and the joy that comes from having a 
          furry friend by your side. And so, the story of Pet Friends continues to 
          unfold, with countless tales of wagging tails, purring companions, and 
          families finding their perfect match. As we look towards the future, 
          the founders remain committed to their initial vision to make the world 
          a better place, one paw at a time. The legacy of Pet Friends lives on, 
          a testament to the enduring power of love and the profound connections 
          forged between families and their beloved furry friends.</p>
        <p className="footer">🏡🐾🏡🐾🏡</p>
        </div>
      )}
    </div>
  );
};

export default Home;
